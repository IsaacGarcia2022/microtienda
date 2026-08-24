export default {
  slug: 'barber-king',
  name: 'Barber King',
  tagline: 'Tu imagen, nuestro arte',
  mode: 'services',
  whatsapp: '51933344555',
  currency: 'S/ ',
  theme: {
    primary: '#2563eb',
    secondary: '#06b6d4',
    dark: '#0f172a'
  },
  logo: '/images/barber-king/logo.svg',
  categories: ['Ofertas', 'Corte', 'Barba', 'Combos'],
  hero: {
    eyebrow: 'Citas disponibles hoy',
    title: 'Tu imagen, nuestro arte',
    subtitle: 'Cortes modernos y barba perfecta. Reserva tu hora por WhatsApp y llega directo a la silla.',
    image: '/images/barber-king/hero.svg',
    ctaCatalog: 'Ver servicios',
    ctaWhatsapp: 'Reservar por WhatsApp'
  },
  catalog: {
    title: 'Nuestros servicios',
    subtitle: 'Elige tu servicio y reserva tu hora por WhatsApp.',
    items: [
      {
        id: 'corte-clasico',
        name: 'Corte clásico',
        price: 25,
        category: 'Corte',
        image: '/images/barber-king/corte-clasico.svg',
        description: 'Corte tradicional con acabado limpio. ~30 min.'
      },
      {
        id: 'corte-degradado',
        name: 'Corte degradado (fade)',
        price: 35,
        category: 'Corte',
        image: '/images/barber-king/corte-degradado.svg',
        images: [
          '/images/barber-king/corte-degradado.svg',
          '/images/barber-king/corte-degradado-2.svg'
        ],
        description: 'Degradado con máquina y tijera. ~45 min.',
        longDescription: 'El fade perfecto a tu medida: degradado con máquina, perfilado con navaja y peinado final con productos de calidad. Incluye lavado y asesoría de estilo.',
        details: [
          ['Duración', '~45 min'],
          ['Incluye', 'Lavado + corte + peinado'],
          ['Productos', 'Aceite y fijador incluidos'],
          ['Recomendado', 'Retoque cada 2–3 semanas']
        ],
        badge: 'Más pedido'
      },
      {
        id: 'barba-completa',
        name: 'Barba completa',
        price: 15,
        category: 'Barba',
        image: '/images/barber-king/barba-completa.svg',
        images: [
          '/images/barber-king/barba-completa.svg',
          '/images/barber-king/barba-completa-2.svg'
        ],
        description: 'Perfilado, toalla caliente y aceite. ~20 min.',
        longDescription: 'Tratamiento completo para tu barba: perfilado con navaja, toalla caliente para abrir el poro, exfoliación, aceite hidratante y balm final.',
        details: [
          ['Duración', '~20 min'],
          ['Incluye', 'Toalla caliente + perfilado + aceite'],
          ['Adicional', 'Mascarilla facial +S/ 10']
        ]
      },
      {
        id: 'tinte-barba',
        name: 'Tinte de barba',
        price: 30,
        category: 'Barba',
        image: '/images/barber-king/tinte-barba.svg',
        description: 'Cubre canas y define tu estilo. ~30 min.'
      },
      {
        id: 'corte-barba',
        name: 'Corte + barba',
        price: 50,
        category: 'Combos',
        image: '/images/barber-king/corte-barba.svg',
        images: [
          '/images/barber-king/corte-barba.svg',
          '/images/barber-king/corte-barba-2.svg'
        ],
        description: 'El combo clásico. Ahorra S/ 10. ~60 min.',
        longDescription: 'Nuestro combo más pedido: corte completo + barba con toalla caliente. Ahorra S/ 10 frente a pedirlos por separado.',
        details: [
          ['Duración', '~60 min'],
          ['Incluye', 'Corte + barba completa'],
          ['Ahorro', 'S/ 10 vs. servicio por separado']
        ]
      },
      {
        id: 'combo-rey',
        name: 'Combo rey',
        price: 65,
        category: 'Combos',
        image: '/images/barber-king/combo-rey.svg',
        images: [
          '/images/barber-king/combo-rey.svg',
          '/images/barber-king/combo-rey-2.svg'
        ],
        description: 'Corte + barba + cejas + limpieza facial.',
        longDescription: 'La experiencia completa: corte a tu estilo, barba con toalla caliente, perfilado de cejas y limpieza facial profunda. Sal con el look renovado por completo.',
        details: [
          ['Duración', '~90 min'],
          ['Incluye', 'Corte + barba + cejas + limpieza facial'],
          ['Productos', 'Kit de muestras de regalo'],
          ['Promo', 'Válido para clientes nuevos y antiguos']
        ],
        badge: 'Oferta'
      },
      {
        id: 'perfilado-cejas',
        name: 'Perfilado de cejas',
        price: 10,
        category: 'Ofertas',
        image: '/images/barber-king/perfilado-cejas.svg',
        description: 'Arqueado con cera o hilo. ~10 min.',
        badge: 'Oferta'
      },
      {
        id: 'brushing',
        name: 'Alisado / brushing',
        price: 40,
        category: 'Ofertas',
        image: '/images/barber-king/brushing.svg',
        description: 'Rizado, lacio o con movimiento. ~40 min.'
      }
    ]
  },
  howItWorks: {
    title: '¿Cómo reservar?',
    subtitle: 'Reservas rápidas, sin esperas.',
    steps: [
      { title: 'Elige tu servicio', text: 'Revisa el menú de servicios y precios.' },
      { title: 'Escribe por WhatsApp', text: 'Indica el servicio y el día/hora que prefieres.' },
      { title: 'Confirma tu cita', text: 'Te confirmamos el horario y listo, te esperamos.' }
    ]
  },
  trust: {
    title: 'Por qué elegirnos',
    shipping: {
      title: 'Horarios y promos',
      zones: [
        { zone: 'Lun a Jue', price: '9:00 am – 8:00 pm' },
        { zone: 'Vie y Sáb', price: '9:00 am – 10:00 pm' },
        { zone: 'Domingos', price: 'Solo con cita' }
      ],
      note: 'Promo estudiantes (Lun–Mi): 15% de descuento con carné.'
    },
    paymentMethods: ['Efectivo', 'Transferencia', 'Yape', 'Plin'],
    testimonials: [
      {
        name: 'Renzo A.',
        text: 'El mejor fade de la zona. Siempre salgo contento.',
        rating: 5,
        avatar: '/images/barber-king/avatar-1.svg'
      },
      {
        name: 'Miguel S.',
        text: 'Reservé por WhatsApp y no esperé nada. Atención de primera.',
        rating: 5,
        avatar: '/images/barber-king/avatar-2.svg'
      },
      {
        name: 'Andrés V.',
        text: 'El combo rey es un antes y después. Muy recomendado.',
        rating: 5,
        avatar: '/images/barber-king/avatar-3.svg'
      }
    ]
  },
  about: {
    title: 'Sobre Barber King',
    text: 'Somos un equipo de barberos apasionados por el detalle. Usamos productos de calidad y escuchamos a cada cliente para lograr el estilo que busca. Tu silla está lista.',
    image: '/images/barber-king/about.svg'
  },
  location: {
    title: 'Ubicación',
    address: 'Jr. Los Barrios 789, Lince, Lima',
    zones: 'A dos cuadras de la avenida principal, con estacionamiento.',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Jr.+Los+Barrios+789+Lince+Lima'
  },
  contact: {
    title: 'Contáctanos',
    hours: 'Lun a Sáb: 9:00 am – 9:00 pm',
    phone: '+51 933 344 555',
    social: {
      instagram: 'https://instagram.com/barberking.lima',
      tiktok: 'https://tiktok.com/@barberking.lima',
      facebook: 'https://facebook.com/barberking.lima'
    }
  },
  sections: ['hero', 'catalog', 'howItWorks', 'trust', 'about', 'location']
}