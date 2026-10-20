<script>
    import { page } from "$app/state";
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>{page.status} — Stockholm Eats</title>
</svelte:head>

<div class="error">
    <p class="code">{page.status}</p>
    <h1>
        {page.status === 404
            ? "We could not find that page"
            : "Something went wrong"}
    </h1>
    <p class="message">
        {page.error?.message ?? "An unexpected error occurred."}
    </p>
    <a class="button" href="{base}/">Back to the guide</a>
</div>

<style>
    .error {
        text-align: center;
        padding: 60px 0;
    }
    .code {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: #b4451f;
        margin: 0 0 10px;
    }
    h1 {
        font-size: clamp(24px, 4vw, 34px);
        letter-spacing: -0.02em;
        margin: 0 0 12px;
    }
    .message {
        color: #7a736a;
        margin: 0 0 26px;
    }
    .button {
        display: inline-block;
        padding: 11px 22px;
        border-radius: 999px;
        background: #1f1d1a;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
    }
    .button:hover {
        background: #b4451f;
    }
</style>
