/* ============================================================
   MUELLE 817 TRC  ·  Menú inicial (transcrito del PDF)
   Este archivo solo se usa para "Cargar menú inicial" desde el
   panel de administración. Después, todo se edita desde el admin.
   ============================================================ */
window.SEED = {
  config: {
    restaurantName: "Muelle 817 TRC",
    tagline: "Mariscos & Cortes",
    phone: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    tiktok: "",
    reviewUrl: "",
    address: ""
  },
  sections: [
    /* ---------------- ALIMENTOS ---------------- */
    {
      name: "TOSTADAS", group: "food", order: 1, twoPrice: false,
      items: [
        { name: "Tostada de Ceviche de Pescado", price: "85", desc: "Pescado fresco marinado en cítricos, mezclado con tomate, cebolla, pepino y un ligero toque de jugo de almeja que realza su sabor y frescura." },
        { name: "Tostada de Ceviche Mixto", price: "100", desc: "La combinación perfecta de pescado y camarón frescos, marinados en limón con tomate, cebolla, pepino y un ligero toque de jugo de almeja." },
        { name: "Tostada de Camarón Cocido", price: "95", desc: "Camarón cocido sazonado con limón, salsas negras y jugo de almeja logrando un sabor intenso y lleno de carácter." },
        { name: "Tostada de Pulpo", price: "110", desc: "Pulpo suave marinado en limón con tomate, cebolla, pepino y un toque de jugo de almeja que resalta su frescura." },
        { name: "Tostada Mitotera", price: "130", desc: "Una mezcla de camarón, pulpo y pescado bañada en nuestra inconfundible salsa negra de la casa con un toque de picor que despierta en cada bocado." },
        { name: "Tostada Caribeña", price: "90", desc: "Camarón fresco acompañado de mango y piña, creando el equilibrio perfecto entre lo dulce, lo cítrico y lo tropical." },
        { name: "Tostada de Callo de Hacha", price: "175", desc: "Callo de hacha fresco marinado con limón, pimienta, chile quebrado y sal, resaltando su sabor natural." },
        { name: "Tostada de Atún Fresco", price: "115", desc: "Láminas de atún fresco acompañadas de salsas negras, limón, chile serrano y un delicado aderezo chipotle." },
        { name: "Tostada Cubana", price: "110", desc: "Atún y camarón frescos con mango y un toque de habanero, logrando una combinación vibrante de sabores tropicales y picantes." },
        { name: "Tostada Tropical", price: "100", desc: "Camarón fresco con mango, marinando al momento en una combinación de cítricos que resalta el contraste entre frescura y dulzor." },
        { name: "Tostada Miramar", price: "135", desc: "Atún salteado al limón eureka y chiltepín, sobre aguacate y alioli de chipotle, con reducción de jamaica y crujiente de zanahoria." }
      ]
    },
    {
      name: "CÓCTELES", group: "food", order: 2, twoPrice: false,
      items: [
        { name: "Cóctel de Camarón", price: "185", desc: "Camarón fresco servido en una mezcla de jugo de almeja, cítricos y nuestra receta de la casa, acompañado de aguacate, cebolla y cilantro." },
        { name: "Cóctel de Camarón y Pulpo", price: "185", desc: "La combinación de camarón y pulpo en un cóctel fresco, preparado con jugo de almeja, cítricos y la sazón característica de Muelle 817 TRC." },
        { name: "Cóctel de Pulpo", price: "195", desc: "Pulpo tierno servido en una refrescante mezcla de cítricos, jugo de tomate y el toque especial de la casa." },
        { name: "Cóctel Campechano", price: "210", desc: "Una selección de camarón, pulpo y callo de hacha, servidos en un cóctel lleno de frescura y sabor." },
        { name: "Cóctel Maléfico", price: "210", desc: "Camarón cocido y curtido, callo de hacha, jugo de almeja, cebolla y chile serrano en una preparación intensa que hace honor a su nombre." }
      ]
    },
    {
      name: "PESCA FRESCA", group: "food", order: 3, twoPrice: false,
      items: [
        { name: "Mariscada", price: "350", desc: "Pulpo, callo de hacha, atún, camarón cocido y curtido, bañados en nuestra inconfundible salsa negra de la casa." },
        { name: "Aguachile de Camarón", price: "375", desc: "Camarón curtido en una intensa salsa de limón y chiles tatemados." },
        { name: "Aguachile Mixto", price: "325", desc: "Combinación de camarón curtido y atún fresco en una salsa cítrica con el balance perfecto de picor." },
        { name: "Aguachile de Pulpo y Camarón", price: "375", desc: "Pulpo y camarón marinados en una salsa de limón y chile que realza el sabor de cada ingrediente." },
        { name: "Aguachile de Rib Eye", price: "550", desc: "Jugoso Rib Eye acompañado de nuestro característico aguachile, una fusión que combina la intensidad de la carne con la frescura del mar." },
        { name: "Aguachile de Pulpo", price: "400", desc: "Aguachile de pulpo a las brasas, acompañado de una delicada salsa verde de notas cítricas." },
        { name: "Molcajete de Mariscos", price: "350", desc: "Pulpo, callo de hacha y camarón servidos en molcajete con nuestra salsa negra, una receta que concentra todo el sabor del mar." },
        { name: "Filete del Muelle", price: "210", desc: "Filete de pescado preparado al momento y disponible en tu estilo favorito: al mojo de ajo, al ajillo, a la mantequilla y empanizado, acompañado de arroz y vegetales de temporada." },
        { name: "Filete Cremoso", price: "235", desc: "Filete de pescado a la plancha cubierto con una cremosa salsa a elegir: culichi, cilantro, chipotle o jalapeño, acompañado de arroz y vegetales de temporada." },
        { name: "Salmón a las Semillas Mexicanas", price: "440", desc: "Salmón a la plancha bañado con nuestra salsa especial de la casa, acompañado de puré de papa y vegetales de temporada." }
      ]
    },
    {
      name: "CEVICHES", group: "food", order: 4, twoPrice: false,
      items: [
        { name: "De Pescado", price: "200", desc: "Cubos de pescado fresco marinados en jugo de limón, mezclados con tomate, cebolla, pepino y cilantro. Un clásico de sabor fresco y auténtico." },
        { name: "De Camarón", price: "220", desc: "Camarón fresco marinado en limón, acompañado de tomate, cebolla, pepino y cilantro con el equilibrio perfecto entre frescura y sabor." },
        { name: "De Pulpo", price: "250", desc: "Suaves trozos de pulpo marinados en limón con tomate, cebolla, pepino y cilantro, resaltando el sabor natural del mar." },
        { name: "Mixto", price: "260", desc: "La combinación perfecta de camarón y pulpo, marinados en limón acompañados de vegetales frescos para una experiencia llena de sabor." },
        { name: "Tropical", price: "230", desc: "Camarón fresco con cubos de mango, marinado en limón y mezclado con vegetales frescos. Una combinación dulce y cítrica que conquista al primer bocado." },
        { name: "Mitotero", price: "280", desc: "Una explosiva combinación de camarón, pulpo y pescado fresco, marinados en una intensa salsa negra ligeramente picante que resalta el sabor de cada ingrediente con frescura y carácter." },
        { name: "Caribeño", price: "240", desc: "Fresco pescado acompañado de la dulzura natural del mango y la piña marinados en una mezcla de cítricos que evocan los auténticos sabores del caribe en cada bocado." },
        { name: "Sol de Maracuyá", price: "260", desc: "Cubos de atún al aceite de ajonjolí sobre una delicada base de maracuyá, con el toque fresco de pepino y cebolla morada." }
      ]
    },
    {
      name: "CARPACCIOS", group: "food", order: 5, twoPrice: false,
      items: [
        { name: "Atún Fresco", price: "300", desc: "Delicadas láminas de atún fresco, marinadas en una fina mezcla de cítricos y el toque especial de la casa, resaltando su textura suave y su sabor natural." },
        { name: "Pulpo", price: "420", desc: "Finas láminas de pulpo cocido al punto, marinadas con cítricos y un delicado toque de especias que realzan su sabor y frescura." },
        { name: "Callo de Hacha", price: "499", desc: "Exquisitas láminas de callo de hacha fresco, acompañadas de cebolla morada y pepino, bañadas en una delicada salsa agridulce que realza su textura suave y su inigualable sabor." }
      ]
    },
    {
      name: "CALDOS Y SOPA", group: "food", order: 6, twoPrice: false,
      items: [
        { name: "Caldo de Camarón", price: "180", desc: "Tradicional caldo elaborado con camarones frescos, vegetales y un delicado toque de especias, ofreciendo un sabor intenso y reconfortante." },
        { name: "Caldo de Pescado", price: "155", desc: "Reconfortante caldo preparado con pescado fresco, cocinado lentamente con vegetales y especias, que realzan el sabor del mar en cada cucharada." },
        { name: "Sopa de Mariscos", price: "230", desc: "Una exquisita combinación de camarón y pescado fresco, cocinados en un caldo lleno de sabor con vegetales y especias, ideal para disfrutar de la esencia del mar." }
      ]
    },
    {
      name: "HAMBURGUESAS", group: "food", order: 7, twoPrice: false,
      items: [
        { name: "Camarón", price: "220", desc: "Deliciosa hamburguesa de camarón sazonado, con queso derretido, vegetales frescos y aderezo especial de la casa, servida en pan artesanal con papas a la francesa." },
        { name: "Sirloin", price: "240", desc: "Jugosa carne de sirloin a la parrilla, acompañada de queso derretido, vegetales frescos y aderezo especial de la casa, servida en pan artesanal con papas a la francesa." }
      ]
    },
    {
      name: "ESPECIALIDADES", group: "food", order: 8, twoPrice: false,
      items: [
        { name: "Pulpo a las Brasas ★", price: "390", desc: "Pulpo cocinado lentamente a las brasas, acompañado de puré de camote y terminado con un delicado aderezo de alcaparras." },
        { name: "Pescado Zarandeado", price: "430", desc: "Pescado a las brasas bañado en un aderezo único elaborado por el chef con un sabor intenso y ligeramente ahumado." },
        { name: "Camarones Cuchupetas", price: "380", desc: "Jugosos camarones a las brasas, bañados en un cremoso aderezo emulsionado de mantequilla que realza su sabor con un toque irresistible." },
        { name: "Salmón a las Semillas Mexicanas", price: "440", desc: "Filete de salmón a la plancha, servido sobre un espejo de salsa de mango y coronado con una selección de semillas mexicanas tostadas, acompañado de puré de papa y espárragos al vapor." },
        { name: "Ensalada César", price: "230", desc: "Crujiente mezcla de lechugas con camarones a la plancha, preparada al momento en tu mesa con el clásico aderezo césar, queso parmesano y crotones." },
        { name: "Arrecife de Atún", price: "290", desc: "Atún a la plancha empanizado de ajonjolí sobre un cremoso puré de papa acompañado de verduras salteadas en mantequilla." }
      ]
    },
    {
      name: "TACOS", group: "food", order: 9, twoPrice: false,
      items: [
        { name: "Marlin con Queso", price: "120", desc: "Marlin ahumado envuelto o sobre una crujiente costra de queso, acompañado de cebolla morada, aguacate y aderezo de chipotle que aporta un toque cremoso y ligeramente picante." },
        { name: "Camarón con Queso", price: "125", desc: "Jugosos camarones sobre dorada costra de queso, acompañados de cebolla morada, aguacate y aderezo de chipotle para un equilibrio perfecto de sabor y textura." },
        { name: "Pulpo con Queso", price: "130", desc: "Pulpo cocido al punto sobre una costra de queso dorado, acompañado de cebolla morada, aguacate y aderezo de chipotle que realza su inconfundible sabor." },
        { name: "Huérfano de Camarón", price: "120", desc: "Camarón capeado en una delicada salsa agridulce que combina una textura crujiente con un sabor irresistible." },
        { name: "Catamarán", price: "140", desc: "Crujientes tiras de pescado empanizado y camarón, acompañadas de fresco pico de gallo que aporta equilibrio perfecto en cada bocado." },
        { name: "Chilacon", price: "120", desc: "Chile chilaca relleno a tu elección con camarón, pulpo o marlín, cubierto con una crujiente costra de queso que lo convierte en una combinación única de sabor y tradición." },
        { name: "Baja", price: "140", desc: "Elige entre camarón o pescado, acompañado de col morada y un suave aderezo cremoso, inspirado en el auténtico estilo baja." },
        { name: "Muelle 817", price: "150", desc: "Nuestra especialidad de la casa: camarones a la plancha con queso gratinado, bañados en la salsa de tu elección: culichi, cilantro, chipotle o jalapeño cremoso." },
        { name: "Bichi", price: "140", desc: "Tentáculo de pulpo a las brasas sobre una costra de queso, marinado en una mezcla de chiles secos y terminado con nuestra inconfundible salsa macha de la casa." },
        { name: "Gobernador", price: "130", desc: "El clásico del pacífico: camarones salteados con cebolla y chile poblano, envueltos en queso gratinado y delicadamente salteados con mantequilla sobre una tortilla doblada y crocante." }
      ]
    },
    {
      name: "CAMARONES", group: "food", order: 10, twoPrice: false,
      items: [
        { name: "A la Diabla", price: "240", desc: "Camarones salteados en nuestra salsa a la diabla de la casa, de sabor intenso y picante rindiendo honor a su nombre." },
        { name: "Tocineta", price: "250", desc: "Jugosos camarones salteados con crujiente tocineta, logrando una combinación de sabores intensos y perfectamente equilibrados." },
        { name: "Camarones al Coco", price: "245", desc: "Sutil espejo de salsa de mango sobre un cremoso puré de papa, rodeado de camarones al coco." },
        { name: "Philadelphia a la Tocineta", price: "270", desc: "Camarones rellenos de queso crema, envueltos en tocineta y cocinados hasta lograr una combinación irresistible de sabor y textura." },
        { name: "Al Ajo", price: "220", desc: "Camarones salteados a la mantequilla con ajo fresco, preparados al momento para resaltar todo el sabor del mar." },
        { name: "Cremosos", price: "235", desc: "Jugosos camarones bañados en una suave y cremosa salsa de la casa, elaborada para brindar un sabor delicado y lleno de personalidad." }
      ]
    },
    {
      name: "CORTES SELECTOS", group: "food", order: 11, twoPrice: false,
      items: [
        { name: "Rib Eye (350 g)", price: "650", desc: "Corte premium de excelente marmoleo, preparado al término de tu elección para ofrecer una experiencia llena de jugosidad y sabor." },
        { name: "New York (350 g)", price: "620", desc: "Corte de gran firmeza y sabor intenso, asado a la perfección para resaltar cada uno de sus atributos." },
        { name: "Cowboy (500 g)", price: "600", desc: "Espectacular corte premium de 500 g con hueso, reconocido por su abundante marmoleo y excepcional terneza. Cocinado al término de tu elección para brindar una experiencia llena de sabor y jugosidad." }
      ]
    },
    {
      name: "PARA LOS PEQUES", group: "food", order: 12, twoPrice: false,
      items: [
        { name: "Nuggets de Pollo", price: "75", desc: "Piezas de pollo crujientes." },
        { name: "Papas a la Francesa", price: "65", desc: "" }
      ]
    },
    {
      name: "POSTRES", group: "food", order: 13, twoPrice: false,
      items: [
        { name: "Cheesecake de Fresa", price: "130", desc: "Cremoso pastel de queso bañado en mermelada de fresa." },
        { name: "Cheesecake de Mango", price: "130", desc: "Fresco pastel de queso bañado en salsa tropical." },
        { name: "Helado de Vaina de Vainilla", price: "80", desc: "Cremoso helado de la casa de vainilla." },
        { name: "Mostachón de Fresa", price: "130", desc: "Mostachón de textura crujiente y corazón suave, acompañado de crema artesanal y fresas frescas en cada bocado." }
      ]
    },

    /* ---------------- BEBIDAS ---------------- */
    {
      name: "BEBIDA SIN ALCOHOL", group: "drinks", order: 14, twoPrice: false,
      items: [
        { name: "Limonada Mineral", price: "75", desc: "" },
        { name: "Limonada Natural", price: "70", desc: "" },
        { name: "Limonada de Jamaica", price: "75", desc: "" },
        { name: "Refrescos", price: "45", desc: "" },
        { name: "Agua Purificada", price: "45", desc: "" }
      ]
    },
    {
      name: "AGUA CARBONATADA", group: "drinks", order: 15, twoPrice: false,
      items: [
        { name: "Topo Chico (355 ml)", price: "70", desc: "" },
        { name: "Perrier (330 ml)", price: "75", desc: "" },
        { name: "Tónica", price: "75", desc: "" }
      ]
    },
    {
      name: "CERVEZAS", group: "drinks", order: 16, twoPrice: false,
      items: [
        { name: "Corona", price: "45", desc: "" },
        { name: "Corona Cero", price: "45", desc: "" },
        { name: "Corona Light", price: "45", desc: "" },
        { name: "Victoria", price: "45", desc: "" },
        { name: "Pacífico Suave", price: "50", desc: "" },
        { name: "Modelo Especial", price: "60", desc: "" },
        { name: "Negra Modelo", price: "60", desc: "" },
        { name: "Michelob Ultra", price: "60", desc: "" },
        { name: "Stella", price: "60", desc: "" }
      ]
    },
    {
      name: "CLAMATOS", group: "drinks", order: 17, twoPrice: false,
      items: [
        { name: "Vaso Michelado", price: "40", desc: "" },
        { name: "Vaso Chelado", price: "35", desc: "" },
        { name: "Clamacheve", price: "55", desc: "" },
        { name: "Clamapiña", price: "75", desc: "" },
        { name: "Clamamango", price: "75", desc: "" },
        { name: "Muelle 817", price: "120", desc: "" }
      ]
    },
    {
      name: "RON", group: "drinks", order: 18, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Bacardi Blanco", price: "100", price2: "1500", desc: "" },
        { name: "Zacapa 12", price: "160", price2: "2400", desc: "" },
        { name: "Matusalem Platino", price: "110", price2: "1150", desc: "" },
        { name: "Matusalem Clásico", price: "120", price2: "1200", desc: "" },
        { name: "Havana 3", price: "100", price2: "850", desc: "" }
      ]
    },
    {
      name: "BRANDY", group: "drinks", order: 19, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Torres 10", price: "110", price2: "1000", desc: "" },
        { name: "Torres 15", price: "130", price2: "1700", desc: "" },
        { name: "Azteca de Oro", price: "70", price2: "750", desc: "" }
      ]
    },
    {
      name: "GINEBRA", group: "drinks", order: 20, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Bombay", price: "140", price2: "1600", desc: "" },
        { name: "Beefeater", price: "140", price2: "1400", desc: "" },
        { name: "Tanqueray Dry", price: "140", price2: "1550", desc: "" },
        { name: "Hendrick's", price: "220", price2: "2800", desc: "" }
      ]
    },
    {
      name: "MEZCAL", group: "drinks", order: 21, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "400 Conejos", price: "150", price2: "1500", desc: "" },
        { name: "Montelobos Espadín", price: "150", price2: "1900", desc: "" },
        { name: "Montelobos Tobalá", price: "290", price2: "4500", desc: "" },
        { name: "Mitre", price: "130", price2: "1650", desc: "" },
        { name: "Doña Natalia", price: "350", price2: "5500", desc: "" },
        { name: "Fandango", price: "80", price2: "800", desc: "" }
      ]
    },
    {
      name: "TEQUILA", group: "drinks", order: 22, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "1800 Cristalino", price: "160", price2: "2200", desc: "" },
        { name: "1800 Añejo", price: "150", price2: "2200", desc: "" },
        { name: "Tradicional Plata", price: "90", price2: "1000", desc: "" },
        { name: "Tradicional Reposado", price: "85", price2: "1000", desc: "" },
        { name: "Don Julio 70", price: "210", price2: "2400", desc: "" },
        { name: "Maestro Dobel D", price: "150", price2: "2000", desc: "" },
        { name: "Casa Dragones B", price: "520", price2: "5500", desc: "" }
      ]
    },
    {
      name: "VODKA", group: "drinks", order: 23, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Smirnoff Tamarindo", price: "70", price2: "800", desc: "" },
        { name: "Smirnoff", price: "75", price2: "800", desc: "" },
        { name: "Absolut Azul", price: "85", price2: "800", desc: "" },
        { name: "Absolut Citrón", price: "90", price2: "800", desc: "" },
        { name: "Stolichnaya", price: "80", price2: "900", desc: "" }
      ]
    },
    {
      name: "WHISKY", group: "drinks", order: 24, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Buchanan's 12", price: "150", price2: "1800", desc: "" },
        { name: "Buchanan's 18", price: "180", price2: "3000", desc: "" },
        { name: "Red Label", price: "110", price2: "1000", desc: "" },
        { name: "Black Label", price: "180", price2: "1850", desc: "" },
        { name: "Macallan 12", price: "310", price2: "3500", desc: "" },
        { name: "Jack Daniel's", price: "120", price2: "1500", desc: "" },
        { name: "Bulleit Bourbon", price: "110", price2: "1000", desc: "" }
      ]
    },
    {
      name: "LICORES", group: "drinks", order: 25, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Baileys", price: "120", price2: "1400", desc: "" },
        { name: "Frangelico", price: "125", price2: "1300", desc: "" },
        { name: "Licor 43", price: "120", price2: "1400", desc: "" },
        { name: "Cointreau", price: "150", price2: "1900", desc: "" },
        { name: "Chambord", price: "150", price2: "2400", desc: "" },
        { name: "Jägermeister", price: "110", price2: "1300", desc: "" },
        { name: "Pacharán", price: "75", price2: "1000", desc: "" }
      ]
    },
    {
      name: "VINOS BLANCOS", group: "drinks", order: 26, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Casa Madero 2V (750 ml)", price: "249.50", price2: "1247.50", desc: "" },
        { name: "Casa Madero Chardonnay (750 ml)", price: "225", price2: "1125", desc: "" }
      ]
    },
    {
      name: "VINOS ESPUMOSOS", group: "drinks", order: 27, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Opera Charmat", price: "70", price2: "350", desc: "" }
      ]
    },
    {
      name: "VINOS TINTOS", group: "drinks", order: 28, twoPrice: true, priceLabel1: "Copa", priceLabel2: "Botella",
      items: [
        { name: "Casa Madero 3V (750 ml)", price: "325", price2: "1100", desc: "" },
        { name: "L.A. Cetto Merlot 2017 (750 ml)", price: "94.50", price2: "472.50", desc: "" },
        { name: "L.A. Cetto Merlot 2019 (750 ml)", price: "94.50", price2: "472.50", desc: "" }
      ]
    }
  ]
};
