// Full Product Data with 5-8 items per category
export const productData = [
    // Womenswear
    { id: 1, imgURL: "/images/w01.jpg", title: "Gown", description: "Elegant full-length dress", category: "Womenswear" },
    { id: 2, imgURL: "/images/w02.jpg", title: "Casual Dress", description: "Comfortable daily wear", category: "Womenswear" },
    { id: 3, imgURL: "/images/w03.jpg", title: "Evening Dress", description: "Perfect for special occasions", category: "Womenswear" },
    { id: 4, imgURL: "/images/w04.jpg", title: "Floral Skirt", description: "Lightweight and stylish", category: "Womenswear" },
    { id: 5, imgURL: "/images/w05.jpg", title: "Blouse", description: "Chic and versatile", category: "Womenswear" },

    // Menswear
    { id: 6, imgURL: "/images/m01.jpg", title: "Formal Suit", description: "Professional and sharp", category: "Menswear" },
    { id: 7, imgURL: "/images/m02.jpg", title: "Casual Shirt", description: "Breathable cotton fabric", category: "Menswear" },
    { id: 8, imgURL: "/images/m03.jpg", title: "Denim Jacket", description: "Rugged and stylish", category: "Menswear" },
    { id: 9, imgURL: "/images/m04.jpg", title: "Chinos", description: "Perfect for business casual", category: "Menswear" },
    { id: 10, imgURL: "/images/m05.jpg", title: "Fur Coat", description: "A Classical dress", category: "Menswear" },

    // Kidswear
    { id: 11, imgURL: "/images/k01.jpg", title: "T-Shirt", description: "Fun and colorful", category: "Kidswear" },
    { id: 12, imgURL: "/images/k02.jpg", title: "Denim Shorts", description: "Comfortable and trendy", category: "Kidswear" },
    { id: 13, imgURL: "/images/k03.jpg", title: "Sweatshirt", description: "Warm and cozy", category: "Kidswear" },
    { id: 14, imgURL: "/images/k04.jpg", title: "Kids Dress", description: "Bright and playful", category: "Kidswear" },

    // Knitwear
    { id: 15, imgURL: "/images/product04.jpg", title: "Wool Sweater", description: "Soft and warm", category: "Knitwear" },
    { id: 16, imgURL: "/images/kn02.jpg", title: "Cardigan", description: "Classic knit style", category: "Knitwear" },
    { id: 17, imgURL: "/images/kn03.jpg", title: "Oversized Sweater", description: "Trendy and relaxed", category: "Knitwear" },

    // Denim
    { id: 18, imgURL: "/images/d01.jpg", title: "Denim Jeans", description: "Classic blue jeans with a comfortable fit", category: "Denim" },
    { id: 19, imgURL: "/images/d02.jpg", title: "Denim Jacket", description: "Vintage wash design with a rugged look", category: "Denim" },
    { id: 20, imgURL: "/images/d03.jpg", title: "Ripped Jeans", description: "Trendy distressed jeans for a casual vibe", category: "Denim" },
    { id: 21, imgURL: "/images/d04.jpg", title: "Denim Shorts", description: "Lightweight and breathable summer wear", category: "Denim" },
    { id: 22, imgURL: "/images/d05.jpg", title: "A-Line Denim Skirt", description: "Elegant A-line design with a modern touch", category: "Denim" },
    { id: 23, imgURL: "/images/d06.jpg", title: "High-Waisted Denim Skirt", description: "Chic high-rise style with a flattering fit", category: "Denim" },
    { id: 24, imgURL: "/images/d07.jpg", title: "Button-Front Denim Skirt", description: "Stylish buttoned front for a trendy look", category: "Denim" },
    { id: 25, imgURL: "/images/d08.jpg", title: "Distressed Denim Skirt", description: "Edgy distressed details for a bold style", category: "Denim" },

    // Activewear
    { id: 26, imgURL: "/images/a01.jpg", title: "Sports Leggings", description: "Stretchy and breathable", category: "Activewear" },
    { id: 27, imgURL: "/images/a02.jpg", title: "Tank Top", description: "Lightweight and sweat-proof", category: "Activewear" },
    { id: 28, imgURL: "/images/a03.jpg", title: "Gym Shorts", description: "Comfortable and flexible", category: "Activewear" },
    { id: 29, imgURL: "/images/a04.jpg", title: "Hoodie", description: "Warm post-workout layer", category: "Activewear" },

    // Outerwear
    { id: 30, imgURL: "/images/o01.jpg", title: "Winter Coat", description: "Thick and insulated for ultimate warmth", category: "Outerwear" },
    { id: 31, imgURL: "/images/o01.jpg", title: "Puffer Jacket", description: "Lightweight yet warm for extreme cold", category: "Outerwear" },
    { id: 32, imgURL: "/images/o01.jpg", title: "Trench Coat", description: "Elegant long coat with a tailored fit", category: "Outerwear" },
    { id: 33, imgURL: "/images/o01.jpg", title: "Windbreaker", description: "Water-resistant and lightweight for active wear", category: "Outerwear" },
    { id: 34, imgURL: "/images/o01.jpg", title: "Leather Biker Jacket", description: "Classic biker style with durable leather", category: "Outerwear" },
    { id: 35, imgURL: "/images/o01.jpg", title: "Suede Leather Jacket", description: "Soft suede texture with a premium finish", category: "Outerwear" },
    { id: 36, imgURL: "/images/o01.jpg", title: "Faux Leather Jacket", description: "Sleek and stylish cruelty-free alternative", category: "Outerwear" },

    // Footwear
    { id: 37, imgURL: "/images/f01.jpg", title: "Sneakers", description: "Casual everyday wear", category: "Footwear" },
    { id: 38, imgURL: "/images/f02.jpg", title: "Leather Boots", description: "Durable and stylish", category: "Footwear" },
    { id: 39, imgURL: "/images/f03.jpg", title: "Sandals", description: "Comfortable summer wear", category: "Footwear" },
    { id: 40, imgURL: "/images/f04.jpg", title: "Running Shoes", description: "Great for workouts", category: "Footwear" },
];

export const fetchProductsByCategory = (category) =>
    productData.filter(product => product.category === category);