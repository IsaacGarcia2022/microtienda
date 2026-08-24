export default {
  slug: 'sabor-casero',
  name: 'Sabor Casero',
  tagline: 'Postres artesanales a domicilio',
  mode: 'products',
  whatsapp: '51911122333',
  currency: 'S/ ',
  theme: {
    primary: '#ea580c',
    secondary: '#f59e0b',
    dark: '#1c1917'
  },
  logo: '/images/sabor-casero/logo.svg',
  categories: ['Ofertas', 'Tortas', 'Postres', 'Bebidas', 'Combos'],
  hero: {
    eyebrow: 'Hecho con amor',
    title: 'Postres artesanales a domicilio',
    subtitle: 'Endulza tus días con recetas caseras. Pide por WhatsApp y recibe tu antojo en la puerta de tu casa.',
    image: '/images/sabor-casero/hero.svg',
    ctaCatalog: 'Ver catálogo',
    ctaWhatsapp: 'Escribir al WhatsApp'
  },
  catalog: {
    title: 'Nuestro menú',
    subtitle: 'Todos nuestros postres se preparan por encargo. ¡Pide el tuyo!',
    items: [
      {
        id: 'torta-tres-leches',
        name: 'Torta tres leches',
        price: 55,
        category: 'Tortas',
        image: '/images/sabor-casero/torta-tres-leches.svg',
        images: [
          '/images/sabor-casero/torta-tres-leches.svg',
          '/images/sabor-casero/torta-tres-leches-2.svg',
          '/images/sabor-casero/torta-tres-leches-3.svg'
        ],
        description: 'Esponjosa, bañada en tres leches. Para 8 personas.',
        longDescription: 'Nuestra torta insignia: bizcocho esponjoso bañado en leche evaporada, leche condensada y crema, con un toque de vainilla. Decorada con merengue italiano y canela.',
        details: [
          ['Porciones', '8 personas'],
          ['Ingredientes', 'Leche evaporada, condensada y crema'],
          ['Pedido', 'Con 24 h de anticipación'],
          ['Personalización', 'Escribe tu dedicatoria gratis']
        ],
        variants: {
          Tamaño: ['8 personas', '12 personas', '16 personas']
        },
        badge: 'Más pedido'
      },
      {
        id: 'cheesecake-maracuya',
        name: 'Cheesecake de maracuyá',
        price: 48,
        category: 'Tortas',
        image: '/images/sabor-casero/cheesecake-maracuya.svg',
        images: [
          '/images/sabor-casero/cheesecake-maracuya.svg',
          '/images/sabor-casero/cheesecake-maracuya-2.svg'
        ],
        description: 'Base crocante y crema con toque cítrico. Para 6 personas.',
        longDescription: 'Cheesecake horneado con base de galleta crocante y crema de queso suave, coronado con salsa de maracuyá natural. El equilibrio perfecto entre dulce y ácido.',
        details: [
          ['Porciones', '6 personas'],
          ['Ingredientes', 'Queso crema, galleta, maracuyá natural'],
          ['Pedido', 'Con 24 h de anticipación'],
          ['Refrigeración', 'Conservar en frío']
        ]
      },
      {
        id: 'cupcakes-surtidos',
        name: 'Cupcakes surtidos (6)',
        price: 25,
        category: 'Postres',
        image: '/images/sabor-casero/cupcakes-surtidos.svg',
        images: [
          '/images/sabor-casero/cupcakes-surtidos.svg',
          '/images/sabor-casero/cupcakes-surtidos-2.svg'
        ],
        description: 'Seis sabores surtidos decorados a mano.',
        longDescription: 'Media docena de cupcakes con sabores variados (chocolate, vainilla, red velvet y más), cada uno decorado a mano con merengue y toppings.',
        details: [
          ['Contenido', '6 unidades'],
          ['Sabores', 'Chocolate, vainilla, red velvet'],
          ['Pedido', 'Mismo día si hay stock'],
          ['Opcional', 'Caja con tarjeta de regalo']
        ],
        variants: {
          Cantidad: ['6 unidades', '12 unidades', '24 unidades']
        }
      },
      {
        id: 'alfajores-artesanales',
        name: 'Alfajores artesanales (6)',
        price: 18,
        category: 'Postres',
        image: '/images/sabor-casero/alfajores-artesanales.svg',
        description: 'Manjar casero y cobertura de chocolate.'
      },
      {
        id: 'brownie-helado',
        name: 'Brownie con helado',
        price: 12,
        category: 'Postres',
        image: '/images/sabor-casero/brownie-helado.svg',
        description: 'Brownie tibio con bola de helado de vainilla.',
        badge: 'Oferta'
      },
      {
        id: 'limonada-frozen',
        name: 'Limonada frozen',
        price: 10,
        category: 'Bebidas',
        image: '/images/sabor-casero/limonada-frozen.svg',
        description: 'Refrescante, con hielo frappé.'
      },
      {
        id: 'combo-cumpleanos',
        name: 'Combo cumpleaños',
        price: 120,
        category: 'Combos',
        image: '/images/sabor-casero/combo-cumpleanos.svg',
        images: [
          '/images/sabor-casero/combo-cumpleanos.svg',
          '/images/sabor-casero/combo-cumpleanos-2.svg'
        ],
        description: 'Torta de tu elección + 12 cupcakes + globos.',
        longDescription: 'El combo perfecto para celebrar: torta de tu elección (hasta 16 personas), docena de cupcakes surtidos, globos de colores y tarjeta de felicitación personalizada.',
        details: [
          ['Incluye', 'Torta + 12 cupcakes + globos'],
          ['Torta', 'Elige entre 3 sabores'],
          ['Pedido', 'Con 48 h de anticipación'],
          ['Entrega', 'Instalación de mesa incluida en Lima']
        ],
        badge: 'Oferta'
      },
      {
        id: 'sandwich-club',
        name: 'Sandwich club',
        price: 15,
        category: 'Combos',
        image: '/images/sabor-casero/sandwich-club.svg',
        description: 'Triple capa con papas artesanales.'
      }
    ]
  },
  howItWorks: {
    title: '¿Cómo pedir?',
    subtitle: 'En tres simples pasos tienes tu postre en casa.',
    steps: [
      { title: 'Elige tu postre', text: 'Explora el menú y escoge lo que se antoje hoy.' },
      { title: 'Haz clic en pedir', text: 'Se abre WhatsApp con tu pedido listo para enviar.' },
      { title: 'Confirma tu pedido', text: 'Acordamos precio, pago y horario de entrega.' }
    ]
  },
  trust: {
    title: 'Compra con confianza',
    shipping: {
      title: 'Zonas y tarifas de entrega',
      zones: [
        { zone: 'San Miguel / Magdalena', price: 'S/ 8' },
        { zone: 'Miraflores / Surco', price: 'S/ 12' },
        { zone: 'Otras zonas', price: 'S/ 15 – 20' }
      ],
      note: 'Entregas de 4:00 pm a 9:00 pm. Pedidos con 24 horas de anticipación.'
    },
    paymentMethods: ['Efectivo', 'Transferencia', 'Yape', 'Plin'],
    testimonials: [
      {
        name: 'Andrea P.',
        text: 'La torta tres leches fue el éxito del cumpleaños. Volveré a pedir.',
        rating: 5,
        avatar: '/images/sabor-casero/avatar-1.svg'
      },
      {
        name: 'Jorge T.',
        text: 'Todo llegó puntual y bien presentado. El cheesecake es espectacular.',
        rating: 5,
        avatar: '/images/sabor-casero/avatar-2.svg'
      },
      {
        name: 'Daniela F.',
        text: 'Pido todos los fines de semana. La calidad es siempre la misma.',
        rating: 5,
        avatar: '/images/sabor-casero/avatar-3.svg'
      }
    ]
  },
  about: {
    title: 'Sobre Sabor Casero',
    text: 'Empezamos vendiendo tortas para cumpleaños de la familia y hoy endulzamos a todo el barrio. Todo se prepara el mismo día, con ingredientes frescos y mucho cariño.',
    image: '/images/sabor-casero/about.svg'
  },
  location: {
    title: 'Zona de cobertura',
    address: 'Urb. Las Flores 456, San Miguel, Lima',
    zones: 'Entregamos en Lima centro y sur. Pregunta por otras zonas.',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Urb.+Las+Flores+456+San+Miguel+Lima'
  },
  contact: {
    title: 'Contáctanos',
    hours: 'Lun a Dom: 9:00 am – 9:00 pm',
    phone: '+51 911 122 333',
    social: {
      instagram: 'https://instagram.com/saborcasero.pe',
      tiktok: 'https://tiktok.com/@saborcasero.pe',
      facebook: 'https://facebook.com/saborcasero.pe'
    }
  },
  sections: ['hero', 'catalog', 'howItWorks', 'trust', 'about', 'location']
}