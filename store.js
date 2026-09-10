/* ============================================================
   MUELLE 817 TRC  ·  Capa de datos (Firestore)
   - Lectura pública del menú
   - Escritura solo para el administrador autenticado
   - Imágenes guardadas comprimidas en Firestore (colección "media")
   ============================================================ */
(function () {
  var CONFIG_DOC = db.collection("config").doc("site");
  var SECTIONS = db.collection("sections");
  var MEDIA = db.collection("media");

  // Caché de imágenes ya descargadas (id -> dataURL)
  var mediaCache = {};

  /* ---------- Utilidades ---------- */

  function fmtPrice(v) {
    if (v === undefined || v === null) return "";
    v = String(v).trim();
    if (v === "") return "";
    if (v[0] === "$") return v;
    return "$" + v;
  }

  // Comprime una imagen (File) y devuelve una promesa con el dataURL.
  function compressImage(file, opts) {
    opts = opts || {};
    var maxDim = opts.maxDim || 1400;
    var quality = opts.quality || 0.72;
    var format = opts.format || "image/jpeg"; // "image/png" para logo

    return new Promise(function (resolve, reject) {
      if (!file) { reject(new Error("Sin archivo")); return; }
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error("No se pudo leer el archivo")); };
      reader.onload = function () {
        var img = new Image();
        img.onerror = function () { reject(new Error("Imagen no válida")); };
        img.onload = function () {
          function render(dim, q, fmt) {
            var w = img.width, h = img.height;
            if (w > dim || h > dim) {
              if (w >= h) { h = Math.round(h * dim / w); w = dim; }
              else { w = Math.round(w * dim / h); h = dim; }
            }
            var canvas = document.createElement("canvas");
            canvas.width = w; canvas.height = h;
            var ctx = canvas.getContext("2d");
            if (fmt === "image/jpeg") { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, w, h); }
            ctx.drawImage(img, 0, 0, w, h);
            return canvas.toDataURL(fmt, q);
          }
          try {
            var out = render(maxDim, quality, format);
            // Firestore limita cada documento a ~1 MB. Reducimos si hace falta.
            var attempts = [
              [1100, 0.62], [900, 0.55], [720, 0.5], [560, 0.45]
            ];
            var i = 0;
            while (out.length > 1200000 && i < attempts.length) {
              out = render(attempts[i][0], attempts[i][1], "image/jpeg");
              i++;
            }
            resolve(out);
          } catch (e) { reject(e); }
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  /* ---------- Lectura ---------- */

  function loadConfig() {
    return CONFIG_DOC.get().then(function (snap) {
      return snap.exists ? snap.data() : {};
    });
  }

  function loadSections() {
    return SECTIONS.orderBy("order").get().then(function (qs) {
      var out = [];
      qs.forEach(function (d) {
        var data = d.data(); data.id = d.id; out.push(data);
      });
      return out;
    });
  }

  function loadMedia(id) {
    if (!id) return Promise.resolve(null);
    if (mediaCache[id]) return Promise.resolve(mediaCache[id]);
    return MEDIA.doc(id).get().then(function (snap) {
      if (!snap.exists) return null;
      var data = snap.data().data;
      mediaCache[id] = data;
      return data;
    }).catch(function () { return null; });
  }

  function preloadMedia(ids) {
    ids = (ids || []).filter(Boolean);
    return Promise.all(ids.map(loadMedia));
  }

  /* ---------- Escritura (requiere admin autenticado) ---------- */

  function saveConfig(data) {
    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    return CONFIG_DOC.set(data, { merge: true });
  }

  function addMedia(dataUrl) {
    return MEDIA.add({
      data: dataUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function (ref) { mediaCache[ref.id] = dataUrl; return ref.id; });
  }

  function deleteMedia(id) {
    if (!id) return Promise.resolve();
    delete mediaCache[id];
    return MEDIA.doc(id).delete().catch(function () {});
  }

  // Sube un File como imagen comprimida y devuelve el id del media.
  function uploadImage(file, opts) {
    return compressImage(file, opts).then(addMedia);
  }

  function addSection(data) {
    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    return SECTIONS.add(data).then(function (ref) { return ref.id; });
  }

  function updateSection(id, data) {
    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    return SECTIONS.doc(id).set(data, { merge: true });
  }

  function deleteSection(section) {
    // Borra también las fotos asociadas para no dejar basura.
    var ids = (section && section.photoIds) || [];
    return Promise.all(ids.map(deleteMedia)).then(function () {
      return SECTIONS.doc(section.id).delete();
    });
  }

  // Carga el menú inicial del PDF si aún no existe nada.
  function seedAll(force) {
    return loadSections().then(function (existing) {
      if (existing.length > 0 && !force) {
        return { skipped: true, count: existing.length };
      }
      var seed = window.SEED;
      var jobs = [];
      // Config (sin sobrescribir lo que el admin ya haya puesto)
      jobs.push(CONFIG_DOC.get().then(function (s) {
        if (!s.exists) return saveConfig(JSON.parse(JSON.stringify(seed.config)));
      }));
      // Secciones
      seed.sections.forEach(function (sec) {
        var copy = JSON.parse(JSON.stringify(sec));
        copy.photoIds = [];
        jobs.push(addSection(copy));
      });
      return Promise.all(jobs).then(function () {
        return { skipped: false, count: seed.sections.length };
      });
    });
  }

  window.Store = {
    fmtPrice: fmtPrice,
    compressImage: compressImage,
    loadConfig: loadConfig,
    loadSections: loadSections,
    loadMedia: loadMedia,
    preloadMedia: preloadMedia,
    saveConfig: saveConfig,
    uploadImage: uploadImage,
    addMedia: addMedia,
    deleteMedia: deleteMedia,
    addSection: addSection,
    updateSection: updateSection,
    deleteSection: deleteSection,
    seedAll: seedAll,
    ADMIN_USER: window.ADMIN_USER,
    ADMIN_EMAIL: window.ADMIN_EMAIL
  };
})();
