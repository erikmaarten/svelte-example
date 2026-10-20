<script>
    import { restaurants } from "$lib/restaurants.js";

    const neighborhoods = [
        ...new Set(restaurants.map((r) => r.neighborhood)),
    ].sort();
    const averageRating = (
        restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length
    ).toFixed(1);
</script>

<svelte:head>
    <title>About — Stockholm Eats</title>
    <meta
        name="description"
        content="About the Stockholm Eats restaurant guide."
    />
</svelte:head>

<h1>About this guide</h1>

<p class="lede">
    Stockholm Eats is a small, opinionated guide to {restaurants.length} restaurants
    in Stockholm. Every entry is stored as a plain object in a single static array
    — there is no database and no API, so the whole guide ships as static data.
</p>

<div class="stats">
    <div class="stat">
        <strong>{restaurants.length}</strong>
        <span>restaurants</span>
    </div>
    <div class="stat">
        <strong>{neighborhoods.length}</strong>
        <span>neighbourhoods</span>
    </div>
    <div class="stat">
        <strong>{averageRating}</strong>
        <span>average rating</span>
    </div>
</div>

<h2>How ratings work</h2>
<p>
    Each restaurant has a rating out of five, shown as stars on the guide and
    detail pages. Half stars are supported, so a 4.5 renders as four full stars
    and one half star.
</p>

<h2>Neighbourhoods covered</h2>
<ul class="areas">
    {#each neighborhoods as area}
        <li>{area}</li>
    {/each}
</ul>

<style>
    h1 {
        font-size: clamp(28px, 5vw, 40px);
        letter-spacing: -0.02em;
        margin: 0 0 16px;
    }
    .lede {
        max-width: 62ch;
        font-size: 17px;
        line-height: 1.65;
        color: #5c564e;
        margin: 0 0 28px;
    }
    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
        margin-bottom: 36px;
    }
    .stat {
        background: #fff;
        border: 1px solid #ece6dd;
        border-radius: 14px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .stat strong {
        font-size: 28px;
        letter-spacing: -0.02em;
    }
    .stat span {
        font-size: 13px;
        color: #8a8378;
    }
    h2 {
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #8a8378;
        margin: 0 0 10px;
    }
    p {
        max-width: 62ch;
        line-height: 1.7;
        color: #3a352f;
        margin: 0 0 28px;
    }
    .areas {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .areas li {
        background: #fff;
        border: 1px solid #ece6dd;
        border-radius: 999px;
        padding: 7px 14px;
        font-size: 13px;
        color: #4a453e;
    }
</style>
