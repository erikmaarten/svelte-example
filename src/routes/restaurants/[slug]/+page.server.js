import { error } from '@sveltejs/kit';
import { getRestaurant, restaurants } from '$lib/restaurants.js';

export function load({ params }) {
    const restaurant = getRestaurant(params.slug);

    if (!restaurant) {
        error(404, `No restaurant found for "${params.slug}"`);
    }

    // Suggest a few other places in the same neighbourhood.
    const nearby = restaurants
        .filter((r) => r.slug !== restaurant.slug && r.neighborhood === restaurant.neighborhood)
        .slice(0, 3);

    return { restaurant, nearby };
}
