import adapter from '@sveltejs/adapter-static';
import { restaurants } from './src/lib/restaurants.js';

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
// so the app needs a base path. Override with BASE_PATH for a user/org site
// (BASE_PATH= npm run build) or a custom domain.
const base = process.env.BASE_PATH ?? '/svelte-example';

/** @type {import('@sveltejs/kit').Config} */
export default {
    kit: {
        adapter: adapter(),
        paths: { base },
        prerender: {
            // Crawl from the root, and list every restaurant page explicitly so a
            // broken link can never silently drop a page from the build.
            entries: ['*', ...restaurants.map((restaurant) => `/restaurants/${restaurant.slug}`)]
        }
    }
};
