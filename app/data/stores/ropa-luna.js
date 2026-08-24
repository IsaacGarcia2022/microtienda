export default {
  slug: 'ropa-luna',
  name: 'Luna Moda',
  tagline: 'Ropa y accesorios con estilo propio',
  mode: 'products',
  whatsapp: '50363009262',
  currency: '$',
  theme: {
    primary: '#e11d48',
    secondary: '#f43f5e',
    dark: '#18181b'
  },
  logo: '/images/ropa-luna/logo.svg',
  categories: ['Ofertas', 'Mujer', 'Hombre', 'Accesorios'],
  hero: {
    eyebrow: 'Nueva colección 2026',
    title: 'Ropa y accesorios con estilo propio',
    subtitle: 'Prendas seleccionadas para que vistas bien cada día. Elige, pide por WhatsApp y recibe en tu puerta.',
    image: '/images/ropa-luna/hero.svg',
    ctaCatalog: 'Ver catálogo',
    ctaWhatsapp: 'Escribir al WhatsApp'
  },
  catalog: {
    title: 'Nuestro catálogo',
    subtitle: 'Toca una categoría para filtrar y pide lo que te guste por WhatsApp.',
    items: [
      {
        id: 'blusa-floral',
        name: 'Blusa floral verano',
        price: 45,
        category: 'Mujer',
        image: '/images/ropa-luna/blusa-floral.svg',
        images: [
          '/images/ropa-luna/blusa-floral.svg',
          '/images/ropa-luna/blusa-floral-2.svg',
          '/images/ropa-luna/blusa-floral-3.svg'
        ],
        description: 'Blusa ligera de algodón. Tallas S–XL.',
        longDescription: 'Blusa fresca con estampado floral, corte relajado y botones frontales. Perfecta para el día a día: úsala suelta o con un nudo en la cintura. Combina con jeans, faldas o shorts.',
        details: [
          ['Tallas', 'S, M, L, XL'],
          ['Material', 'Algodón 100%'],
          ['Cuidado', 'Lavar en frío'],
          ['Envío', '24–48 h hábiles']
        ],
        variants: {
          Talla: ['S', 'M', 'L'],
          Color: ['Floral', 'Negro', 'Blanco']
        },
        badge: 'Más vendido'
      },
      {
        id: 'vestido-midi',
        name: 'Vestido midi de lino',
        price: 89,
        category: 'Mujer',
        image: '/images/ropa-luna/vestido-midi.svg',
        images: [
          '/images/ropa-luna/vestido-midi.svg',
          '/images/ropa-luna/vestido-midi-2.svg'
        ],
        description: 'Corte cómodo y fresco, ideal para el día a día.',
        longDescription: 'Vestido midi de lino con tela transpirable y caída fluida. Incluye bolsillos laterales y cinturilla ajustable. Una prenda versátil para oficina, salidas o eventos informales.',
        details: [
          ['Tallas', 'XS, S, M, L'],
          ['Material', 'Lino 60% · Algodón 40%'],
          ['Cuidado', 'Lavar a mano'],
          ['Largo', 'Largo midi (aprox. rodilla)']
        ],
        variants: {
          Talla: ['XS', 'S', 'M', 'L']
        }
      },
      {
        id: 'shorts-denim',
        name: 'Shorts denim lavado',
        price: 49,
        category: 'Mujer',
        image: '/images/ropa-luna/shorts-denim.svg',
        description: 'Denim elástico, tallas 24–32.'
      },
      {
        id: 'camisa-oversize',
        name: 'Camisa oversize',
        price: 59,
        category: 'Hombre',
        image: '/images/ropa-luna/camisa-oversize.svg',
        description: 'Unisex, tela suave de mezcla de algodón.'
      },
      {
        id: 'polo-basico',
        name: 'Polo básico de algodón',
        price: 25,
        category: 'Ofertas',
        image: '/images/ropa-luna/polo-basico.svg',
        description: 'Clásico que no puede faltar. 12 colores.',
        longDescription: 'El básico perfecto para tu clóset: polo de algodón suave, cuello reforzado y buena caída. Disponible en múltiples colores, úsalo solo o debajo de una casaca.',
        details: [
          ['Tallas', 'S, M, L, XL'],
          ['Material', 'Algodón 100%'],
          ['Color', '12 colores disponibles']
        ],
        variants: {
          Talla: ['S', 'M', 'L', 'XL'],
          Color: ['Blanco', 'Negro', 'Gris', 'Azul']
        },
        badge: 'Oferta'
      },
      {
        id: 'gorra-urbana',
        name: 'Gorra urbana',
        price: 30,
        category: 'Accesorios',
        image: '/images/ropa-luna/gorra-urbana.svg',
        images: [
          '/images/ropa-luna/gorra-urbana.svg',
          '/images/ropa-luna/gorra-urbana-2.svg'
        ],
        description: 'Ajuste regulable, bordado premium.',
        longDescription: 'Gorra urbana con visera curva y cierre ajustable, ideal para el sol o para completar tu look. Bordado premium y tela que transpira.',
        details: [
          ['Ajuste', 'Regulable (una talla)'],
          ['Material', 'Poliéster premium'],
          ['Bordado', 'Logo frontal']
        ]
      },
      {
        id: 'mochila-cuero',
        name: 'Mochila de cuero vegano',
        price: 95,
        category: 'Accesorios',
        image: '/images/ropa-luna/mochila-cuero.svg',
        description: 'Espaciosa, con espacio para laptop de 14".'
      },
      {
        id: 'set-correas',
        name: 'Set de correas (x2)',
        price: 20,
        category: 'Accesorios',
        image: '/images/ropa-luna/set-correas.svg',
        description: 'Hebilla metálica, unisex.'
      }
    ]
  },
  howItWorks: {
    title: '¿Cómo comprar?',
    subtitle: 'Comprar nunca fue tan fácil, todo se coordina por WhatsApp.',
    steps: [
      { title: 'Elige tus productos', text: 'Navega el catálogo y escoge lo que más te guste.' },
      { title: 'Haz clic en pedir', text: 'Cada producto abre WhatsApp con tu pedido ya escrito.' },
      { title: 'Acordamos el pago', text: 'Confirmamos disponibilidad, el pago y el envío contigo.' }
    ]
  },
  trust: {
    title: 'Compra con confianza',
    shipping: {
      title: 'Zonas y tarifas de envío',
      zones: [
        { zone: 'San Salvador centro', price: '$7' },
        { zone: 'Santa Tecla y Antiguo Cuscatlán', price: '$10' },
        { zone: 'A nivel nacional', price: '$15 – 25' }
      ],
      note: 'Envíos los martes y viernes. Puedes pasar a recoger sin costo.'
    },
    paymentMethods: ['Efectivo', 'Transferencia'],
    testimonials: [
      {
        name: 'María G.',
        text: 'La blusa llegó igualita a la foto y al día siguiente. ¡Recomendadísimo!',
        rating: 5,
        avatar: '/images/ropa-luna/avatar-1.svg'
      },
      {
        name: 'Carlos R.',
        text: 'Pedí por WhatsApp y en minutos me respondieron. La atención es excelente.',
        rating: 5,
        avatar: '/images/ropa-luna/avatar-2.svg'
      },
      {
        name: 'Lucía M.',
        text: 'Compro casi todo mi clóset aquí. La calidad es muy buena por el precio.',
        rating: 4,
        avatar: '/images/ropa-luna/avatar-3.svg'
      }
    ]
  },
  about: {
    title: 'Sobre Luna Moda',
    text: 'Somos una tienda familiar de ropa y accesorios que nació en redes sociales. Elegimos cada prenda pensando en tu comodidad y en precios justos. Compra desde tu celular y paga como prefieras.',
    image: '/images/ropa-luna/about.svg'
  },
  location: {
    title: 'Ubicación y cobertura',
    address: 'Av. La Revolución 123, Santa Tecla, La Libertad',
    zones: 'Atendemos San Salvador y Santa Tecla, y enviamos a todo el país.',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+La+Revolucion+123+Santa+Tecla+La+Libertad'
  },
  contact: {
    title: 'Contáctanos',
    hours: 'Lun a Sáb: 9:00 am – 8:00 pm',
    phone: '+503 6300 9262',
    social: {
      instagram: 'https://instagram.com/lunamoda.sv',
      tiktok: 'https://tiktok.com/@lunamoda.sv',
      facebook: 'https://facebook.com/lunamoda.sv'
    }
  },
  sections: ['hero', 'catalog', 'howItWorks', 'trust', 'about', 'location']
}