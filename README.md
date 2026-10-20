# Stockholm Eats

A single-page restaurant guide for Stockholm, built with SvelteKit.

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

## Project structure

```
src/
  lib/
    restaurants.js              # the static array of 20 restaurants
    components/StarRating.svelte # 5-star rating with half-star support
  routes/
    +layout.svelte              # shared header, footer and global styles
    +page.svelte                # landing page: list, search and filters
    +error.svelte               # styled 404 / error page
    about/+page.svelte          # about the guide
    restaurants/[slug]/
      +page.server.js           # looks up the restaurant, 404s if unknown
      +page.svelte              # full restaurant detail page
```


