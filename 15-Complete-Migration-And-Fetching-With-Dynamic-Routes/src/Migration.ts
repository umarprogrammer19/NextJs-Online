import { client } from "./sanity/lib/client"; // Sanity client import jo backend ke sath kaam karega

// Product ka type define kar rahe hain jo har product ki properties ko specify karega
type Product = {
    product_name: string; // Product ka naam
    product_description: string; // Product ka description
    product_price: number; // Product ka price
    product_sizes: string[]; // Product ke available sizes
    product_image: string; // Product ki image ka URL
    product_rating: number; // Product ka rating
    product_stock_quantity: number; // Product ka stock quantity
    product_category?: string; // Product ki category (optional)
};

// Function jo API se data fetch kar ke Sanity par migrate karega
export const fetchData = async () => {
    try {
        // Products fetch karne ke liye API call kar rahe hain
        const res = await fetch("https://677ed02b94bde1c1252da3d2.mockapi.io/api/v1/products");

        if (!res.ok) {
            // Agar API response theek nahi hai, error throw karenge
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }

        // Response data ko JSON mein convert kar rahe hain
        const data: Product[] = await res.json();

        // Har product ke liye loop laga rahe hain
        for (const {
            product_name,
            product_description,
            product_price,
            product_sizes,
            product_image,
            product_rating,
            product_stock_quantity,
            product_category,
        } of data) {
            try {
                // Product ki image ko upload karte hain
                const imageAsset = await upload(product_image);

                if (!imageAsset) {
                    // Agar image upload fail ho jaye, warning log karega aur skip karega
                    console.warn(`Failed to upload image for product: ${product_name}`);
                    continue;
                }

                // Sanity client ka use kar ke product data ko save karte hain
                await client.create({
                    _type: "APIProducts", // Sanity schema type
                    product_name, // Product ka naam
                    product_description, // Product ka description
                    product_price, // Product ka price
                    product_sizes, // Product sizes
                    product_image: { // Image object jo Sanity asset ko reference karega
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: imageAsset._id, // Uploaded image asset ka reference
                        },
                    },
                    product_rating, // Product rating
                    product_stock_quantity, // Product stock quantity
                    product_category, // Product ki category
                });

                console.log("Migrated Product:", product_name); // Success ka log
            } catch (err) {
                // Agar kisi specific product migration mein error aaye, uska log karega
                console.error(`Failed to migrate product: ${product_name}`, err);
            }
        }
    } catch (error) {
        // Agar main process mein koi error aaye, uska log karega
        console.error("Error in fetchData:", error);
    }
};

// Function jo image ko Sanity par upload karega
const upload = async (image: string) => {
    try {
        // Image ko URL se fetch karte hain
        const res = await fetch(image);

        if (!res.ok) {
            // Agar image fetch fail ho jaye, warning log karega
            console.warn(`Failed to fetch image: ${image}`);
            return null;
        }

        // Image ka content type fetch response ke headers se lete hain
        const contentType = res.headers.get("content-type") || "image/jpeg";

        // Sanity pe image ko asset ke tor par upload karte hain
        const imageAsset = await client.assets.upload("image", await res.blob(), {
            filename: image.split("/").pop() || "image", // File name URL ke end se lete hain
            contentType, // Image ka content type
        });

        return imageAsset; // Uploaded image asset ko return karte hain
    } catch (error) {
        // Agar upload process mein koi error aaye, uska log karega
        console.error("Error in upload:", error);
        return null;
    }
};

// Data fetching aur migration function ko run karte hain
fetchData();
