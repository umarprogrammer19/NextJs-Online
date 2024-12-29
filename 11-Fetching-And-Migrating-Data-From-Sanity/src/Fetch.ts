import { client } from "./sanity/lib/client";

export const fetchAndMigrateData = async () => {
    const res = await fetch("https://furniture-api.fly.dev/v1/products");
    const { data } = await res.json();

    for (const { name, category, description, price, image_path } of data) {
        const imageAsset = await uploadImageToSanity(image_path);

        // Now create a document in Sanity
        await client.create({
            _type: 'ProductApi',
            name,
            category,
            description,
            price,
            image: {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id,
                },
            },
        });
        console.log(`Migrated product: ${name}`);
    }
};

// Upload the image to Sanity
const uploadImageToSanity = async (imageUrl: string) => {
    const res = await fetch(imageUrl);
    
    // Convert the response body to a ReadableStream
    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${res.status}`);
    }
  
    const contentType = res.headers.get("content-type") || "image/jpeg"; // Default to JPEG if content type is missing
  
    const imageAsset = await client.assets.upload('image', res.body as any, {
      filename: imageUrl.split('/').pop() || "image",
      contentType,
    });
  
    return imageAsset;
  };

fetchAndMigrateData().catch(console.error);

