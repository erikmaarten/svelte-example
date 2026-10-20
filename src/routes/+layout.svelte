<script>
    import { page } from "$app/state";
    import { base } from "$app/paths";

    let { children } = $props();
</script>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
    <a class="brand" href="{base}/">
        <span class="brand-mark">S</span>
        <span class="brand-text">
            <strong>Stockholm Eats</strong>
            <small>A guide to 20 restaurants in the city</small>
        </span>
    </a>
    <nav>
        <a href="{base}/" class:active={page.url.pathname === `${base}/`}>Guide</a>
        <a href="{base}/about" class:active={page.url.pathname === `${base}/about`}>About</a>
    </nav>
</header>

<main id="main">
    {@render children()}
</main>

<footer class="site-footer">
    <p>
        Stockholm Eats — a static restaurant guide. Ratings are editorial
        opinions.
    </p>
</footer>

<style>
    :global(*) {
        box-sizing: border-box;
    }
    :global(body) {
        margin: 0;
        background-color: #faf7f2;
        color: #1f1d1a;
        font-family: Inter, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
    :global(a) {
        color: inherit;
    }
    .skip-link {
        position: absolute;
        left: -9999px;
        top: 0;
        background: #1f1d1a;
        color: #fff;
        padding: 10px 16px;
        z-index: 100;
    }
    .skip-link:focus {
        left: 0;
    }
    .site-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        padding: 18px 24px;
        background: #ffffff;
        border-bottom: 1px solid #ece6dd;
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .brand {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
    }
    .brand-mark {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: #b4451f;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
    }
    .brand-text {
        display: flex;
        flex-direction: column;
        line-height: 1.25;
    }
    .brand-text strong {
        font-size: 17px;
    }
    .brand-text small {
        color: #7a736a;
        font-size: 12px;
    }
    nav {
        display: flex;
        gap: 6px;
    }
    nav a {
        text-decoration: none;
        padding: 8px 14px;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 500;
        color: #4a453e;
    }
    nav a:hover {
        background: #f4efe7;
    }
    nav a.active {
        background: #1f1d1a;
        color: #fff;
    }
    main {
        max-width: 1080px;
        margin: 0 auto;
        padding: 32px 24px 64px;
    }
    .site-footer {
        border-top: 1px solid #ece6dd;
        padding: 24px;
        text-align: center;
        color: #8a8378;
        font-size: 13px;
    }
    .site-footer p {
        margin: 0;
    }
</style>
