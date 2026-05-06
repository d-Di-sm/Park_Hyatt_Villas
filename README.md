# Villa Serena — React + Vite + R3F

Réplica modular del proyecto `real-estate/` construida con React, Vite, Tailwind, Three.js, React Three Fiber, Drei y Framer Motion.

## Requisitos

- Node 18+
- Yarn

## Comandos

```bash
yarn install
yarn dev        # http://localhost:5173
yarn build      # genera dist/
yarn preview    # sirve dist/
```

## Estructura

```
Webpage/
├── public/
│   ├── images/         # fotos interiores y exteriores (IMG/)
│   ├── hotel/          # imágenes del slider de amenidades (HOTEL/)
│   ├── architecture/   # planos / mapa (ARQ/)
│   └── videos/         # tour cinematográfico (VID/)
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css       # variables, tipografía, estilos por sección
│   ├── data/
│   │   └── content.js  # datos editables (stats, features, plantas, etc.)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Stats.jsx
│       ├── VideoSection.jsx
│       ├── About.jsx
│       ├── Experience.jsx        # sección con canvas 3D
│       ├── CanvasExperience.jsx  # <Canvas /> de R3F
│       ├── Scene.jsx             # escena 3D (luces, anillos, partículas)
│       ├── Amenities.jsx
│       ├── Gallery.jsx
│       ├── Lightbox.jsx
│       ├── FloorPlan.jsx
│       ├── Location.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── Reveal.jsx            # wrapper de animación con framer-motion
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Edición rápida

- Textos / listas / planos: `src/data/content.js`
- Estilos globales y variables de marca: `src/index.css` (`:root`)
- Tema Tailwind: `tailwind.config.js` (`theme.extend.colors`, `fontFamily`)
- Cambia o añade secciones modificando `src/App.jsx`

## Notas

- Los assets viven exclusivamente en `public/` y se referencian con rutas absolutas (`/images/...`, `/videos/...`).
- La sección `Experience` añade un canvas 3D opcional (rings + sparkles) — eliminarla solo requiere quitar `<Experience />` de `App.jsx`.
