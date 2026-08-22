export type Language = 'fr' | 'en' | 'es';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    villa: string;
    booking: string;
    portfolio: string;
    services: string;
    contact: string;
    bookCta: string;
    subtagline: string;
  };
  hero: {
    headlineMain: string;
    headlineItalic: string;
    description: string;
    ctaButton: string;
    videoLabel: string;
    videoMoods: {
      paris: string;
      mediterranean: string;
      minimalist: string;
      scandinavian: string;
    };
    playVideo: string;
    pauseVideo: string;
    showContent: string;
    hideContent: string;
    explore: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    privatizationTitle: string;
    privatizationDesc: string;
    conciergeTitle: string;
    conciergeDesc: string;
    quote: string;
    quoteAuthor: string;
    badgeTitle: string;
    badgeSubtitle: string;
  };
  villa: {
    eyebrow: string;
    title: string;
    description: string;
    ratePerNight: string;
    perNight: string;
    privatizationBadge: string;
    capacity: string;
    area: string;
    bedrooms: string;
    spacesTitle: string;
    amenitiesTitle: string;
    bookDatesBtn: string;
    spaces: {
      title: string;
      desc: string;
      features: string[];
      img: string;
    }[];
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    step1: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    guestCount: (n: number) => string;
    nightsCount: (n: number) => string;
    step2: string;
    villaOptionTitle: string;
    villaOptionSub: string;
    step3: string;
    fullName: string;
    email: string;
    phone: string;
    specialRequests: string;
    submitBtn: string;
    submitting: string;
    summaryTitle: string;
    includedTitle: string;
    incBreakfast: string;
    incCancellation: string;
    incConcierge: string;
    priceBreakdown: string;
    nightlyRate: string;
    cleaningFee: string;
    breakfastTax: string;
    totalPrice: string;
    confirmationTitle: string;
    thankYou: (name: string) => string;
    confirmedMessage: string;
    refCode: string;
    emailSentNote: string;
    bookAnother: string;
  };
  mobileBooking: {
    barTitle: string;
    expandedTitle: string;
    dates: string;
    adults: string;
    children: string;
    search: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allCategories: string;
    viewProject: string;
    seeMoreBtn: string;
    fullGalleryTitle: string;
    fullGallerySubtitle: string;
    closeGallery: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    inquireBtn: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fullNameLabel: string;
    emailLabel: string;
    serviceLabel: string;
    locationLabel: string;
    timelineLabel: string;
    messageLabel: string;
    sendBtn: string;
    successMessage: string;
  };
  footer: {
    tagline: string;
    location: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Présentation',
      villa: 'La Villa & Espaces',
      booking: 'Réservation',
      portfolio: 'Galerie',
      services: 'Conciergerie',
      contact: 'Contact & Accès',
      bookCta: 'Réserver la Villa',
      subtagline: 'VILLA PRIVÉE DE LUXE • SÉJOURS'
    },
    hero: {
      headlineMain: 'Villa Little Bohème',
      headlineItalic: 'Privatisation Exclusive & Cadre Naturel',
      description: 'Construite en 2023, une résidence d’exception au style bohème chic offrant sérénité, piscine chauffée et prestations sur-mesure pour 10 à 12 hôtes.',
      ctaButton: 'Réserver Votre Séjour',
      videoLabel: 'Atmosphère',
      videoMoods: {
        paris: 'Lumière Bohème',
        mediterranean: 'Villa Méditerranéenne',
        minimalist: 'Sanctuaire Épure',
        scandinavian: 'Douceur Naturelle'
      },
      playVideo: 'Lire la vidéo',
      pauseVideo: 'Mettre la vidéo en pause',
      showContent: 'Afficher le contenu',
      hideContent: 'Masquer le contenu',
      explore: 'Découvrir'
    },
    about: {
      eyebrow: '01 — Présentation & Atmosphère',
      title: 'Une villa de luxe exclusive baignée de sérénité et d’élégance.',
      p1: 'Érigée en 2023 et imaginée par Sarla, la Villa Little Bohème incarne l’art de vivre méditerranéen dans une atmosphère bohème chic raffinée. Conçue pour offrir une parenthèse enchantée en pleine nature, la villa combine matériaux nobles, lumière naturelle et volumes généreux.',
      p2: 'Louée exclusivement dans son intégralité (10 à 12 hôtes), la propriété garantit une intimité absolue. Profitez de 5 suites raffinées, d’une piscine chauffée 15x5m, d’un parc privé de 3 000 m² doté d’un four à pizza, d’un terrain de mini-football, d’un espace gym et d’un terrain de pétanque.',
      privatizationTitle: 'Exclusivité Totale & Sérénité',
      privatizationDesc: 'Aucun autre occupant sur place. Vous disposez librement de la villa, de la piscine et des jardins en toute confidentialité.',
      conciergeTitle: 'Petit-Déjeuner & Ménage Inclus',
      conciergeDesc: 'Chaque matin, savourez un petit-déjeuner maison frais préparé pour vous. Le ménage quotidien est assuré par notre personnel de maison.',
      quote: '« La Villa Little Bohème a été pensée pour rassembler les familles et amis dans un cadre naturel d’exception, alliant liberté et service d’un palace. »',
      quoteAuthor: '— Sarla, Hôte & Designer',
      badgeTitle: 'Villa Privée d’Exception',
      badgeSubtitle: 'Saison 2026 • Réservez Vos Dates'
    },
    villa: {
      eyebrow: '02 — Agencement & Équipements',
      title: 'Les Espaces de la Villa (480 m²)',
      description: 'Un aménagement d’exception sur deux niveaux pensée pour l’accueil de 10 à 12 hôtes en toute harmonie.',
      ratePerNight: 'Tarif Privatisation',
      perNight: 'par nuit',
      privatizationBadge: 'Privatisation Intégrale • 10-12 Hôtes',
      capacity: '10 à 12 personnes',
      area: '480 m² habitables',
      bedrooms: '5 Suites d’Exception',
      spacesTitle: 'Espaces & Agencement',
      amenitiesTitle: 'Prestations & Loisirs Extérieurs',
      bookDatesBtn: 'Sélectionner Mes Dates',
      spaces: [
        {
          title: 'Rez-de-Chaussée • 4 Suites & Salon Cathédrale',
          desc: 'Le RDC regroupe 2 suites parentales (lits 180cm) avec salle d’eau privative, 1 suite enfants sur mesure, 1 suite indépendante avec terrasse, ainsi qu’un majestueux salon cathédrale avec cheminée et cuisine américaine gourmet.',
          features: ['2 Suites Parentales (lits 180cm)', '1 Suite Enfants personnalisée', '1 Suite Indépendante autonome', 'Grand Salon avec Cheminée', 'Cuisine ouverte équipée'],
          img: '/photos/14.jpg'
        },
        {
          title: '1er Étage • Master Suite Parente & Bureau',
          desc: 'Étage privatif abritant la Master Suite principale avec lit King Size 180cm, grande salle de bain en travertin sculpté avec baignoire en pierre naturelle, vaste dressing sur mesure et espace de jeu / bureau.',
          features: ['Master Bed King Size 180cm', 'Grande Baignoire en Pierre', 'Dressing privatif sur-mesure', 'Espace Bureau & Salon de jeu', 'Vue sur le parc & la piscine'],
          img: '/photos/19.jpg'
        },
        {
          title: 'Extérieurs & Piscine Chauffée 15x5m',
          desc: 'Le parc de 3 000 m² abrite une piscine chauffée de 15 mètres (de mai à octobre) bordée de transats en teck, un four à pizza artisanal, un brasero convivial, un terrain de mini-foot, une gym extérieure, un trampoline géant et la pétanque.',
          features: ['Piscine Chauffée 15x5m', 'Four à Pizza & Brasero Barbecue', 'Terrain Mini-Football & Pétanque', 'Espace Salle de Sport (Gym)', 'Trampoline géant pour enfants'],
          img: '/photos/67.jpg'
        },
        {
          title: 'Services & Confort Famille',
          desc: 'Un accueil chaleureux pour toute la famille avec kits bébés, espaces sécurisés, climatisation réversible individuelle, Wi-Fi fibre haut débit et parking privé sécurisé pour 6 véhicules.',
          features: ['Petit-déjeuner maison inclus', 'Service ménage quotidien', 'Équipements Bébé & Enfants', 'Parking fermé 6 véhicules', 'Wi-Fi Fibre & Sono Devialet'],
          img: '/photos/0.jpg'
        }
      ]
    },
    booking: {
      eyebrow: '04 — Réservation Directe & Calendrier',
      title: 'Réservez la Villa Little Bohème',
      description: 'Choisissez vos dates d’arrivée et de départ pour calculer instantanément le montant de votre séjour.',
      step1: '1. Dates du Séjour',
      checkIn: 'Arrivée (Check-in)',
      checkOut: 'Départ (Check-out)',
      guests: 'Nombre d’Hôtes',
      guestCount: (n: number) => `${n} Personne${n > 1 ? 's' : ''}`,
      nightsCount: (n: number) => `${n} Nuit${n > 1 ? 's' : ''}`,
      step2: '2. Formule de Privatisation',
      villaOptionTitle: 'Privatisation Intégrale Villa Little Bohème',
      villaOptionSub: 'Exclusivité totale • 5 Suites (10-12 hôtes) • Piscine chauffée & 3 000 m² de jardin',
      step3: '3. Vos Coordonnées & Options',
      fullName: 'Nom & Prénom',
      email: 'Adresse E-mail',
      phone: 'Téléphone',
      specialRequests: 'Options souhaitées (Ex: Chef à domicile, transfert aéroport, kit bébé)',
      submitBtn: 'Confirmer la Demande de Séjour',
      submitting: 'Transmission à la conciergerie...',
      summaryTitle: 'Détail de votre Séjour',
      includedTitle: 'Prestations Incluses',
      incBreakfast: 'Petit-déjeuner fait maison chaque matin',
      incCancellation: 'Service ménage quotidien & linge de maison',
      incConcierge: 'Accueil personnalisé par Sarla & conciergerie 7j/7',
      priceBreakdown: 'Calcul du Séjour',
      nightlyRate: 'Tarif par nuit',
      cleaningFee: 'Frais de préparation & linge',
      breakfastTax: 'Petit-déjeuner & taxe de séjour',
      totalPrice: 'Total Estimé du Séjour',
      confirmationTitle: 'Demande de Réservation Reçue',
      thankYou: (name: string) => `Merci ${name} !`,
      confirmedMessage: 'Votre demande de séjour à la Villa Little Bohème a bien été enregistrée par notre conciergerie.',
      refCode: 'Référence dossier',
      emailSentNote: 'Un e-mail récapitulatif vous a été envoyé. Sarla ou notre conciergerie vous contactera sous 2 heures.',
      bookAnother: 'Effectuer une nouvelle réservation'
    },
    mobileBooking: {
      barTitle: 'RÉSERVER UN SÉJOUR',
      expandedTitle: 'Réserver un séjour',
      dates: 'Arrivée - Départ',
      adults: 'Adulte',
      children: 'Enfants',
      search: 'Envoyer via WhatsApp'
    },
    portfolio: {
      eyebrow: '03 — Galerie Photos',
      title: 'Découvrez la Villa en Images',
      subtitle: 'Parcourez la galerie d’exposition de la propriété : suites, piscine, salons et jardins botaniques.',
      allCategories: 'Toutes les vues',
      viewProject: 'Agrandir la photo',
      seeMoreBtn: 'Voir toute la galerie photos',
      fullGalleryTitle: 'Galerie Complète de la Villa Little Bohème',
      fullGallerySubtitle: 'Explorez l’intégralité de la propriété : suites parentales, piscine chauffée 15x5m, four à pizza, salons et jardins.',
      closeGallery: 'Fermer la Galerie'
    },
    services: {
      eyebrow: '05 — Conciergerie & Prestations',
      title: 'Services & Conciergerie de la Villa',
      subtitle: 'De l’accueil personnalisé par Sarla au Chef à domicile, notre conciergerie transforme votre séjour en expérience inoubliable.',
      inquireBtn: 'Réserver un Service Sur-Mesure'
    },
    contact: {
      eyebrow: '06 — Contact & Géolocalisation',
      title: 'Contactez Notre Conciergerie',
      subtitle: 'Des questions sur les disponibilités, les accès ou l’organisation d’un événement intime ? Notre équipe vous répond immédiatement.',
      fullNameLabel: 'Nom & Prénom',
      emailLabel: 'Adresse E-mail',
      serviceLabel: 'Objet de la demande',
      locationLabel: 'Ville / Origine',
      timelineLabel: 'Période Souhaitée',
      messageLabel: 'Votre Message',
      sendBtn: 'Envoyer le Message',
      successMessage: 'Votre message a bien été transmis à la conciergerie de la Villa Little Bohème !'
    },
    footer: {
      tagline: 'Villa Privée de Luxe & Séjours sur-mesure.',
      location: 'Paris • Provence • Palma de Mallorca',
      rights: 'Tous droits réservés. Villa Little Bohème.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Overview',
      villa: 'The Villa & Spaces',
      booking: 'Reservation',
      portfolio: 'Gallery',
      services: 'Concierge',
      contact: 'Contact & Access',
      bookCta: 'Book the Villa',
      subtagline: 'LUXURY PRIVATE VILLA • STAYS'
    },
    hero: {
      headlineMain: 'Villa Little Bohème',
      headlineItalic: 'Exclusive Privatization & Serene Nature',
      description: 'Built in 2023, an exceptional bohemian chic retreat offering tranquility, a heated pool, and bespoke services for 10 to 12 guests.',
      ctaButton: 'Book Your Stay',
      videoLabel: 'Atmosphere',
      videoMoods: {
        paris: 'Bohemian Light',
        mediterranean: 'Mediterranean Villa',
        minimalist: 'Minimalist Sanctuary',
        scandinavian: 'Natural Calm'
      },
      playVideo: 'Play video',
      pauseVideo: 'Pause video',
      showContent: 'Show content',
      hideContent: 'Hide content',
      explore: 'Discover'
    },
    about: {
      eyebrow: '01 — Overview & Atmosphere',
      title: 'An exclusive luxury villa enveloped in serenity and elegance.',
      p1: 'Built in 2023 and designed by Sarla, Villa Little Bohème embodies Mediterranean art de vivre in a refined bohemian chic atmosphere. Crafted as a serene haven amidst nature, the villa blends noble materials, soft sunlight, and airy volumes.',
      p2: 'Rented strictly as a full private retreat for 10 to 12 guests, the property guarantees complete confidentiality. Enjoy 5 luxurious suites, a 15x5m heated pool, a 3,000 sqm private park with a pizza oven, mini-football pitch, gym space, and pétanque court.',
      privatizationTitle: '100% Private & Peaceful',
      privatizationDesc: 'No other guests on site. The entire villa, pool, and gardens belong solely to you.',
      conciergeTitle: 'Daily Breakfast & Housekeeping',
      conciergeDesc: 'Enjoy fresh homemade breakfast served every morning. Daily maid service is included for ultimate comfort.',
      quote: '“Villa Little Bohème was designed to bring families and friends together in an exceptional natural setting with five-star luxury.”',
      quoteAuthor: '— Sarla, Host & Designer',
      badgeTitle: 'Exceptional Private Villa',
      badgeSubtitle: '2026 Season • Reserve Your Dates'
    },
    villa: {
      eyebrow: '02 — Layout & Amenities',
      title: 'Villa Layout & Features (480 m²)',
      description: 'An exceptional two-level architectural design tailored for 10 to 12 guests in perfect comfort.',
      ratePerNight: 'Privatization Rate',
      perNight: 'per night',
      privatizationBadge: 'Full Privatization • 10-12 Guests',
      capacity: '10 to 12 Guests',
      area: '480 m² / 5,160 sq ft',
      bedrooms: '5 Exceptional Suites',
      spacesTitle: 'Spaces & Architecture',
      amenitiesTitle: 'Outdoor Amenities & Leisure',
      bookDatesBtn: 'Select My Dates',
      spaces: [
        {
          title: 'Ground Floor • 4 Suites & Cathedral Salon',
          desc: 'The ground floor features 2 master suites (180cm beds) with private shower rooms, 1 custom kids suite, 1 independent suite with terrace access, and a majestic cathedral lounge with fireplace and open gourmet kitchen.',
          features: ['2 Master Suites (180cm beds)', '1 Custom Children’s Suite', '1 Independent Guest Suite', 'Grand Lounge with Fireplace', 'Gourmet Open Kitchen'],
          img: '/photos/14.jpg'
        },
        {
          title: '1st Floor • Master Suite & Office Studio',
          desc: 'Private upper floor showcasing the main Master Suite with a 180cm King bed, large carved travertine bathroom with stone tub, custom walk-in closet, and a dedicated workspace / lounge.',
          features: ['180cm King Size Master Bed', 'Stone Soaking Bathtub', 'Custom Walk-In Dressing Room', 'Office Studio & Reading Corner', 'Garden & Pool View'],
          img: '/photos/19.jpg'
        },
        {
          title: 'Outdoors & 15x5m Heated Pool',
          desc: 'The 3,000 sqm park features a 15m heated pool (May to Oct) with teak loungers, an authentic wood-fired pizza oven, fire pit BBQ, mini-football field, outdoor gym, giant trampoline, and pétanque court.',
          features: ['15x5m Heated Pool', 'Wood Pizza Oven & Fire Pit BBQ', 'Mini-Football Field & Pétanque', 'Outdoor Gym Fitness Area', 'Giant Kids Trampoline'],
          img: '/photos/67.jpg'
        },
        {
          title: 'Family Comfort & High-End Services',
          desc: 'Thoughtfully designed for family holidays with baby kits, climate control, high-speed fiber Wi-Fi, Devialet sound system, and gated private parking for 6 cars.',
          features: ['Fresh Homemade Breakfast Included', 'Daily Housekeeping Service', 'Baby & Family Amenities', 'Gated Parking for 6 Vehicles', 'Fiber Wi-Fi & Devialet Audio'],
          img: '/photos/0.jpg'
        }
      ]
    },
    booking: {
      eyebrow: '04 — Direct Booking & Calendar',
      title: 'Book Villa Little Bohème',
      description: 'Select your check-in and check-out dates to calculate your stay rate instantly.',
      step1: '1. Stay Dates',
      checkIn: 'Check-In Date',
      checkOut: 'Check-Out Date',
      guests: 'Number of Guests',
      guestCount: (n: number) => `${n} Guest${n > 1 ? 's' : ''}`,
      nightsCount: (n: number) => `${n} Night${n > 1 ? 's' : ''}`,
      step2: '2. Villa Rental Package',
      villaOptionTitle: 'Full Privatization of Villa Little Bohème',
      villaOptionSub: 'Exclusive access • 5 Suites (10-12 guests) • Heated pool & 3,000 sqm garden',
      step3: '3. Contact Details & Extras',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      specialRequests: 'Requested Options (e.g. In-house chef, airport transfer, baby kit)',
      submitBtn: 'Confirm Stay Request',
      submitting: 'Sending to concierge...',
      summaryTitle: 'Stay Breakdown',
      includedTitle: 'Included Services',
      incBreakfast: 'Fresh homemade breakfast every morning',
      incCancellation: 'Daily housekeeping & fresh linens included',
      incConcierge: 'Personal greeting by Sarla & 7/7 concierge',
      priceBreakdown: 'Pricing Calculation',
      nightlyRate: 'Nightly rate',
      cleaningFee: 'Preparation & linen fee',
      breakfastTax: 'Breakfast & tourist tax',
      totalPrice: 'Estimated Total Stay',
      confirmationTitle: 'Booking Request Received',
      thankYou: (name: string) => `Thank you ${name}!`,
      confirmedMessage: 'Your stay request at Villa Little Bohème has been received by our concierge.',
      refCode: 'Booking reference',
      emailSentNote: 'A confirmation email has been sent. Sarla or our concierge will contact you within 2 hours.',
      bookAnother: 'Make another reservation'
    },
    mobileBooking: {
      barTitle: 'BOOK A STAY',
      expandedTitle: 'Book a stay',
      dates: 'Check-in - Check-out',
      adults: 'Adults',
      children: 'Children',
      search: 'Send via WhatsApp'
    },
    portfolio: {
      eyebrow: '03 — Photo Gallery',
      title: 'Explore the Villa in Pictures',
      subtitle: 'Browse through the property gallery: suites, pool, lounges, and botanical gardens.',
      allCategories: 'All Views',
      viewProject: 'Enlarge photo',
      seeMoreBtn: 'View Full Photo Gallery',
      fullGalleryTitle: 'Complete Gallery of Villa Little Bohème',
      fullGallerySubtitle: 'Discover the entire property: master suites, 15x5m heated pool, pizza oven, living spaces, and gardens.',
      closeGallery: 'Close Gallery'
    },
    services: {
      eyebrow: '05 — Villa Concierge & Services',
      title: 'Concierge & Tailored Services',
      subtitle: 'From personal welcome by Sarla to in-house chef options, our concierge ensures your stay is unforgettable.',
      inquireBtn: 'Book Bespoke Concierge Service'
    },
    contact: {
      eyebrow: '06 — Contact & Location',
      title: 'Contact Our Concierge',
      subtitle: 'Questions about availability, location, or arranging an intimate gathering? Our team is at your disposal.',
      fullNameLabel: 'Full Name',
      emailLabel: 'Email Address',
      serviceLabel: 'Inquiry Subject',
      locationLabel: 'City / Origin',
      timelineLabel: 'Preferred Dates',
      messageLabel: 'Your Message',
      sendBtn: 'Send Message',
      successMessage: 'Your message has been sent to Villa Little Bohème Concierge!'
    },
    footer: {
      tagline: 'Luxury Private Villa & Tailored Holiday Stays.',
      location: 'Paris • Provence • Palma de Mallorca',
      rights: 'All rights reserved. Villa Little Bohème.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Presentación',
      villa: 'La Villa y Espacios',
      booking: 'Reserva',
      portfolio: 'Galería',
      services: 'Conserjería',
      contact: 'Contacto y Acceso',
      bookCta: 'Reservar la Villa',
      subtagline: 'VILLA PRIVADA DE LUJO • ESTANCIAS'
    },
    hero: {
      headlineMain: 'Villa Little Bohème',
      headlineItalic: 'Privatización Exclusiva y Entorno Natural',
      description: 'Construida en 2023, una residencia de excepción estilo bohemio chic con piscina climatizada y servicios a medida para 10-12 huéspedes.',
      ctaButton: 'Reservar Su Estancia',
      videoLabel: 'Atmósfera',
      videoMoods: {
        paris: 'Luz Bohemia',
        mediterranean: 'Villa Mediterránea',
        minimalist: 'Santuario Elegante',
        scandinavian: 'Calma Natural'
      },
      playVideo: 'Reproducir vídeo',
      pauseVideo: 'Pausar vídeo',
      showContent: 'Mostrar contenido',
      hideContent: 'Ocultar contenido',
      explore: 'Descubrir'
    },
    about: {
      eyebrow: '01 — Presentación y Atmósfera',
      title: 'Una villa de lujo exclusiva envuelta en serenidad y elegancia.',
      p1: 'Construida en 2023 y concebida por Sarla, Villa Little Bohème encarna el arte de vivir mediterráneo en una refinada atmósfera bohemia chic. Diseñada como un refugio de paz en plena naturaleza, la villa combina materiales nobles y luz natural.',
      p2: 'Alquilada exclusivamente de forma íntegra para 10 a 12 huéspedes, la propiedad garantiza total privacidad. Disfrute de 5 elegantes suites, piscina climatizada 15x5m, parque de 3.000 m² con horno de pizza, mini-fútbol, gimnasio y pista de petanca.',
      privatizationTitle: '100% Privado y Confidencial',
      privatizationDesc: 'Sin otros huéspedes. La villa, la piscina y los jardines son exclusivamente para usted.',
      conciergeTitle: 'Desayuno Diario y Limpieza Incluida',
      conciergeDesc: 'Cada mañana disfrute de un desayuno casero recién preparado. Limpieza diaria incluida para su confort.',
      quote: '«Villa Little Bohème fue concebida para reunir a familias y amigos en un marco natural excepcional con el lujo de un gran hotel.»',
      quoteAuthor: '— Sarla, Anfitriona y Diseñadora',
      badgeTitle: 'Villa Privada Excepcional',
      badgeSubtitle: 'Temporada 2026 • Reserve Sus Fechas'
    },
    villa: {
      eyebrow: '02 — Distribución e Instalaciones',
      title: 'Espacios de la Villa (480 m²)',
      description: 'Diseño arquitectónico de dos niveles concebido para acoger a 10-12 huéspedes en perfecta armonía.',
      ratePerNight: 'Tarifa de Privatización',
      perNight: 'por noche',
      privatizationBadge: 'Privatización Íntegra • 10-12 Huéspedes',
      capacity: '10 a 12 personas',
      area: '480 m² habitables',
      bedrooms: '5 Suites Excepcionales',
      spacesTitle: 'Espacios y Distribución',
      amenitiesTitle: 'Instalaciones Exteriores y Ocio',
      bookDatesBtn: 'Seleccionar Mis Fechas',
      spaces: [
        {
          title: 'Planta Baja • 4 Suites y Salón Catedral',
          desc: 'La planta baja cuenta con 2 suites principales (camas 180cm) con baño privado, 1 suite infantil a medida, 1 suite independiente con terraza y un salón catedral con chimenea y cocina gourmet.',
          features: ['2 Suites Principales (camas 180cm)', '1 Suite Infantil personalizada', '1 Suite Independiente con terraza', 'Gran Salón con Chimenea', 'Cocina Gourmet Equipada'],
          img: '/photos/14.jpg'
        },
        {
          title: '1ª Planta • Master Suite y Estudio',
          desc: 'Planta privada con la Master Suite principal (cama King 180cm), gran baño de travertino con bañera de piedra natural, vestidor a medida y espacio de estudio/sala de juegos.',
          features: ['Cama King 180cm Master Bed', 'Bañera Exenta de Piedra', 'Gran Vestidor a Medida', 'Estudio y Zona de Lectura', 'Vistas al Parque y Piscina'],
          img: '/photos/19.jpg'
        },
        {
          title: 'Exteriores y Piscina Climatizada 15x5m',
          desc: 'Parque de 3.000 m² con piscina climatizada de 15 m (de mayo a octubre), horno de pizza a leña, barbacoa, campo de mini-fútbol, gimnasio exterior, trampolín gigante y petanca.',
          features: ['Piscina Climatizada 15x5m', 'Horno de Pizza y Barbacoa', 'Mini-Fútbol y Petanca', 'Zona Gimnasio Exterior', 'Trampolín Gigante Infantil'],
          img: '/photos/67.jpg'
        },
        {
          title: 'Confort Familiar y Servicios de Lujo',
          desc: 'Pensada para vacaciones familiares con kit de bebé, climatización individual, Wi-Fi fibra óptica, sonido Devialet y aparcamiento privado para 6 vehículos.',
          features: ['Desayuno Casero Incluido', 'Servicio de Limpieza Diario', 'Equipamiento Infantil y Bebé', 'Aparcamiento Cerrado 6 Plazas', 'Wi-Fi Fibra y Sonido Devialet'],
          img: '/photos/0.jpg'
        }
      ]
    },
    booking: {
      eyebrow: '04 — Reserva Directa y Calendario',
      title: 'Reserve Villa Little Bohème',
      description: 'Seleccione sus fechas de entrada y salida para calcular el importe de su estancia.',
      step1: '1. Fechas de Estancia',
      checkIn: 'Fecha de Entrada',
      checkOut: 'Fecha de Salida',
      guests: 'Número de Huéspedes',
      guestCount: (n: number) => `${n} Huésped${n > 1 ? 'es' : ''}`,
      nightsCount: (n: number) => `${n} Noche${n > 1 ? 's' : ''}`,
      step2: '2. Modalidad de Alquiler',
      villaOptionTitle: 'Privatización Íntegra Villa Little Bohème',
      villaOptionSub: 'Uso exclusivo • 5 Suites (10-12 personas) • Piscina climatizada y 3.000 m² de jardín',
      step3: '3. Sus Datos y Opciones',
      fullName: 'Nombre y Apellidos',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      specialRequests: 'Opciones solicitadas (Ej: Chef a domicilio, traslado, kit bebé)',
      submitBtn: 'Confirmar Solicitud de Estancia',
      submitting: 'Enviando a conserjería...',
      summaryTitle: 'Resumen de su Estancia',
      includedTitle: 'Servicios Incluidos',
      incBreakfast: 'Desayuno casero servido cada mañana',
      incCancellation: 'Limpieza diaria y sábanas de lino',
      incConcierge: 'Bienvenida personal por Sarla y conserjería',
      priceBreakdown: 'Cálculo del Precio',
      nightlyRate: 'Tarifa por noche',
      cleaningFee: 'Gastos de preparación y lino',
      breakfastTax: 'Desayuno y tasa turística',
      totalPrice: 'Precio Total Estimado',
      confirmationTitle: 'Solicitud Recibida',
      thankYou: (name: string) => `¡Muchas gracias ${name}!`,
      confirmedMessage: 'Su solicitud de estancia en Villa Little Bohème ha sido recibida por nuestra conserjería.',
      refCode: 'Referencia de reserva',
      emailSentNote: 'Se le ha enviado un correo electrónico de confirmación. Sarla o nuestra conserjería le contactará en 2 horas.',
      bookAnother: 'Realizar otra reserva'
    },
    mobileBooking: {
      barTitle: 'RESERVAR ESTANCIA',
      expandedTitle: 'Reservar estancia',
      dates: 'Entrada - Salida',
      adults: 'Adulto',
      children: 'Niños',
      search: 'Enviar via WhatsApp'
    },
    portfolio: {
      eyebrow: '03 — Galería de Fotos',
      title: 'Descubra la Villa en Imágenes',
      subtitle: 'Explore la galería de imágenes de la propiedad: suites, piscina, salones y jardines.',
      allCategories: 'Todas las Vistas',
      viewProject: 'Ampliar foto',
      seeMoreBtn: 'Ver Toda la Galería de Fotos',
      fullGalleryTitle: 'Galería Completa de Villa Little Bohème',
      fullGallerySubtitle: 'Descubra toda la propiedad: master suites, piscina climatizada 15x5m, horno de pizza y jardines.',
      closeGallery: 'Cerrar Galería'
    },
    services: {
      eyebrow: '05 — Conserjería y Servicios',
      title: 'Servicios y Conserjería de la Villa',
      subtitle: 'Desde la bienvenida personalizada por Sarla hasta opciones de Chef privado, nuestra conserjería cuidará cada detalle.',
      inquireBtn: 'Reservar Servicio de Conserjería'
    },
    contact: {
      eyebrow: '06 — Contacto y Ubicación',
      title: 'Contacte con Nuestra Conserjería',
      subtitle: '¿Tiene preguntas sobre disponibilidad, accesos o celebrar un evento íntimo? Nuestro equipo le atiende.',
      fullNameLabel: 'Nombre y Apellidos',
      emailLabel: 'Correo Electrónico',
      serviceLabel: 'Asunto de la Consulta',
      locationLabel: 'Ciudad / Origen',
      timelineLabel: 'Fechas Deseadas',
      messageLabel: 'Su Mensaje',
      sendBtn: 'Enviar Mensaje',
      successMessage: '¡Su mensaje ha sido enviado a la conserjería de Villa Little Bohème!'
    },
    footer: {
      tagline: 'Villa Privada de Lujo y Estancias a Medida.',
      location: 'París • Provenza • Palma de Mallorca',
      rights: 'Todos los derechos reservados. Villa Little Bohème.'
    }
  }
};
