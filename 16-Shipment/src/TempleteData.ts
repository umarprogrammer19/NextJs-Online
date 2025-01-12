import { client } from "./sanity/lib/client";
import { arr } from "./utils/productdata";
import fs from "fs";
import path from "path";

export const fetchTempleteData = async () => {
    try {
        for (const { title, image, price } of arr) {
            try {
                const resolvedImagePath = resolveImagePath(image);
                const imageAsset = await upload(resolvedImagePath);

                if (!imageAsset) {
                    console.warn(`Failed to upload image for product: ${title}`);
                    continue;
                }

                await client.create({
                    _type: "Prodatas",
                    title,
                    price,
                    image: {
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: imageAsset._id,
                        },
                    },
                });

                console.log("Migrated Product:", title);
            } catch (err) {
                console.error(`Failed to migrate product: ${title}`, err);
            }
        }
    } catch (error) {
        console.error("Error in fetchData:", error);
    }
};

const upload = async (imagePath: string) => {
    try {
        let fileData: Buffer | null = null;
        let contentType: string = "image/jpeg";

        if (fs.existsSync(imagePath)) {
            fileData = fs.readFileSync(imagePath);
            contentType = getContentType(imagePath);
        } else {
            const res = await fetch(imagePath);

            if (!res.ok) {
                console.warn(`Failed to fetch remote image: ${imagePath}`);
                return null;
            }

            fileData = Buffer.from(await res.arrayBuffer());
            contentType = res.headers.get("content-type") || "image/jpeg";
        }

        if (!fileData) {
            console.error("Failed to read image data.");
            return null;
        }

        const imageAsset = await client.assets.upload("image", fileData, {
            filename: path.basename(imagePath),
            contentType,
        });

        return imageAsset;
    } catch (error) {
        console.error("Error in upload:", error);
        return null;
    }
};

const getContentType = (filePath: string): string => {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case ".png":
            return "image/png";
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        case ".gif":
            return "image/gif";
        case ".webp":
            return "image/webp";
        default:
            return "image/jpeg";
    }
};

const resolveImagePath = (image: string): string => {
    if (image.startsWith("http://") || image.startsWith("https://")) {
        return image;
    }

    const baseURL = "http://localhost:3000";
    return `${baseURL}${image}`;
};

fetchTempleteData();
