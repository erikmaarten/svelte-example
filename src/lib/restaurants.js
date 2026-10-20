// Static restaurant guide data for Stockholm.
// Everything the guide needs lives in this one array — no database, no API.

export const restaurants = [
    {
        slug: 'frantzen',
        name: 'Frantzén',
        cuisine: 'Modern Nordic',
        neighborhood: 'Norrmalm',
        priceLevel: 4,
        rating: 4.9,
        shortInfo: 'Three-Michelin-star tasting menus with a Japanese-Nordic accent.',
        description:
            'Frantzén is the flagship of chef Björn Frantzén and one of the most decorated restaurants in Scandinavia. The evening unfolds across several floors of a discreet townhouse, moving from the lounge to the kitchen counter and finally the dining room. Expect precise, seasonal cooking that blends French technique with Japanese ingredients and Nordic produce.',
        address: 'Klara Norra Kyrkogata 26, 111 22 Stockholm',
        phone: '+46 8 20 85 80',
        website: 'https://restaurantfrantzen.com',
        hours: 'Tue–Sat 18:00–00:00 · Closed Sun–Mon',
        signatureDish: 'French toast with truffle and aged cheese',
        highlights: ['Three Michelin stars', 'Tasting menu only', 'Reservation months ahead']
    },
    {
        slug: 'ekstedt',
        name: 'Ekstedt',
        cuisine: 'Nordic Fire Cooking',
        neighborhood: 'Östermalm',
        priceLevel: 4,
        rating: 4.7,
        shortInfo: 'Everything cooked over open flame — no electricity in the kitchen.',
        description:
            'Niklas Ekstedt cooks exclusively with fire, smoke and cast iron. There is no electricity in the kitchen at all: the oven is a wood-fired hearth, and ingredients are grilled, smoked or baked over embers. The result is deeply savoury, rustic Nordic food served in a warm, dimly lit dining room.',
        address: 'Humlegårdsgatan 17, 114 46 Stockholm',
        phone: '+46 8 611 12 10',
        website: 'https://ekstedt.nu',
        hours: 'Tue–Sat 17:00–23:00 · Closed Sun–Mon',
        signatureDish: 'Wood-fired langoustine with smoked butter',
        highlights: ['Michelin star', 'Open-fire kitchen', 'Nordic tasting menu']
    },
    {
        slug: 'ops',
        name: 'Oaxen Slip',
        cuisine: 'Nordic Bistro',
        neighborhood: 'Djurgården',
        priceLevel: 3,
        rating: 4.5,
        shortInfo: 'Relaxed waterside bistro on Djurgården with a strong vegetable focus.',
        description:
            'Oaxen Slip is the casual sibling of the former two-star Oaxen Krog, set in a converted boat shed right on the water. The menu leans heavily on vegetables and seafood, with a long list of small plates designed for sharing. In summer the terrace over the water is one of the nicest spots in the city.',
        address: 'Beckholmsvägen 26, 115 21 Stockholm',
        phone: '+46 8 551 531 05',
        website: 'https://oaxen.com',
        hours: 'Wed–Sun 12:00–22:00 · Closed Mon–Tue',
        signatureDish: 'Charred cabbage with browned butter and hazelnut',
        highlights: ['Waterside terrace', 'Vegetable-forward', 'Sharing plates']
    },
    {
        slug: 'gastrologik',
        name: 'Gastrologik',
        cuisine: 'New Nordic',
        neighborhood: 'Östermalm',
        priceLevel: 4,
        rating: 4.6,
        shortInfo: 'Quiet, ingredient-obsessed tasting menu near Stureplan.',
        description:
            'Gastrologik is a small, understated dining room where the kitchen works almost exclusively with Swedish producers. The tasting menu changes constantly and is built around whatever is at its peak that week. Service is warm and unhurried, and the wine list favours small growers.',
        address: 'Artillerigatan 14, 114 51 Stockholm',
        phone: '+46 8 662 30 60',
        website: 'https://gastrologik.se',
        hours: 'Tue–Sat 18:00–23:00 · Closed Sun–Mon',
        signatureDish: 'Celeriac baked in salt with aged cheese',
        highlights: ['Michelin star', 'Swedish producers', 'Small dining room']
    },
    {
        slug: 'den-gyllene-freden',
        name: 'Den Gyllene Freden',
        cuisine: 'Swedish Classics',
        neighborhood: 'Gamla Stan',
        priceLevel: 3,
        rating: 4.2,
        shortInfo: 'Historic Old Town cellar serving traditional Swedish husmanskost.',
        description:
            'One of the oldest restaurant rooms in Stockholm, tucked into a vaulted cellar in Gamla Stan. The menu is unapologetically traditional: meatballs, herring, salmon and reindeer. It is a good place to take visitors who want a single, atmospheric dose of classic Swedish cooking.',
        address: 'Österlånggatan 51, 111 31 Stockholm',
        phone: '+46 8 10 30 20',
        website: 'https://gyllenefreden.se',
        hours: 'Mon–Sat 16:00–23:00 · Closed Sun',
        signatureDish: 'Swedish meatballs with cream sauce and lingonberry',
        highlights: ['Historic cellar', 'Traditional husmanskost', 'Old Town location']
    },
    {
        slug: 'pelikan',
        name: 'Pelikan',
        cuisine: 'Swedish Beer Hall',
        neighborhood: 'Södermalm',
        priceLevel: 2,
        rating: 4.4,
        shortInfo: 'Beloved old beer hall on Blekingegatan with classic Swedish plates.',
        description:
            'Pelikan has been pouring beer on the same corner since 1904, and the art nouveau room has barely changed. The kitchen serves generous portions of traditional Swedish food alongside a long list of Swedish and Belgian beers. It is loud, warm and reliably good.',
        address: 'Blekingegatan 40, 118 48 Stockholm',
        phone: '+46 8 556 090 90',
        website: 'https://pelikan.se',
        hours: 'Mon–Sun 16:00–00:00',
        signatureDish: 'Roast pork with brown cabbage and apple sauce',
        highlights: ['Since 1904', 'Art nouveau interior', 'Extensive beer list']
    },
    {
        slug: 'woodstockholm',
        name: 'Woodstockholm',
        cuisine: 'Nordic Small Plates',
        neighborhood: 'Södermalm',
        priceLevel: 3,
        rating: 4.3,
        shortInfo: 'Tiny Mosebacke dining room with a daily-changing seasonal menu.',
        description:
            'Woodstockholm is a small, friendly restaurant on Mosebacke torg that writes a new menu every day based on what the kitchen has sourced. Dishes are simple and confident, and the room fills up quickly, so booking is essential. The natural wine list is a highlight.',
        address: 'Mosebacke Torg 9, 116 46 Stockholm',
        phone: '+46 8 702 05 80',
        website: 'https://woodstockholm.com',
        hours: 'Tue–Sat 17:00–23:00 · Closed Sun–Mon',
        signatureDish: 'Daily fish with seasonal vegetables',
        highlights: ['Daily menu', 'Natural wine', 'Intimate room']
    },
    {
        slug: 'punk-royal',
        name: 'Punk Royale',
        cuisine: 'Playful Tasting Menu',
        neighborhood: 'Södermalm',
        priceLevel: 3,
        rating: 4.1,
        shortInfo: 'Chaotic, theatrical tasting menu where the party is part of the meal.',
        description:
            'Punk Royale is less a restaurant than a performance. Guests are handed a glass of champagne on arrival and the evening escalates from there, with a set menu served amid music, costumes and general mayhem. It is not for a quiet dinner, but it is unforgettable.',
        address: 'Bondegatan 64, 116 33 Stockholm',
        phone: '+46 8 640 40 60',
        website: 'https://punkroyale.se',
        hours: 'Wed–Sat 18:00–01:00 · Closed Sun–Tue',
        signatureDish: 'Surprise set menu with caviar and champagne',
        highlights: ['Theatrical experience', 'Set menu only', 'Loud and lively']
    },
    {
        slug: 'babette',
        name: 'Babette',
        cuisine: 'Neapolitan Pizza',
        neighborhood: 'Norrmalm',
        priceLevel: 2,
        rating: 4.5,
        shortInfo: 'Sourdough Neapolitan pizza and natural wine in a busy city-centre room.',
        description:
            'Babette brought serious sourdough pizza to central Stockholm and has been packed ever since. The dough is fermented for days, the toppings are minimal and the wine list is full of interesting small producers. No reservations, so expect a short wait at peak times.',
        address: 'Roslagsgatan 6, 113 55 Stockholm',
        phone: '+46 8 15 15 20',
        website: 'https://babette.se',
        hours: 'Mon–Sun 11:30–23:00',
        signatureDish: 'Margherita with buffalo mozzarella',
        highlights: ['Sourdough crust', 'No reservations', 'Natural wine']
    },
    {
        slug: '800-grader',
        name: '800° Grader',
        cuisine: 'Wood-Fired Pizza',
        neighborhood: 'Södermalm',
        priceLevel: 2,
        rating: 4.2,
        shortInfo: 'Fast, reliable wood-fired pizza on Götgatan.',
        description:
            'A neighbourhood pizzeria that bakes at 800 degrees, which means a blistered crust and a very short wait. The menu sticks to the classics with a few Swedish twists, and the room is bright and casual. Good for a quick, inexpensive meal in the middle of Södermalm.',
        address: 'Götgatan 72, 118 30 Stockholm',
        phone: '+46 8 642 80 80',
        website: 'https://800grader.se',
        hours: 'Mon–Sun 11:00–22:00',
        signatureDish: 'Diavola with spicy salami',
        highlights: ['Very fast service', 'Casual', 'Family friendly']
    },
    {
        slug: 'kajsas-fisk',
        name: "Kajsas Fisk",
        cuisine: 'Fish & Seafood',
        neighborhood: 'Norrmalm',
        priceLevel: 1,
        rating: 4.4,
        shortInfo: 'Cult fish counter in Hötorgshallen famous for its free fish soup.',
        description:
            'Kajsas Fisk is a counter inside the Hötorgshallen food hall, and it has been feeding Stockholm cheap, excellent seafood for decades. Every meal starts with a bowl of the famous fish soup, refilled for free. Expect a queue at lunch and shared tables.',
        address: 'Hötorgshallen 3, 111 57 Stockholm',
        phone: '+46 8 21 51 09',
        website: 'https://kajsasfisk.se',
        hours: 'Mon–Fri 11:00–18:00 · Sat 11:00–16:00 · Closed Sun',
        signatureDish: 'Fish soup with aioli and bread',
        highlights: ['Free soup refills', 'Food hall counter', 'Great value']
    },
    {
        slug: 'hermans',
        name: "Hermans",
        cuisine: 'Vegetarian Buffet',
        neighborhood: 'Södermalm',
        priceLevel: 2,
        rating: 4.3,
        shortInfo: 'Vegetarian buffet with a huge terrace and views over Stockholm.',
        description:
            'Hermans is a long-running vegetarian buffet near Slussen with one of the best views in the city from its garden terrace. The spread is generous and changes daily, with plenty of vegan options. It is relaxed, communal and good value for the location.',
        address: 'Fjällgatan 23B, 116 30 Stockholm',
        phone: '+46 8 643 94 80',
        website: 'https://hermans.se',
        hours: 'Mon–Sun 11:00–21:00',
        signatureDish: 'Daily vegetarian buffet with vegan desserts',
        highlights: ['Vegetarian and vegan', 'Panoramic terrace', 'Buffet format']
    },
    {
        slug: 'ling-ling',
        name: 'Ling Long',
        cuisine: 'Asian Fusion',
        neighborhood: 'Södermalm',
        priceLevel: 2,
        rating: 4.0,
        shortInfo: 'Colourful pan-Asian small plates and cocktails on Hornsgatan.',
        description:
            'Ling Long serves a broad pan-Asian menu of small plates meant for sharing, from dumplings and bao to curries and noodles. The room is bright and playful, and the cocktail list is taken seriously. A good option for groups.',
        address: 'Hornsgatan 46, 118 21 Stockholm',
        phone: '+46 8 668 20 30',
        website: 'https://linglong.se',
        hours: 'Mon–Sun 17:00–23:00',
        signatureDish: 'Steamed bao with crispy pork',
        highlights: ['Sharing plates', 'Cocktail bar', 'Group friendly']
    },
    {
        slug: 'sushi-sho',
        name: 'Sushi Sho',
        cuisine: 'Omakase Sushi',
        neighborhood: 'Vasastan',
        priceLevel: 4,
        rating: 4.8,
        shortInfo: 'Intimate omakase counter with some of the best sushi in Scandinavia.',
        description:
            'Sushi Sho is a tiny counter in Vasastan where chef Carl Ishizaki serves an omakase menu of around twenty pieces. The fish is flown in from Japan and treated with great care, and the rice is seasoned to match each topping. Seats are extremely limited.',
        address: 'Upplandsgatan 45, 113 28 Stockholm',
        phone: '+46 8 31 20 20',
        website: 'https://sushisho.se',
        hours: 'Tue–Sat 18:00–22:00 · Closed Sun–Mon',
        signatureDish: 'Omakase nigiri selection',
        highlights: ['Michelin star', 'Counter seating only', 'Book far ahead']
    },
    {
        slug: 'agrikultur',
        name: 'Agrikultur',
        cuisine: 'Nordic Farm-to-Table',
        neighborhood: 'Vasastan',
        priceLevel: 3,
        rating: 4.4,
        shortInfo: 'Small Vasastan bistro cooking directly from Swedish farms.',
        description:
            'Agrikultur works with a handful of small farms and builds its menu around what they deliver. The cooking is straightforward and seasonal, and the room is small enough that the kitchen feels part of the dining experience. The bread is worth the visit alone.',
        address: 'Roslagsgatan 43, 113 54 Stockholm',
        phone: '+46 8 15 20 95',
        website: 'https://agrikultur.se',
        hours: 'Tue–Sat 17:00–23:00 · Closed Sun–Mon',
        signatureDish: 'Sourdough bread with house butter',
        highlights: ['Farm-sourced', 'Michelin star', 'Cosy bistro']
    },
    {
        slug: 'sturehof',
        name: 'Sturehof',
        cuisine: 'Seafood Brasserie',
        neighborhood: 'Östermalm',
        priceLevel: 3,
        rating: 4.3,
        shortInfo: 'Grand old seafood brasserie at Stureplan, open since 1897.',
        description:
            'Sturehof is a Stockholm institution: a large, bustling brasserie with a long marble bar and a serious seafood counter. The menu covers oysters, shellfish, fish and classic Swedish dishes, and the room is always lively. Good for a long lunch or a late dinner.',
        address: 'Stureplan 2, 114 35 Stockholm',
        phone: '+46 8 440 57 30',
        website: 'https://sturehof.com',
        hours: 'Mon–Sat 11:30–00:00 · Sun 12:00–22:00',
        signatureDish: 'Seafood platter with oysters and langoustine',
        highlights: ['Since 1897', 'Seafood counter', 'Late kitchen']
    },
    {
        slug: 'prinsen',
        name: 'Prinsen',
        cuisine: 'Classic Brasserie',
        neighborhood: 'Östermalm',
        priceLevel: 3,
        rating: 4.2,
        shortInfo: 'Elegant classic brasserie with a famous bar and Swedish-French menu.',
        description:
            'Prinsen has been a fixture on Nybrogatan since 1897 and remains a favourite of the city establishment. The menu is Swedish-French, the service is formal but friendly, and the bar is a destination in its own right. The walls are covered with signed photographs of regulars.',
        address: 'Nybrogatan 9, 114 34 Stockholm',
        phone: '+46 8 663 12 31',
        website: 'https://prinsen.se',
        hours: 'Mon–Fri 11:30–23:00 · Sat 12:00–23:00 · Closed Sun',
        signatureDish: 'Biff Rydberg with mustard cream',
        highlights: ['Historic brasserie', 'Famous bar', 'Classic Swedish-French']
    },
    {
        slug: 'mancini',
        name: 'Mancini',
        cuisine: 'Italian',
        neighborhood: 'Gamla Stan',
        priceLevel: 3,
        rating: 4.1,
        shortInfo: 'Family-run Italian trattoria in Old Town, open since 1983.',
        description:
            'Mancini is a warm, family-run Italian restaurant on a quiet Old Town street. The pasta is made in house, the pizza comes from a wood oven, and the wine list is entirely Italian. It is a reliable, unpretentious choice in a very touristy part of town.',
        address: 'Österlånggatan 19, 111 31 Stockholm',
        phone: '+46 8 20 50 50',
        website: 'https://mancini.se',
        hours: 'Mon–Sun 12:00–23:00',
        signatureDish: 'Tagliatelle with truffle and parmesan',
        highlights: ['Family run', 'House-made pasta', 'Old Town']
    },
    {
        slug: 'farang',
        name: 'Farang',
        cuisine: 'Southeast Asian',
        neighborhood: 'Vasastan',
        priceLevel: 3,
        rating: 4.4,
        shortInfo: 'Stylish Southeast Asian sharing menu with bold, spicy flavours.',
        description:
            'Farang serves a modern take on Southeast Asian cooking, with a menu built for sharing and a kitchen that is not afraid of heat. The room is sleek and often full, and the bar makes excellent cocktails. One of the best options in the city for a group dinner.',
        address: 'Tulegatan 7, 113 53 Stockholm',
        phone: '+46 8 673 74 00',
        website: 'https://farang.se',
        hours: 'Mon–Sat 17:00–23:00 · Closed Sun',
        signatureDish: 'Grilled beef with chili and Thai basil',
        highlights: ['Sharing menu', 'Spicy cooking', 'Great cocktails']
    },
    {
        slug: 'saluhall',
        name: 'Östermalms Saluhall',
        cuisine: 'Food Hall',
        neighborhood: 'Östermalm',
        priceLevel: 2,
        rating: 4.5,
        shortInfo: 'Historic market hall with counters for seafood, cheese and lunch.',
        description:
            'Östermalms Saluhall is a beautifully restored 1888 market hall packed with butchers, fishmongers, cheese counters and small lunch spots. It is the best single place in Stockholm to graze: pick up a shrimp sandwich, some cheese and a coffee and eat at one of the shared tables.',
        address: 'Östermalmstorg, 114 42 Stockholm',
        phone: '+46 8 553 404 00',
        website: 'https://ostermalmshallen.se',
        hours: 'Mon–Fri 10:00–18:00 · Sat 10:00–16:00 · Closed Sun',
        signatureDish: 'Shrimp sandwich with dill and lemon',
        highlights: ['Historic market hall', 'Many counters', 'Great for grazing']
    }
];

// Look up a single restaurant by its URL slug.
export function getRestaurant(slug) {
    return restaurants.find((restaurant) => restaurant.slug === slug);
}
