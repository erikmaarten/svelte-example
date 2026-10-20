<script>
    import StarRating from "$lib/components/StarRating.svelte";
    import { base } from "$app/paths";

    let { data } = $props();
    const restaurant = $derived(data.restaurant);
    const nearby = $derived(data.nearby);

    function priceLabel(level) {
        return "kr".repeat(level);
    }
</script>

<svelte:head>
    <title>{restaurant.name} — Stockholm Eats</title>
    <meta name="description" content={restaurant.shortInfo} />
</svelte:head>

<a class="back" href="{base}/">← Back to the guide</a>

<article>
    <header class="hero">
        <p class="eyebrow">{restaurant.cuisine} · {restaurant.neighborhood}</p>
        <h1>{restaurant.name}</h1>
        <div class="rating-row">
            <StarRating rating={restaurant.rating} size="lg" />
            <span
                class="price"
                title="Price level {restaurant.priceLevel} of 4"
            >
                {priceLabel(restaurant.priceLevel)}
            </span>
        </div>
        <p class="lede">{restaurant.shortInfo}</p>
    </header>

    <div class="layout">
        <div class="main-col">
            <section>
                <h2>About</h2>
                <p>{restaurant.description}</p>
            </section>

            <section>
                <h2>Signature dish</h2>
                <p class="dish">{restaurant.signatureDish}</p>
            </section>

            <section>
                <h2>Good to know</h2>
                <ul class="highlights">
                    {#each restaurant.highlights as highlight}
                        <li>{highlight}</li>
                    {/each}
                </ul>
            </section>
        </div>

        <aside class="facts">
            <h2>Details</h2>
            <dl>
                <dt>Cuisine</dt>
                <dd>{restaurant.cuisine}</dd>

                <dt>Neighbourhood</dt>
                <dd>{restaurant.neighborhood}</dd>

                <dt>Rating</dt>
                <dd>{restaurant.rating.toFixed(1)} / 5</dd>

                <dt>Price</dt>
                <dd>
                    {priceLabel(restaurant.priceLevel)} ({restaurant.priceLevel}
                    of 4)
                </dd>

                <dt>Address</dt>
                <dd>{restaurant.address}</dd>

                <dt>Phone</dt>
                <dd>
                    <a href="tel:{restaurant.phone.replace(/\s/g, '')}"
                        >{restaurant.phone}</a
                    >
                </dd>

                <dt>Website</dt>
                <dd>
                    <a
                        href={restaurant.website}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {restaurant.website.replace("https://", "")}
                    </a>
                </dd>

                <dt>Hours</dt>
                <dd>{restaurant.hours}</dd>
            </dl>
        </aside>
    </div>

    {#if nearby.length > 0}
        <section class="nearby">
            <h2>Also in {restaurant.neighborhood}</h2>
            <ul>
                {#each nearby as other (other.slug)}
                    <li>
                        <a href="{base}/restaurants/{other.slug}">
                            <strong>{other.name}</strong>
                            <span>{other.cuisine}</span>
                            <StarRating rating={other.rating} size="sm" />
                        </a>
                    </li>
                {/each}
            </ul>
        </section>
    {/if}
</article>

<style>
    .back {
        display: inline-block;
        margin-bottom: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #b4451f;
        text-decoration: none;
    }
    .back:hover {
        text-decoration: underline;
    }
    .hero {
        padding-bottom: 24px;
        border-bottom: 1px solid #ece6dd;
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
        font-size: clamp(30px, 5vw, 46px);
        line-height: 1.05;
        margin: 0 0 14px;
        letter-spacing: -0.02em;
    }
    .rating-row {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 14px;
    }
    .price {
        color: #b4451f;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.05em;
    }
    .lede {
        max-width: 62ch;
        color: #5c564e;
        line-height: 1.6;
        margin: 0;
        font-size: 17px;
    }
    .layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 300px;
        gap: 32px;
        align-items: start;
    }
    @media (max-width: 760px) {
        .layout {
            grid-template-columns: 1fr;
        }
    }
    section {
        margin-bottom: 28px;
    }
    h2 {
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #8a8378;
        margin: 0 0 10px;
    }
    .main-col p {
        line-height: 1.7;
        color: #3a352f;
        margin: 0;
    }
    .dish {
        font-size: 18px;
        font-weight: 600;
        color: #1f1d1a;
    }
    .highlights {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .highlights li {
        background: #fff;
        border: 1px solid #ece6dd;
        border-radius: 999px;
        padding: 7px 14px;
        font-size: 13px;
        color: #4a453e;
    }
    .facts {
        background: #fff;
        border: 1px solid #ece6dd;
        border-radius: 14px;
        padding: 20px;
        position: sticky;
        top: 90px;
    }
    .facts dl {
        margin: 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2px;
    }
    .facts dt {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #a29a8e;
        margin-top: 12px;
    }
    .facts dt:first-child {
        margin-top: 0;
    }
    .facts dd {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: #1f1d1a;
    }
    .facts a {
        color: #b4451f;
        text-decoration: none;
    }
    .facts a:hover {
        text-decoration: underline;
    }
    .nearby {
        margin-top: 40px;
        padding-top: 28px;
        border-top: 1px solid #ece6dd;
    }
    .nearby ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 12px;
    }
    .nearby a {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 16px;
        background: #fff;
        border: 1px solid #ece6dd;
        border-radius: 12px;
        text-decoration: none;
        transition:
            border-color 0.15s ease,
            box-shadow 0.15s ease;
    }
    .nearby a:hover {
        border-color: #d9cfc2;
        box-shadow: 0 8px 20px rgba(31, 29, 26, 0.07);
    }
    .nearby strong {
        font-size: 16px;
    }
    .nearby span {
        font-size: 13px;
        color: #7a736a;
    }
</style>
