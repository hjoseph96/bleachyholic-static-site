// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { transformWithEsbuild } from 'vite';

/** SPA fallback: serve index.html for client-side routes (fixes 404 on refresh) */
function spaFallbackPlugin() {
  return {
    name: 'vite-plugin-spa-fallback',
    apply: 'serve',
    configureServer(server) {
      // Add early so we run before Astro's routing
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next();
        const url = req.url?.split('?')[0] ?? '/';
        const pathname = decodeURIComponent(url);
        // Skip assets and internal paths
        if (
          (pathname.includes('.') && !pathname.endsWith('.html')) ||
          pathname.startsWith('/@') ||
          pathname.startsWith('/node_modules/') ||
          pathname.startsWith('/_astro/')
        ) {
          return next();
        }
        // Accept HTML (browser navigation) - not API or asset requests
        const accept = req.headers.accept || '';
        if (!accept.includes('text/html') && !accept.includes('*/*')) return next();
        // Rewrite to index so React Router can handle the route (preserve query/hash)
        const rest = (req.url ?? '').includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
        req.url = '/' + rest;
        next();
      });
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/react-app/**', '**/*.jsx', '**/*.tsx']
    })
  ],
  vite: {
    plugins: [
      spaFallbackPlugin(),
      {
        name: 'transform-jsx-for-analysis',
        enforce: 'pre',
        async transform(code, id) {
          if (id.includes('/react-app/') && (id.endsWith('.js') || id.endsWith('.jsx'))) {
            return transformWithEsbuild(code, id, {
              loader: 'jsx',
              jsx: 'automatic'
            });
          }
        }
      }
    ],
    define: {
      // CRA compatibility: replace process.env.PUBLIC_URL with base URL
      'process.env.PUBLIC_URL': JSON.stringify('')
    },
    css: {
      preprocessorOptions: {
        scss: {
          silentDeprecations: ['legacy-js-api']
        }
      }
    },
    resolve: {
      alias: {
        '~': '/node_modules',
        'redux-persist/integration/react': 'redux-persist/es/integration/react.js'
      }
    },
    // Allow JSX in .js files from the React app (CRA migration)
    esbuild: {
      loader: 'jsx',
      include: /src\/react-app\/.*\.js$/,
      exclude: []
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx'
        }
      }
    }
  }
});
