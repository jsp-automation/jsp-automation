# JSP Automation

Proyecto web estático de JSP Automation con Astro, TypeScript strict, Tailwind CSS v4 y sitemap.

## Arranque

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

- `src/layouts/Base.astro`: layout base con metadatos, Open Graph y slot.
- `src/pages/index.astro`: placeholder inicial en castellano.
- `src/styles/global.css`: reset mínimo, tipografía y tokens de diseño.
- `src/i18n/es.json`: diccionario base en castellano, preparado para añadir otros idiomas.
- `src/components/`: componentes reutilizables.
- `public/`: estáticos públicos, incluido el favicon placeholder.

Los tokens viven en `src/styles/global.css` como variables CSS y en `@theme` para utilidades Tailwind. El i18n vive en `src/i18n/`; castellano es la raíz `/` sin prefijo.
