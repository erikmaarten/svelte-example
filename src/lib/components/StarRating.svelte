<script>
    // Renders a 5-star rating with half-star precision.
    let { rating = 0, showValue = true, size = "md" } = $props();

    const stars = [1, 2, 3, 4, 5];

    // 'full', 'half' or 'empty' for each of the five stars.
    function fillFor(star) {
        if (rating >= star) return "full";
        if (rating >= star - 0.5) return "half";
        return "empty";
    }
</script>

<div class="rating {size}" aria-label="Rated {rating} out of 5">
    <span class="stars" aria-hidden="true">
        {#each stars as star}
            <span class="star {fillFor(star)}">★</span>
        {/each}
    </span>
    {#if showValue}
        <span class="value">{rating.toFixed(1)}</span>
    {/if}
</div>

<style>
    .rating {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: Inter, Arial, sans-serif;
    }
    .stars {
        display: inline-flex;
        gap: 1px;
        line-height: 1;
    }
    .star {
        color: #d8d8d8;
    }
    .star.full {
        color: #f2a33c;
    }
    .star.half {
        background: linear-gradient(90deg, #f2a33c 50%, #d8d8d8 50%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .value {
        font-size: 0.85em;
        font-weight: 600;
        color: #6b6b6b;
    }
    .sm {
        font-size: 13px;
    }
    .md {
        font-size: 16px;
    }
    .lg {
        font-size: 22px;
    }
</style>
