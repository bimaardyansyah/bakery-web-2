<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $products = [
            [
                'id'          => 1,
                'name'        => 'Classic Butter Croissant',
                'category'    => 'Pastry',
                'description' => 'Eighty layers of pure French butter dough, hand-folded each morning for a perfectly flaky, golden finish.',
                'price'       => '4.50',
                'rating'      => 5,
                'badge'       => 'Bestseller',
                'image'       => '/images/croissant.jpg',
            ],
            [
                'id'          => 2,
                'name'        => 'Country Sourdough',
                'category'    => 'Bread',
                'description' => 'Slow-fermented for 36 hours with our heirloom 1987 starter. Bold crust, open crumb, deeply satisfying.',
                'price'       => '9.00',
                'rating'      => 5,
                'badge'       => 'Signature',
                'image'       => '/images/sourdough.jpg',
            ],
            [
                'id'          => 3,
                'name'        => 'Lavender Honey Cake',
                'category'    => 'Cake',
                'description' => 'Three layers of almond sponge with lavender buttercream, drizzled with local wildflower honey.',
                'price'       => '34.00',
                'rating'      => 5,
                'badge'       => 'New',
                'image'       => '/images/cake.jpg',
            ],
            [
                'id'          => 4,
                'name'        => 'Rose & Vanilla Macarons',
                'category'    => 'Patisserie',
                'description' => 'Delicate Parisian macarons in rose, vanilla, and raspberry. Gift-boxed in sets of six.',
                'price'       => '18.00',
                'rating'      => 5,
                'badge'       => null,
                'image'       => '/images/macaron.jpg',
            ],
            [
                'id'          => 5,
                'name'        => 'Summer Berry Tart',
                'category'    => 'Tart',
                'description' => 'Buttery shortcrust filled with vanilla pastry cream, topped with fresh seasonal berries.',
                'price'       => '22.00',
                'rating'      => 4,
                'badge'       => 'Seasonal',
                'image'       => '/images/tart.jpg',
            ],
            [
                'id'          => 6,
                'name'        => 'Cardamom Cinnamon Rolls',
                'category'    => 'Pastry',
                'description' => 'Soft, pillowy rolls swirled with brown sugar, cardamom, and cinnamon. Topped with cream cheese frosting.',
                'price'       => '12.00',
                'rating'      => 5,
                'badge'       => null,
                'image'       => '/images/cinnamon-roll.jpg',
            ],
        ];

        $testimonials = [
            [
                'id'       => 1,
                'name'     => 'Sophie Laurent',
                'location' => 'Lyon, France',
                'rating'   => 5,
                'text'     => 'The sourdough is extraordinary — that open crumb, that crackling crust. It reminds me of my grandmother\'s kitchen in Burgundy. I order every Saturday without fail.',
            ],
            [
                'id'       => 2,
                'name'     => 'James Whitmore',
                'location' => 'London, UK',
                'rating'   => 5,
                'text'     => 'I came for the croissants and stayed for everything else. The butter quality is exceptional, and you can genuinely taste the care that goes into every layer.',
            ],
            [
                'id'       => 3,
                'name'     => 'Aiko Tanaka',
                'location' => 'Tokyo, Japan',
                'rating'   => 5,
                'text'     => 'We ordered the lavender honey cake for our wedding and it was breathtaking in every way — beautiful, fragrant, and the most delicious thing I have ever eaten.',
            ],
        ];

        return Inertia::render('Home', [
            'products'     => $products,
            'testimonials' => $testimonials,
        ]);
    }
}
