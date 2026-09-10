/* ============================================================
   MUELLE 817 TRC  ·  Inicialización de Firebase
   (Configuración proporcionada por el cliente)
   ============================================================ */
var firebaseConfig = {
  apiKey: "AIzaSyCKFIfxTY-q4x0o2C3pPUYQK3-EgrjIacI",
  authDomain: "muelle871-5f63b.firebaseapp.com",
  projectId: "muelle871-5f63b",
  storageBucket: "muelle871-5f63b.firebasestorage.app",
  messagingSenderId: "469866359064",
  appId: "1:469866359064:web:69cf96c57c090d3d70d66d",
  measurementId: "G-E8YWN847M1"
};

// Correo interno del administrador. El usuario en pantalla es "ale".
// La contraseña NO se guarda aquí: la verifica Firebase al iniciar sesión.
var ADMIN_USER = "ale";
var ADMIN_EMAIL = "ale@muelle871.com";

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
window.auth = firebase.auth();

// Mantener sesión iniciada en el navegador del admin.
try { window.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); } catch (e) {}
