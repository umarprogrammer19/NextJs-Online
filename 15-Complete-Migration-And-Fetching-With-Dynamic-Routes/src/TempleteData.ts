import { client } from "./sanity/lib/client"; 
// Product ka data array import kar rahe hain
import { arr } from "./utils/productdata"; 
// File system module ko import kar rahe hain file read/write ke liye
import fs from "fs"; 
// Path module ko import kar rahe hain file paths handle karne ke liye
import path from "path";

// Function jo data import aur Sanity pe upload karne ke liye hai
export const fetchTempleteData = async () => {
    try {
        // Har product ke liye loop laga rahe hain jo utils wale array mein hai
        for (const { title, image, price } of arr) {
            try {
                // Image ka sahi path resolve karte hain (local ya remote)
                const resolvedImagePath = resolveImagePath(image);
                // Image ko Sanity pe upload karte hain (function niche defined hai)
                const imageAsset = await upload(resolvedImagePath);

                // Agar image upload fail ho jaye, warning log karega aur is product ko skip karega
                if (!imageAsset) {
                    console.warn(`Failed to upload image for product: ${title}`);
                    continue;
                }

                // Sanity client ka use kar ke new product entry create karte hain
                await client.create({
                    // Sanity schema ki type jo define ki gayi hai
                    _type: "Prodatas", 
                    // Product ka title
                    title, 
                    // Product ki price
                    price, 
                    // Image ka object jo uploaded asset ko reference karta hai
                    image: { 
                        _type: "image",
                        asset: {
                            _type: "reference",
                            // Uploaded image asset ka reference
                            _ref: imageAsset._id, 
                        },
                    },
                });

                // Successful migration ka log
                console.log("Migrated Product:", title); 
            } catch (err) {
                // Agar kisi individual product migration mein error aaye to uska log karega
                console.error(`Failed to migrate product: ${title}`, err);
            }
        }
    } catch (error) {
        // Agar main process mein koi error aaye to uska log karega
        console.error("Error in fetchData:", error);
    }
};

// Sanity pe images upload karne ka function
const upload = async (imagePath: string) => {
    try {
        // File data ko store karne ke liye variable
        let fileData: Buffer | null = null; 
        // Images ka default content type
        let contentType: string = "image/jpeg"; 

        if (fs.existsSync(imagePath)) {
            // Agar image local hai to file data ko read karega
            fileData = fs.readFileSync(imagePath);
            // File extension ke hisaab se content type set karega
            contentType = getContentType(imagePath); 
        } else {
            // Agar image remote hai to usko URL se fetch karega
            const res = await fetch(imagePath);

            if (!res.ok) {
                // Agar remote image fetch fail ho jaye, warning log karega
                console.warn(`Failed to fetch remote image: ${imagePath}`);
                return null;
            }

            // Fetched image ko buffer mein convert karega
            fileData = Buffer.from(await res.arrayBuffer());
            // Response headers se content type le lega
            contentType = res.headers.get("content-type") || "image/jpeg"; 
        }

        // Agar file data null hai to error log karega aur return null karega
        if (!fileData) {
            console.error("Failed to read image data.");
            return null;
        }

        // Sanity pe image data ko asset ke tor pe upload karega
        const imageAsset = await client.assets.upload("image", fileData, {
            // File path se file name use karega
            filename: path.basename(imagePath), 
            // Content type specify karega
            contentType, 
        });

        // Uploaded image asset return karega
        return imageAsset; 
    } catch (error) {
        // Agar upload process mein koi error aaye to uska log karega
        console.error("Error in upload:", error);
        return null;
    }
};

// File ka content type determine karne ka function (extension ke hisaab se)
const getContentType = (filePath: string): string => {
    // File extension ko lowercase mein leke aata hai
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
            // Default content type
            return "image/jpeg";
    }
};

// Image ka sahi path resolve karne ka function
const resolveImagePath = (image: string): string => {
    // Agar image ka path URL hai to usi ko return karega
    if (image.startsWith("http://") || image.startsWith("https://")) {
        return image;
    }

    // Local paths ke liye base URL ko prepend karega
    const baseURL = "http://localhost:3000";
    return `${baseURL}${image}`;
};

// Data fetching aur migration function ko run karte hain
fetchTempleteData();
