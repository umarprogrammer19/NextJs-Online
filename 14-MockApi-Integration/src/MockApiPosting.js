const products = [
    {
        "product_name": "Classic T-Shirt",
        "product_description": "A high-quality cotton t-shirt for casual wear.",
        "product_price": 15.99,
        "product_sizes": ["S", "M", "L", "XL"],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/85cbc79bd004d1e99c3fb34df1e2f71f.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.5,
        "product_stock_quantity": 120,
        "product_category": "Clothing"
    },
    {
        "product_name": "Graphic Hoodie",
        "product_description": "Comfortable hoodie with a trendy design.",
        "product_price": 29.99,
        "product_sizes": ["M", "L", "XL"],
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1UEnxeTooT7tscJDTcxj6bEN1GJ97r2UMQ&s",
        "product_rating": 4.6,
        "product_stock_quantity": 80,
        "product_category": "Clothing"
    },
    {
        "product_name": "Running Shoes",
        "product_description": "Durable running shoes for everyday training.",
        "product_price": 69.99,
        "product_sizes": ["8", "9", "10", "11", "12"],
        "product_image": "https://img.drz.lazcdn.com/g/kf/Se4efa6de01214a239458b4f7373b6d06X.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.8,
        "product_stock_quantity": 50,
        "product_category": "Clothing"
    },
    {
        "product_name": "Wireless Earbuds",
        "product_description": "Compact earbuds with superior sound quality.",
        "product_price": 49.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/73945382dcb18c51e51acf13359c2fdc.png_960x960q80.png_.webp",
        "product_rating": 4.7,
        "product_stock_quantity": 60,
        "product_category": "Electronics"
    },
    {
        "product_name": "Bluetooth Speaker",
        "product_description": "Portable speaker with rich bass and long battery life.",
        "product_price": 59.99,
        "product_sizes": [],
        "product_image": "https://cubeonline.pk/cdn/shop/files/1ffec29fc73e17224467237a4a1e52e2_960x.jpg?v=1696224493",
        "product_rating": 4.7,
        "product_stock_quantity": 40,
        "product_category": "Electronics"
    },
    {
        "product_name": "Noise-Cancelling Headphones",
        "product_description": "Block out the noise with crystal-clear audio.",
        "product_price": 149.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/4aae25d6bcdeffa645f1f297d31ebb50.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.8,
        "product_stock_quantity": 30,
        "product_category": "Electronics"
    },
    {
        "product_name": "Leather Wallet",
        "product_description": "Compact and stylish wallet made from genuine leather.",
        "product_price": 25.99,
        "product_sizes": [],
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XMcpFVoZOWWFCN4FYu2go4cs-TwqtsNQdg&s",
        "product_rating": 4.3,
        "product_stock_quantity": 100,
        "product_category": "Accessories"
    },
    {
        "product_name": "Sunglasses",
        "product_description": "Protect your eyes in style with UV-protective sunglasses.",
        "product_price": 19.99,
        "product_sizes": [],
        "product_image": "https://usuvu.com/cdn/shop/products/Blown-SilverBlackSmokeSide_1200x.jpg?v=1652170252",
        "product_rating": 4.4,
        "product_stock_quantity": 90,
        "product_category": "Accessories"
    },
    {
        "product_name": "Beanie Hat",
        "product_description": "Stay warm with this stylish beanie.",
        "product_price": 12.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/20d2858b8b127e6240c955d18d90e093.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.3,
        "product_stock_quantity": 70,
        "product_category": "Accessories"
    },
    {
        "product_name": "Yoga Mat",
        "product_description": "Non-slip yoga mat for a comfortable workout experience.",
        "product_price": 29.99,
        "product_sizes": [],
        "product_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK_08w5bjNyiGmHR8y1l3o7K_3cM-a9yQfw&s",
        "product_rating": 4.4,
        "product_stock_quantity": 40,
        "product_category": "Lifestyle"
    },
    {
        "product_name": "Insulated Water Bottle",
        "product_description": "Keep drinks hot or cold with this stainless steel water bottle.",
        "product_price": 19.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/9379c13614bca7ceb0c5af67c76957dc.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.2,
        "product_stock_quantity": 150,
        "product_category": "Lifestyle"
    },
    {
        "product_name": "Travel Backpack",
        "product_description": "Durable and spacious backpack for travel and daily use.",
        "product_price": 39.99,
        "product_sizes": [],
        "product_image": "https://cdn.shopify.com/s/files/1/2986/1172/files/PLP-Thumb-Travel-backpack_9349f0b8-9f65-45eb-9dd9-e9a24f14f565.jpg?v=1726156514",
        "product_rating": 4.5,
        "product_stock_quantity": 60,
        "product_category": "Lifestyle"
    },
    {
        "product_name": "Wireless Charger",
        "product_description": "Effortlessly charge your devices with this fast wireless charger.",
        "product_price": 29.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/a65801a37f27d1d59154ab41832e339d.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.6,
        "product_stock_quantity": 50,
        "product_category": "Electronics"
    },
    {
        "product_name": "Gaming Mouse",
        "product_description": "Ergonomic gaming mouse with customizable RGB lighting.",
        "product_price": 29.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/e8378e6297944ecb0095fba1182e50b2.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.8,
        "product_stock_quantity": 45,
        "product_category": "Electronics"
    },
    {
        "product_name": "Desk Lamp",
        "product_description": "Modern LED desk lamp with adjustable brightness levels.",
        "product_price": 22.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/collect/my/p/1199648d625cf50f77ce8129f9d8e5e3.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.6,
        "product_stock_quantity": 40,
        "product_category": "Lifestyle"
    },
    {
        "product_name": "Running Shorts",
        "product_description": "Breathable and comfortable shorts for active wear.",
        "product_price": 14.99,
        "product_sizes": ["S", "M", "L", "XL"],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/f4e80b4e0674ba3f790ac28978cfffb7.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.4,
        "product_stock_quantity": 100,
        "product_category": "Clothing"
    },
    {
        "product_name": "Smartwatch",
        "product_description": "Track your fitness and stay connected with this stylish smartwatch.",
        "product_price": 199.99,
        "product_sizes": [],
        "product_image": "https://image.made-in-china.com/2f0j00UWQqtgyMVakH/2024-N9-Ultra-PRO-49mm-Smart-Watch-2-1-Inch-Screen-Compass-NFC-Smartwatch-Men-Women-Sportwatch-for-Android-Ios-Pk-HK8-PRO-Max.webp",
        "product_rating": 4.6,
        "product_stock_quantity": 20,
        "product_category": "Electronics"
    },
    {
        "product_name": "Electric Kettle",
        "product_description": "Quick-boil electric kettle with auto shut-off functionality.",
        "product_price": 39.99,
        "product_sizes": [],
        "product_image": "https://img.drz.lazcdn.com/static/pk/p/5d12bd12c3c8b33cd88a01d21f497815.jpg_960x960q80.jpg_.webp",
        "product_rating": 4.7,
        "product_stock_quantity": 35,
        "product_category": "Lifestyle"
    },
    {
        "product_name": "Leather Boots",
        "product_description": "Stylish and durable boots for any weather.",
        "product_price": 89.99,
        "product_sizes": ["8", "9", "10", "11", "12"],
        "product_image": "https://dainese-cdn.thron.com/delivery/public/image/dainese/69c53866-5902-4576-8928-579509acf39b/px6qct/std/960x960/201795243_004_1.jpeg?format=webp&quality=auto-medium",
        "product_rating": 4.7,
        "product_stock_quantity": 30,
        "product_category": "Clothing"
    }
]; // Product ka array 

const postDataIntoApi = async () => {
    try {
        for (const {
            product_name,
            product_description,
            product_price,
            product_sizes,
            product_image,
            product_rating,
            product_stock_quantity,
            product_category
        } of products) {
            // Mock Api
            const res = await fetch("https://677ed02b94bde1c1252da3d2.mockapi.io/api/v1/products/", {
                method: "POST", // For Posting
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    product_name,
                    product_description,
                    product_price,
                    product_sizes,
                    product_image,
                    product_rating,
                    product_stock_quantity,
                    product_category
                })
            });
            const response = await res.json();
            if (res.ok) {
                console.log(response);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
postDataIntoApi();  
// console.log(products.length);

