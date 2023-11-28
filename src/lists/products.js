let productos = [
    {
      id: 1,
      nombre: 'Portátil HP Pavilion',
      descripcion: 'Portátil con procesador Intel Core i5, 8 GB de RAM y 512 GB de SSD',
      categoria: 'Electrónica',
      resena: 'Excelente rendimiento y diseño elegante.',
      imagen: '/images/img1.jpg',
      precio: 799.99,
    },
    {
      id: 2,
      nombre: 'Teléfono Samsung Galaxy S21',
      descripcion: 'Smartphone con pantalla AMOLED, cámara de 64 MP y 128 GB de almacenamiento.',
      categoria: 'Electrónica',
      resena: 'Potente y versátil para tus necesidades diarias.',
      imagen: '/images/img2.webp',
      precio: 899.99,
    },
    {
      id: 3,
      nombre: 'Zapatillas Deportivas Nike Air Max',
      descripcion: 'Zapatillas para correr con tecnología de amortiguación Air Max.',
      categoria: 'Ropa y Calzado',
      resena: 'Comodidad y estilo para tus entrenamientos.',
      imagen: '/images/img3.png',
      precio: 129.99,
    },
    {
      id: 4,
      nombre: 'Televisor 4K LG OLED',
      descripcion: 'Televisor con resolución 4K, HDR y pantalla OLED de 55 pulgadas.',
      categoria: 'Electrónica',
      resena: 'Calidad de imagen excepcional para tu entretenimiento en casa.',
      imagen: '/images/img4.avif',
      precio: 1499.99,
    },
    {
      id: 5,
      nombre: 'Libro: "El Señor de los Anillos"',
      descripcion: 'Trilogía clásica de J.R.R. Tolkien en una edición especial.',
      categoria: 'Libros',
      resena: 'Una obra maestra de la literatura fantástica.',
      imagen: '/images/img5.webp',
      precio: 39.99,
    },
    {
      id: 6,
      nombre: 'Cámara DSLR Canon EOS 90D',
      descripcion: 'Cámara digital con sensor APS-C de 32.5 MP y grabación de video 4K.',
      categoria: 'Electrónica',
      resena: 'Captura momentos inolvidables con calidad profesional.',
      imagen: '/images/img6.jpg',
      precio: 1199.99,
    },
    {
      id: 7,
      nombre: 'Juego de Mesa Catan',
      descripcion: 'Juego de estrategia clásico para toda la familia.',
      categoria: 'Juegos',
      resena: 'Diversión garantizada en cada partida.',
      imagen: '/images/img7.webp',
      precio: 49.99,
    },
    {
      id: 8,
      nombre: 'Auriculares Inalámbricos Sony WH-1000XM4',
      descripcion: 'Auriculares con cancelación de ruido y sonido de alta calidad.',
      categoria: 'Electrónica',
      resena: 'Sumérgete en tu música con una calidad de sonido excepcional.',
      imagen: '/images/img8.jpg',
      precio: 349.99,
    },
    {
      id: 9,
      nombre: 'Mochila para Portátil SwissGear',
      descripcion: 'Mochila duradera con compartimento acolchado para portátil de hasta 15 pulgadas.',
      categoria: 'Accesorios',
      resena: 'Ideal para llevar tus dispositivos de forma segura.',
      imagen: '/images/img9.jpg',
      precio: 59.99,
    },
    {
      id: 10,
      nombre: 'Teclado Mecánico Logitech G Pro X',
      descripcion: 'Teclado gaming mecánico con interruptores intercambiables.',
      categoria: 'Electrónica',
      resena: 'Rendimiento y personalización para jugadores exigentes.',
      imagen: '/images/img10.webp',
      precio: 129.99,
    },  {
      id: 11,
      nombre: 'Smartwatch Apple Watch Series 6',
      descripcion: 'Reloj inteligente con monitor de oxígeno en sangre y ECG.',
      categoria: 'Electrónica',
      resena: 'Combina estilo y funcionalidad en tu muñeca.',
      imagen: '/images/img11.jpg',
      precio: 399.99,
    },
    {
      id: 12,
      nombre: 'Bicicleta de Montaña Specialized Rockhopper',
      descripcion: 'Bicicleta con cuadro de aluminio y suspensión delantera.',
      categoria: 'Deportes y Aire Libre',
      resena: 'Perfecta para aventuras en terrenos variados.',
      imagen: '/images/img12.webp',
      precio: 899.99,
    },
    {
      id: 13,
      nombre: 'Robot Aspirador iRobot Roomba i7+',
      descripcion: 'Aspiradora robot con estación de carga automática y mapeo inteligente.',
      categoria: 'Electrónica',
      resena: 'Mantén tu hogar limpio sin esfuerzo.',
      imagen: '/images/img13.jpg',
      precio: 699.99,
    },
    {
      id: 14,
      nombre: 'Gafas de Sol Ray-Ban Aviator',
      descripcion: 'Gafas de sol clásicas con montura dorada y lentes polarizadas.',
      categoria: 'Moda',
      resena: 'Estilo atemporal para protegerte con elegancia.',
      imagen: '/images/img14.png',
      precio: 129.99,
    },
    {
      id: 15,
      nombre: 'Impresora Multifunción HP OfficeJet Pro',
      descripcion: 'Impresora con funciones de impresión, escaneo y copia.',
      categoria: 'Electrónica',
      resena: 'Eficiencia en tu oficina o en casa.',
      imagen: '/images/img15.jpg',
      precio: 179.99,
    },
    {
      id: 16,
      nombre: 'Pelota de Golf Titleist Pro V1',
      descripcion: 'Pelotas de golf de alta calidad para jugadores exigentes.',
      categoria: 'Deportes y Aire Libre',
      resena: 'Mejora tu rendimiento en el campo.',
      imagen: '/images/img16.jpg',
      precio: 49.99,
    },
    {
      id: 17,
      nombre: 'Maleta de Viaje Samsonite Winfield 3 DLX',
      descripcion: 'Maleta con carcasa rígida y cuatro ruedas giratorias.',
      categoria: 'Viajes',
      resena: 'Durabilidad y estilo para tus aventuras.',
      imagen: '/images/img17.jpg',
      precio: 149.99,
    },
    {
      id: 18,
      nombre: 'Licuadora NutriBullet Pro',
      descripcion: 'Licuadora de alta potencia para batidos y jugos saludables.',
      categoria: 'Electrodomésticos',
      resena: 'Prepara bebidas deliciosas en segundos.',
      imagen: '/images/img18.png',
      precio: 79.99,
    },
    {
      id: 19,
      nombre: 'Pendientes de Diamantes Brillantes',
      descripcion: 'Elegantes pendientes con diamantes incrustados en oro blanco.',
      categoria: 'Joyas',
      resena: 'Brilla con estos accesorios deslumbrantes.',
      imagen: '/images/img19.jpg',
      precio: 999.99,
    },
    {
      id: 20,
      nombre: 'Telescopio Celestron AstroMaster',
      descripcion: 'Telescopio astronómico para observaciones celestiales.',
      categoria: 'Ciencia y Naturaleza',
      resena: 'Explora el cosmos desde la comodidad de tu hogar.',
      imagen: '/images/img20.jpg',
      precio: 299.99,
    },
    {
      id: 21,
      nombre: 'Barra de Sonido Bose Soundbar 700',
      descripcion: 'Barra de sonido con tecnología de audio envolvente.',
      categoria: 'Electrónica',
      resena: 'Mejora tu experiencia de cine en casa.',
      imagen: '/images/img21.jpg',
      precio: 499.99,
    },
    {
      id: 22,
      nombre: 'Reloj Casio G-Shock Resistente al Agua',
      descripcion: 'Reloj resistente al agua con funciones de cronógrafo y alarma.',
      categoria: 'Moda',
      resena: 'Estilo y durabilidad para cualquier ocasión.',
      imagen: '/images/img22.webp',
      precio: 89.99,
    },
    {
      id: 23,
      nombre: 'Cámara Mirrorless Sony Alpha a7 III',
      descripcion: 'Cámara sin espejo con sensor full-frame y grabación 4K.',
      categoria: 'Electrónica',
      resena: 'Captura momentos con una calidad excepcional.',
      imagen: '/images/img23.jpg',
      precio: 1999.99,
    },
    {
      id: 24,
      nombre: 'Kit de Herramientas Bosch Professional',
      descripcion: 'Juego de herramientas para bricolaje y reparaciones.',
      categoria: 'Hogar y Herramientas',
      resena: 'Calidad y versatilidad en un solo kit.',
      imagen: '/images/img24.jpg',
      precio: 129.99,
    },
    {
      id: 25,
      nombre: 'Silla de Escritorio Ergonómica Herman Miller',
      descripcion: 'Silla de oficina con diseño ergonómico y ajustes personalizables.',
      categoria: 'Muebles',
      resena: 'Comodidad y estilo para tu espacio de trabajo.',
      imagen: '/images/img25.jpg',
      precio: 499.99,
    },
    {
      id: 26,
      nombre: 'Parrilla de Gas Weber Spirit II',
      descripcion: 'Parrilla de gas para exteriores con dos quemadores y termómetro integrado.',
      categoria: 'Hogar y Herramientas',
      resena: 'Asa deliciosas comidas al aire libre.',
      imagen: '/images/img26.jpg',
      precio: 299.99,
    },
    {
      id: 27,
      nombre: 'Monitor Gaming ASUS ROG Swift',
      descripcion: 'Monitor con pantalla curva, 144Hz y tecnología G-Sync.',
      categoria: 'Electrónica',
      resena: 'Sumérgete en tus juegos con imágenes fluidas.',
      imagen: '/images/img27.jpg',
      precio: 599.99,
    },  {
      id: 28,
      nombre: 'Mesa de Com pleto de Vidrio y Acero',
      descripcion: 'Mesa elegante con superficie de vidrio templado y estructura de acero.',
      categoria: 'Muebles',
      resena: 'Añade un toque moderno a tu comedor.',
      imagen: '/images/img28.jpg',
      precio: 199.99,
      },
      {
      id: 29,
      nombre: 'Aspiradora Dyson V11 Absolute',
      descripcion: 'Aspiradora sin cable con potente succión y tecnología de detección de partículas.',
      categoria: 'Electrodomésticos',
      resena: 'Mantén tu hogar impecable con facilidad.',
      imagen: '/images/img29.jpg',
      precio: 699.99,
      },
      {
      id: 30,
      nombre: 'Anillo de Compromiso de Diamante',
      descripcion: 'Anillo de compromiso con diamante central y montura de platino.',
      categoria: 'Joyas',
      resena: 'Una joya única para momentos especiales.',
      imagen: '/images/img30.jpg',
      precio: 2999.99,
      },
  ];


  export default productos