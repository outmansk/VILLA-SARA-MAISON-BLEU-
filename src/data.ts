import { Project, Service, StudioInfo, VillaSuite } from './types';

export const studioData: StudioInfo = {
  name: 'VILLA LITTLE BOHÈME',
  founder: 'Sarla',
  tagline: "Villa Privée de Luxe, Séjours d'Exception & Conciergerie.",
  location: 'Route de Fès • Marrakech • Maroc',
  instagram: '@mylittleboheme_marrakech',
  email: 'reservation@villalittleboheme.com',
  phone: '+44 7938 766267'
};

export const villaSuitesData: VillaSuite[] = [
  {
    id: 'rdc-suites-privees',
    title: 'Rez-de-Chaussée • Espaces de Vie & 4 Suites',
    subtitle: 'Accès Direct Jardins & Piscine Chauffée',
    category: 'Suite',
    capacity: 8,
    size: '280 m²',
    bed: '3 Lits King Size (180cm) + 1 Suite Enfants',
    pricePerNight: 1850,
    heroImage: '/photos/14.jpg',
    gallery: [
      '/photos/14.jpg',
      '/photos/15.jpg',
      '/photos/16.jpg'
    ],
    description: "Le rez-de-chaussée offre un grand salon cathédrale avec cheminée, une cuisine gourmande entièrement équipée et 4 suites d'exception : 2 suites parentales (lits 180cm) avec salle d'eau privative, 1 suite enfants sur mesure et 1 suite indépendante avec accès terrasse.",
    amenities: ['2 Suites Lits 180cm', '1 Suite Enfants', '1 Suite Indépendante', 'Grand Salon Cathédrale', 'Cuisine Équipée & Îlot', 'Climatisation Individuelle'],
    highlights: ['Accès de plain-pied à la piscine', "Salles d'eau en pierre de travertin", 'Draps en lin français lavé']
  },
  {
    id: 'etage-master-suite',
    title: '1er Étage • Master Suite Parente & Bureau',
    subtitle: 'Vue Panoramique & Baignoire en Stone',
    category: 'Suite',
    capacity: 2,
    size: '120 m²',
    bed: 'Lit King Size de Luxe (180x200)',
    pricePerNight: 1850,
    heroImage: '/photos/19.jpg',
    gallery: [
      '/photos/19.jpg',
      '/photos/17.jpg'
    ],
    description: "Le premier étage abrite la somptueuse Master Suite parente dotée d'un lit 180cm, d'un grand dressing sur-mesure, d'une majestueuse salle de bain en travertin avec baignoire en pierre naturelle et d'un espace bureau / salon de détente.",
    amenities: ['Lit King Size 180cm', 'Grande Baignoire en Pierre', 'Dressing Sur-Mesure', 'Espace Bureau & Jeu', 'Balcon Privatif', 'Insonorisation Totale'],
    highlights: ['Vue dégagée sur la piscine et le jardin', "Hauteur sous plafond d'exception", 'Atmosphère sérénité absolue']
  },
  {
    id: 'exterieurs-piscine-jardin',
    title: 'Parc Extérieur, Piscine Chauffée & Équipements',
    subtitle: '3 000 m² de Nature & Loisirs Privés',
    category: 'Villa Entière',
    capacity: 12,
    size: '3 000 m²',
    bed: 'Espaces Extérieurs Complets',
    pricePerNight: 1850,
    heroImage: '/photos/67.jpg',
    gallery: [
      '/photos/67.jpg',
      '/photos/68.jpg',
      '/photos/59.jpg'
    ],
    description: 'Un jardin paysager de 3 000 m² avec piscine chauffée 15x5m (de mai à octobre), four à pizza artisanal, brasero & barbecue, terrain de mini-football, espace gym / salle de sport, trampoline géant et terrain de pétanque.',
    amenities: ['Piscine Chauffée 15x5m', 'Four à Pizza & Brasero', 'Terrain Mini-Football', 'Espace Gym & Trampoline', 'Pétanque & Pergola', 'Parking Sécurisé 6 Places'],
    highlights: ['Cadre naturel sous les oliviers', 'Équipements pour petits et grands', "Transats en teck & cuisine d'été"]
  },
  {
    id: 'villa-privatisation-complete',
    title: 'Privatisation Intégrale de la Villa Little Bohème',
    subtitle: 'Exclusivité Totale pour 10 à 12 Hôtes',
    category: 'Villa Entière',
    capacity: 12,
    size: '480 m²',
    bed: '5 Suites (4 RDC + 1 Étage)',
    pricePerNight: 1850,
    heroImage: '/photos/59.jpg',
    gallery: [
      '/photos/59.jpg',
      '/photos/0.jpg',
      '/photos/19.jpg'
    ],
    description: "Louez la Villa Little Bohème en privatisation complète pour vos vacances en famille, séjours entre amis ou événements intimes. Inclut l'accès exclusif à la piscine chauffée, au jardin de 3 000 m², aux 5 suites, aux petits-déjeuners maison et au service conciergerie.",
    amenities: ['5 Suites de Luxe (10-12 Hôtes)', 'Piscine Chauffée 15x5m', 'Petit-déjeuner Maison Inclus', 'Ménage Quotidien Inclus', 'Four à Pizza & Brasero', 'Gym, Mini-Foot & Pétanque'],
    highlights: ['100% Privatif & Confidentiel', 'Accueil personnalisé par Sarla', 'Possibilité Chef Privé sur demande']
  }
];

export const projectsData: Project[] = [
  {
    id: 'suite-sol-mediterranean',
    title: 'Suites du RDC & Jardin',
    location: 'Villa Little Bohème',
    year: '2023',
    category: 'Residential',
    heroImage: '/photos/14.jpg',
    gallery: [
      '/photos/14.jpg',
      '/photos/15.jpg',
      '/photos/16.jpg'
    ],
    description: '2 suites indépendantes avec lit 180cm, 1 suite enfants personnalisée et 1 suite autonome ouvrant directement sur le patio et la piscine chauffée.',
    quote: 'Lumière traversante, enduits à la chaux naturelle et mobilier en bois brut.',
    area: '280 m²',
    materials: ['Chaux Naturelle', 'Pierre de Travertin', 'Lin Lavé Français', 'Bois de Chêne Massif']
  },
  {
    id: 'master-suite-etage',
    title: 'Master Suite & Étage',
    location: 'Villa Little Bohème',
    year: '2023',
    category: 'Residential',
    heroImage: '/photos/19.jpg',
    gallery: [
      '/photos/19.jpg',
      '/photos/17.jpg'
    ],
    description: 'Une suite majestueuse occupant le premier étage : grand lit 180cm, dressing sur-mesure, salle de bain en travertin sculpté avec baignoire îlot et espace bureau.',
    quote: 'Un sanctuaire de quiétude offrant une vue plongeante sur les oliviers centenaires.',
    area: '120 m²',
    materials: ['Travertin Adouci', 'Robinetterie Laiton Brossé', 'Dressing Chêne Clair', 'Textiles Organiques']
  },
  {
    id: 'piscine-four-a-pizza',
    title: 'Piscine Chauffée & Équipements Extérieurs',
    location: 'Villa Little Bohème',
    year: '2023',
    category: 'Hospitality',
    heroImage: '/photos/67.jpg',
    gallery: [
      '/photos/67.jpg',
      '/photos/53.jpg'
    ],
    description: 'Piscine chauffée de 15x5m, four à pizza italien, brasero convivial, terrain de mini-foot, gym extérieure, trampoline géant et terrains de pétanque.',
    quote: 'Des extérieurs conçus pour conjuguer détente absolue et moments festifs en famille.',
    area: '3 000 m²',
    materials: ['Margelles en Pierre', 'Terrasse en Teck', 'Pergola Bois Ombragée', 'Brasero Acier Corten']
  },
  {
    id: 'salons-reception-cuisine',
    title: 'Grand Salon Cathédrale & Cuisine Gourmet',
    location: 'Villa Little Bohème',
    year: '2023',
    category: 'Architectural',
    heroImage: '/photos/0.jpg',
    gallery: [
      '/photos/0.jpg',
      '/photos/7.jpg'
    ],
    description: "Une pièce de vie majestueuse avec cheminée, grandes baies vitrées s'ouvrant sur la terrasse et cuisine ouverte sur-mesure équipée pour de grands repas.",
    quote: 'Harmonie parfaite entre volumes contemporains et chaleur bohème chic.',
    area: '160 m²',
    materials: ['Îlot en Quartzite', 'Canapés Lin Lavé', 'Cheminée Pierre', 'Équipements Professionnels']
  }
];

export const servicesData: Service[] = [
  {
    id: 'concierge-prive',
    number: '01',
    title: 'Conciergerie & Services Inclus',
    tagline: 'Accueil personnalisé par Sarla & attentions quotidiennes.',
    description: 'Tout est pensé pour votre tranquillité : petit-déjeuner fait maison chaque matin, ménage quotidien, linge de maison en lin lavé, serviettes de piscine et assistance dédiée tout au long de votre séjour.',
    deliverables: [
      'Petit-déjeuner maison préparé chaque matin (Inclus)',
      'Ménage quotidien & rafraîchissement des suites',
      'Accueil personnalisé par Sarla & remise des clés',
      'Linge de lit en lin lavé & serviettes de piscine',
      'Conciergerie 7j/7 pour vos réservations & activités'
    ],
    icon: 'Compass'
  },
  {
    id: 'gastronomie-chef',
    number: '02',
    title: 'Chef à Domicile & Gastronomie',
    tagline: 'Repas sur-mesure, four à pizza & barbecues.',
    description: "Profitez d'un Chef privé à domicile (60€/jour pour la préparation ou formule repas complète à partir de 30€/personne) pour des soirées pizza autour du four à bois, des barbecues au bord de la piscine ou des dîners gastronomiques.",
    deliverables: [
      'Chef à domicile dédié (60€/jour ou 30€/personne)',
      'Soirées Pizza artisanales au four à bois',
      'Barbecues & Grillades privatives au brasero',
      'Dîners gastronomiques sous les étoiles',
      'Menus adaptés (Végan, Sans gluten, Enfants...)'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'evenements-wellness',
    number: '03',
    title: 'Activités, Bien-être & Événements',
    tagline: 'Transferts, massages, sports & réceptions intimes.',
    description: "Enrichissez votre séjour avec des prestations sur-mesure : transferts aéroport avec chauffeur, massages et coach sportif à la villa, séances de yoga au jardin ou organisation d'événements familiaux intimes.",
    deliverables: [
      'Transferts Aéroport & Chauffeur Privé sur demande',
      'Massages relaxants & Coach sportif à la villa',
      'Séances de Yoga & Méditation dans le jardin',
      "Organisation d'événements intimes & mariages (petit comité)",
      'Matériel enfant & équipements sportifs sécurisés'
    ],
    icon: 'Feather'
  }
];

export const instagramPosts = [
  {
    id: 'ig-1',
    image: '/photos/19.jpg',
    caption: 'Lumière matinale sur la Master Suite de la Villa Little Bohème.',
    likes: '1,420'
  },
  {
    id: 'ig-2',
    image: '/photos/53.jpg',
    caption: 'Piscine chauffée 15x5m & brasero sous les oliviers.',
    likes: '2,180'
  },
  {
    id: 'ig-3',
    image: '/photos/0.jpg',
    caption: 'Cuisine gourmet & salon cathédrale baigné de soleil.',
    likes: '3,050'
  },
  {
    id: 'ig-4',
    image: '/photos/73.jpg',
    caption: 'Atmosphère bohème chic & sérénité absolue.',
    likes: '1,890'
  }
];

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'extérieurs' | 'suites' | 'salons' | 'details';
  locationTag?: string;
}

export const fullVillaGallery: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: '/photos/67.jpg',
    title: 'Piscine Chauffée 15x5m & Transats Teck',
    category: 'extérieurs',
    locationTag: 'Espace Piscine'
  },
  {
    id: 'photo-2',
    url: '/photos/53.jpg',
    title: 'Piscine & Palmiers sous le Soleil',
    category: 'extérieurs',
    locationTag: 'Piscine & Jardin'
  },
  {
    id: 'photo-3',
    url: '/photos/19.jpg',
    title: 'Master Suite Parente • Lit 180cm & Projecteur',
    category: 'suites',
    locationTag: '1er Étage'
  },
  {
    id: 'photo-4',
    url: '/photos/1.jpg',
    title: 'Grand Salon Cathédrale & Cheminée',
    category: 'salons',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-5',
    url: '/photos/7.jpg',
    title: 'Cuisine Gourmet Équipée & Îlot Central',
    category: 'salons',
    locationTag: 'Espace Repas'
  },
  {
    id: 'photo-6',
    url: '/photos/22.jpg',
    title: 'Suite Rez-de-Chaussée avec Lit en Lin',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-7',
    url: '/photos/67.jpg',
    title: 'Salon Bohème & Tapis en Jute',
    category: 'salons',
    locationTag: 'Espace Détente'
  },
  {
    id: 'photo-8',
    url: '/photos/39.jpg',
    title: 'Salle de Bain en Béton Ciré & Vasque Pierre',
    category: 'suites',
    locationTag: 'Master Suite'
  },
  {
    id: 'photo-9',
    url: '/photos/12.jpg',
    title: 'Suite avec Tête de Lit & Coussins Palmiers',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-10',
    url: '/photos/55.jpg',
    title: 'Vue d\'Ensemble Piscine & Villa',
    category: 'extérieurs',
    locationTag: 'Jardin & Loisirs'
  },
  {
    id: 'photo-11',
    url: '/photos/58.jpg',
    title: 'Espace Repas Extérieur sous Pergola',
    category: 'extérieurs',
    locationTag: 'Jardin Ombragé'
  },
  {
    id: 'photo-12',
    url: '/photos/24.jpg',
    title: 'Détails de Décoration Bohème Chic',
    category: 'details',
    locationTag: 'Design Intérieur'
  },
  {
    id: 'photo-13',
    url: '/photos/54.jpg',
    title: 'Piscine Illuminée au Crépuscule',
    category: 'extérieurs',
    locationTag: 'Piscine de Nuit'
  },
  {
    id: 'photo-14',
    url: '/photos/56.jpg',
    title: 'Lounge Extérieur & Parasol Tressé',
    category: 'extérieurs',
    locationTag: 'Terrasse Piscine'
  },
  {
    id: 'photo-15',
    url: '/photos/59.jpg',
    title: 'Coin Détente Bohème au Bord de la Piscine',
    category: 'extérieurs',
    locationTag: 'Poolside Lounge'
  },
  {
    id: 'photo-16',
    url: '/photos/35.jpg',
    title: 'Terrasse Méditerranéenne & Cactus',
    category: 'extérieurs',
    locationTag: 'Terrasse Extérieure'
  },
  {
    id: 'photo-17',
    url: '/photos/20.jpg',
    title: 'Table d\'Été Dressée sous les Arbres',
    category: 'extérieurs',
    locationTag: 'Repas en Plein Air'
  },
  {
    id: 'photo-18',
    url: '/photos/23.jpg',
    title: 'Double Vasque en Béton Ciré & Miroirs',
    category: 'suites',
    locationTag: 'Salle de Bain'
  },
  {
    id: 'photo-19',
    url: '/photos/30.jpg',
    title: 'Douche en Tadelakt & Robinetterie Noire',
    category: 'suites',
    locationTag: 'Salle de Bain'
  },
  {
    id: 'photo-20',
    url: '/photos/17.jpg',
    title: 'Dressing Sur-Mesure en Bois Clair',
    category: 'suites',
    locationTag: 'Master Suite'
  },
  {
    id: 'photo-21',
    url: '/photos/31.jpg',
    title: 'Suite avec Plaid Texturé & Lumière Naturelle',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-22',
    url: '/photos/37.jpg',
    title: 'Chambre Minimaliste & Béton Ciré',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-23',
    url: '/photos/32.jpg',
    title: 'Salon Bohème avec Poutres Apparentes',
    category: 'salons',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-24',
    url: '/photos/68.jpg',
    title: 'Salle à Manger & Chaises en Osier',
    category: 'salons',
    locationTag: 'Espace Repas'
  },
  {
    id: 'photo-25',
    url: '/photos/6.jpg',
    title: 'Coin Lecture Bohème & Escalier Design',
    category: 'salons',
    locationTag: 'Hall d\'Entrée'
  },
  {
    id: 'photo-26',
    url: '/photos/3.jpg',
    title: 'Salon TV & Canapé Modulaire',
    category: 'salons',
    locationTag: 'Espace de Vie'
  },
  {
    id: 'photo-27',
    url: '/photos/33.jpg',
    title: 'Plateau Petit-Déjeuner & Détails Lin',
    category: 'details',
    locationTag: 'Art de Vivre'
  },
  {
    id: 'photo-28',
    url: '/photos/73.jpg',
    title: 'Vase & Herbes Séchées sur Béton Ciré',
    category: 'details',
    locationTag: 'Décoration Intérieure'
  },
  {
    id: 'photo-29',
    url: '/photos/27.jpg',
    title: 'Coin Salon Lumineux & Plantes Vertes',
    category: 'salons',
    locationTag: 'Espace de Vie'
  },
  {
    id: 'photo-30',
    url: '/photos/14.jpg',
    title: 'Suite Terracotta & Suspensions Bohèmes',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-31',
    url: '/photos/15.jpg',
    title: 'Suite avec Étagère Arche en Bois',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-32',
    url: '/photos/16.jpg',
    title: 'Suite avec Accès Direct Terrasse & Jardin',
    category: 'suites',
    locationTag: 'Rez-de-chaussée'
  },
  {
    id: 'photo-33',
    url: '/photos/0.jpg',
    title: 'Vue Panoramique Salon & Cuisine Ouverte',
    category: 'salons',
    locationTag: 'Rez-de-chaussée'
  }
];
