# Bleachyholic

Astro + React eCommerce project. Migrated from Create React App (Flone template).

## Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/pages/` - Astro pages (file-based routing)
- `src/react-app/` - React app (eCommerce components, Redux store, etc.)
- `public/` - Static assets (images, locales, etc.)

## Key Configuration

- **Astro** with `@astrojs/react` integration
- **React app** runs as client-only (`client:only="react"`) for full SPA behavior
- **Redux** with persist for cart, wishlist, compare state
- **React Router** handles client-side routing

## Deployment

The build outputs static HTML to `dist/`. For dynamic product routes (`/product/:id`), configure your host to serve `index.html` for 404s (SPA fallback) or add redirect rules.
