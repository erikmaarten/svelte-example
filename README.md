# Stockholm Eats

A single-page restaurant guide for Stockholm, built with SvelteKit.

**Live site:** https://erikmaarten.github.io/svelte-example/

- **Landing page** (`/`) — a list of 20 restaurants with name, cuisine, neighbourhood, price
  level, a short description and a star rating. Includes a text search and neighbourhood filters.
- **Detail page** (`/restaurants/[slug]`) — full info for one restaurant: description, signature
  dish, highlights, address, phone, website and opening hours, plus suggestions nearby.
- **About** (`/about`) — how the guide and its ratings work.

All restaurant data lives in a single static array in `src/lib/restaurants.js`. There is no
database and no API.

## How to run

In your terminal (in VS Code or the terminal app), run:

```
npm run dev
```

Then open the URL it prints, e.g. http://localhost:5173.

To preview the production build the way GitHub Pages serves it:

```
npm run build
npm run preview
```

## Deployment

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml`, which runs on every push
to `main`. It builds with `@sveltejs/adapter-static` and publishes the `build` directory.

Because this is a *project* site, it is served from a subpath
(`https://erikmaarten.github.io/svelte-example/`), so `paths.base` is set to `/svelte-example`
in `svelte.config.js`. All internal links go through `base` from `$app/paths` so they respect it.

To deploy somewhere else, override `BASE_PATH` at build time:

```
BASE_PATH= npm run build          # user/org site or custom domain (serves from /)
BASE_PATH=/my-repo npm run build  # a different project site
```

Two details that matter for Pages:

- `static/.nojekyll` stops Pages from running Jekyll, which would otherwise strip the `_app`
  directory and break all the JavaScript and CSS.
- Every route is prerendered (`export const prerender = true` in `src/routes/+layout.js`), and
  `svelte.config.js` lists all 20 restaurant pages as prerender entries so a broken link cannot
  silently drop a page from the build.

## Project structure

```
.github/workflows/deploy.yml    # build + deploy to GitHub Pages
static/.nojekyll                # tells Pages not to run Jekyll
src/
  lib/
    restaurants.js              # the static array of 20 restaurants
    components/StarRating.svelte # 5-star rating with half-star support
  routes/
    +layout.js                  # enables prerendering for every route
    +layout.svelte              # shared header, footer and global styles
    +page.svelte                # landing page: list, search and filters
    +error.svelte               # styled 404 / error page
    about/+page.svelte          # about the guide
    restaurants/[slug]/
      +page.server.js           # looks up the restaurant, 404s if unknown
      +page.svelte              # full restaurant detail page
```


