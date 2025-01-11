import { client } from "./sanity/lib/client";

export const deleteDocument = async () => {
    try {
        await client.delete({
            query: '*[_type == "data"]'
        });
        console.log(`Document has been deleted.`);
    } catch (error) {
        console.error("Failed to delete document:", error);
    }
};

deleteDocument();