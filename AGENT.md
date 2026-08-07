# Villa Little Bohème - Agent System Instructions

> [!IMPORTANT]
> **LIVING DOCUMENT**: Ce fichier `AGENT.md` est la source de vérité absolue pour tout Agent IA travaillant sur ce projet. Il DOIT être lu avant toute modification et mis à jour automatiquement si l'architecture, la stack ou les conventions changent.

## 1. Vision et Objectifs
**Villa Little Bohème** est un site vitrine ultra-luxe pour la location d'une villa avec services exclusifs (conciergerie, chef, etc.). 
- **Esthétique** : Style "Royal Mansour", c'est-à-dire ultra-minimaliste, raffiné, aéré.
- **Règle d'or UI/UX** : Zéro "blabla". De grands visuels (cinématiques), des polices élégantes à empattement (serif) pour les titres, des textes extrêmement courts et précis, beaucoup d'espace blanc.
- **Objectif Business** : Convertir les visiteurs en utilisant des call-to-action (CTA) directs et fluides (ex: réservation via WhatsApp direct).

## 2. Stack Technologique
- **Framework** : React 19
- **Build Tool** : Vite 6
- **Styling** : Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Langage** : TypeScript (Strict mode)
- **Animations** : Framer Motion (`motion/react`)
- **Icônes** : `lucide-react`
- **Déploiement** : (Ex: Vercel, Netlify ou Node/Express)

## 3. Architecture et Structure des Dossiers
L'architecture est celle d'une Single Page Application (SPA) monolithique très propre :

```text
/
├── public/                 # Assets statiques (images, vidéos)
├── src/
│   ├── components/         # Composants d'interface (Sections de la page)
│   ├── App.tsx             # Point d'entrée principal & Routing (Ancres)
│   ├── main.tsx            # Montage React
│   ├── data.ts             # Données mockées/statiques de la villa (Photos, Projets)
│   ├── translations.ts     # Système de traduction i18n (FR, EN, ES)
│   ├── types.ts            # Déclarations des interfaces TypeScript
│   └── index.css           # CSS global (Tailwind imports & custom fonts)
├── package.json            # Dépendances & scripts
└── vite.config.ts          # Configuration Vite
```

### Pages et Composants Clés
Le site est un one-pager. `App.tsx` assemble les sections suivantes :
- `Navbar.tsx` : Navigation (transparente puis fond plein au scroll, sélecteur de langue).
- `Hero.tsx` : Vidéos plein écran (crossfade) avec grand titre.
- `About.tsx` : Section de présentation minimaliste.
- `VillaSuites.tsx` : Défilement vertical de grandes images des suites sans texte superflu.
- `Services.tsx` : Grille minimaliste des prestations (icône, titre, sous-titre).
- `Portfolio.tsx` : Galerie photos épurée.
- `BookingSection.tsx` : Interface de sélection de dates épurée.
- `MobileBookingBar.tsx` : Barre flottante sur mobile pour réservation rapide WhatsApp.
- `Contact.tsx` : Formulaire de contact.
- `Footer.tsx` : Informations légales et liens.

## 4. Règles de Code et Conventions

### Composants (React)
- **Fonctionnels et Typés** : Utiliser `React.FC` et toujours typer les props avec des `interface`.
- **Fichiers** : Un composant par fichier dans `src/components`.

### Design System (Tailwind CSS)
- **Couleurs Principales** :
  - Fond clair luxueux : `bg-[#FBF9F5]` / `bg-[#F2EFE9]`
  - Texte principal : `text-[#2A2E2C]`
  - Accent / Doré : `text-[#B59960]` (utilisé pour les boutons ou les titres mis en valeur)
  - Vert/Gris sourd : `text-[#6C7D6B]` (accents, sourcils/eyebrows)
- **Typographie** :
  - Titres majestueux : `font-serif font-light`
  - Textes et petits labels : `font-sans font-light` ou `uppercase tracking-[0.2em] font-medium`

### Gestion des Langues (i18n)
Ne jamais coder de texte en dur dans les composants. Utiliser systématiquement `translations.ts` :
```typescript
const t = translations[lang].sectionName;
// Usage: {t.title}
```

## 5. Bonnes Pratiques & Pièges à éviter

> [!WARNING]
> **DO NOT BREAK (Règles Critiques) :**
> 1. **Vidéos Hero** : Ne modifiez pas l'implémentation du `Hero.tsx` sans précaution. Il utilise plusieurs `<video>` montées simultanément avec transition `opacity` pour éviter l'écran noir de rechargement. Ne pas utiliser de rendu conditionnel (`if/else` sur les vidéos) car cela provoque des flashes noirs.
> 2. **Barre WhatsApp Mobile** : La `MobileBookingBar.tsx` génère directement une URL `wa.me` au lieu de remplir un formulaire. Ne pas casser cette UX directe voulue par le client.
> 3. **Minimalisme** : Lors de l'ajout d'une section, **ne mettez pas de descriptions longues, de listes à puces complexes ou de bordures épaisses**. Gardez des espaces immenses (`py-24`, `py-36`).

### Accessibilité (a11y)
- Toujours utiliser `alt` sur les balises `<img />`.
- Utiliser des balises sémantiques (`<section>`, `<nav>`, `<header>`, `<footer>`).
- Contrôler le contraste des textes clairs sur fonds clairs (notamment l'accent doré `#B59960` doit rester lisible).

### Performance et Images
- Charger les images via le dossier `/public` pour l'instant.
- Les vidéos du Hero doivent être encodées en H.264 (mp4) et WebM, compressées pour le web.
- Limiter les re-renders en utilisant `useMemo` et `useCallback` là où le traitement est lourd (par ex: manipulation des dates dans le Booking).

## 6. Commandes de Build & Déploiement

- **Développement** : `npm run dev` (démarre sur le port 3000)
- **Type Checking** : `npm run lint` (exécute `tsc --noEmit` pour s'assurer que TypeScript est valide). *Règle : Tout Agent doit exécuter `npm run lint` après une modification TS/TSX majeure.*
- **Build Production** : `npm run build`
- **Clean** : `npm run clean`

---

**Instruction pour l'IA** : Avant d'écrire ou de refactoriser du code pour Villa Little Bohème, lisez attentivement ce fichier. Si vos modifications touchent à la structure globale, aux traductions, ou ajoutent un nouveau paradigme (ex: ajout de Redux, d'un backend), vous **devez** mettre à jour ce fichier `AGENT.md` pour refléter les changements.
