<script>
  import { restaurants } from "$lib/restaurants.js";
  import StarRating from "$lib/components/StarRating.svelte";
  import { base } from "$app/paths";

  let query = $state("");
  let neighborhood = $state("All");

  const neighborhoods = [
    "All",
    ...new Set(restaurants.map((r) => r.neighborhood)),
  ].sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)));

  const filtered = $derived(
    restaurants.filter((r) => {
      const matchesNeighborhood =
        neighborhood === "All" || r.neighborhood === neighborhood;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.shortInfo.toLowerCase().includes(q);
      return matchesNeighborhood && matchesQuery;
    }),
  );

  const averageRating = (
    restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length
  ).toFixed(1);

  function priceLabel(level) {
    return "kr".repeat(level);
  }
</script>

<svelte:head>
  <title>Stockholm Eats — Restaurant Guide</title>
  <meta
    name="description"
    content="A guide to 20 restaurants in Stockholm, with ratings, cuisine and neighbourhood info."
  />
</svelte:head>

<section class="hero">
  <p class="eyebrow">Restaurant guide</p>
  <h1>Where to eat in Stockholm</h1>
  <p class="lede">
    Twenty places worth your evening, from three-star tasting menus to a fish
    counter in a market hall. Average rating across the guide: <strong
      >{averageRating}</strong
    > / 5.
  </p>
</section>

<div class="controls">
  <label class="search">
    <span class="visually-hidden">Search restaurants</span>
    <input
      type="search"
      placeholder="Search by name, cuisine or keyword…"
      bind:value={query}
    />
  </label>
  <div class="chips" role="group" aria-label="Filter by neighbourhood">
    {#each neighborhoods as area}
      <button
        type="button"
        class="chip"
        class:active={neighborhood === area}
        onclick={() => (neighborhood = area)}
      >
        {area}
      </button>
    {/each}
  </div>
</div>

<p class="count">
  Showing {filtered.length} of {restaurants.length} restaurants
</p>

{#if filtered.length === 0}
  <p class="empty">
    No restaurants match that search. Try a different keyword or neighbourhood.
  </p>
{:else}
  <ul class="grid">
    {#each filtered as restaurant (restaurant.slug)}
      <li>
        <a class="card" href="{base}/restaurants/{restaurant.slug}">
          <div class="card-top">
            <h2>{restaurant.name}</h2>
            <span
              class="price"
              title="Price level {restaurant.priceLevel} of 4"
            >
              {priceLabel(restaurant.priceLevel)}
            </span>
          </div>
          <p class="meta">{restaurant.cuisine} · {restaurant.neighborhood}</p>
          <StarRating rating={restaurant.rating} size="sm" />
          <p class="info">{restaurant.shortInfo}</p>
          <span class="more">View details →</span>
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .hero {
    margin-bottom: 28px;
  }
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 12px;
    font-weight: 600;
    color: #b4451f;
    margin: 0 0 8px;
  }
  h1 {
    font-size: clamp(28px, 5vw, 44px);
    line-height: 1.1;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }
  .lede {
    max-width: 60ch;
    color: #5c564e;
    line-height: 1.6;
    margin: 0;
  }
  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .search {
    flex: 1 1 260px;
  }
  .search input {
    width: 100%;
    padding: 11px 14px;
    border: 1px solid #e2dbd1;
    border-radius: 10px;
    background: #fff;
    font: inherit;
    font-size: 14px;
  }
  .search input:focus {
    outline: 2px solid #b4451f;
    outline-offset: 1px;
    border-color: transparent;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .chip {
    border: 1px solid #e2dbd1;
    background: #fff;
    color: #4a453e;
    padding: 7px 13px;
    border-radius: 999px;
    font: inherit;
    font-size: 13px;
    cursor: pointer;
  }
  .chip:hover {
    background: #f4efe7;
  }
  .chip.active {
    background: #1f1d1a;
    border-color: #1f1d1a;
    color: #fff;
  }
  .count {
    color: #8a8378;
    font-size: 13px;
    margin: 0 0 18px;
  }
  .empty {
    padding: 40px 0;
    color: #8a8378;
  }
  .grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    padding: 18px;
    background: #fff;
    border: 1px solid #ece6dd;
    border-radius: 14px;
    text-decoration: none;
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease,
      border-color 0.15s ease;
  }
  .card:hover {
    transform: translateY(-2px);
    border-color: #d9cfc2;
    box-shadow: 0 10px 24px rgba(31, 29, 26, 0.08);
  }
  .card:focus-visible {
    outline: 2px solid #b4451f;
    outline-offset: 2px;
  }
  .card-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
  }
  h2 {
    font-size: 18px;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .price {
    color: #b4451f;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
  .meta {
    margin: 0;
    font-size: 13px;
    color: #7a736a;
  }
  .info {
    margin: 0;
    font-size: 14px;
    line-height: 1.55;
    color: #4a453e;
    flex: 1;
  }
  .more {
    font-size: 13px;
    font-weight: 600;
    color: #b4451f;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
</style>
