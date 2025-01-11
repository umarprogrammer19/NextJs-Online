import { client } from "./sanity/lib/client";

type Product = {
    product_name: string;
    product_description: string;
    product_price: number;
    product_sizes: string[];
    product_image: string;
    product_rating: number;
    product_stock_quantity: number;
    product_category?: string;
};

export const fetchData = async () => {
    try {
        const res = await fetch("https://677ed02b94bde1c1252da3d2.mockapi.io/api/v1/products");

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }

        const data: Product[] = await res.json();

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
            // Upload the product image
            const imageAsset = await upload(product_image);

            if (!imageAsset) {
                console.warn(`Failed to upload image for product: ${product_name}`);
                continue;
            }

            // Create the product document in Sanity
            await client.create({
                _type: "ApiPro",
                product_name,
                product_description,
                product_price,
                product_sizes,
                product_image: {
                    _type: "image",
                    asset: {
                        _type: "reference",
                        _ref: imageAsset._id,
                    },
                },
                product_rating,
                product_stock_quantity,
                product_category,
            });

            console.log("Migrated Product:", product_name);
        }
    } catch (error) {
        console.error("Error in fetchData:", error);
    }
};

const upload = async (image: string) => {
    try {
        const res = await fetch(image);

        if (!res.ok) {
            console.warn(`Failed to fetch image: ${image}`);
            return null;
        }

        const contentType = res.headers.get("content-type") || "image/jpeg";

        const imageAsset = await client.assets.upload("image", res.body as any, {
            filename: image.split('/').pop() || "image",
            contentType,
        });

        return imageAsset;
    } catch (error) {
        console.error("Error in upload:", error);
        return null;
    }
};

fetchData();
