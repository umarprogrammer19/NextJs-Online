export const Product = {
    name: "Product",
    title: "Product",
    type: "document",
    fields: [{
        name: "title",
        title: "Product Title",
        type: "string",
        description: "Title Of the product"
    }, {
        name: "description",
        title: "Product Description",
        type: "string",
        description: "Description Of the product"
    }, {
        name: "image",
        title: "Product image",
        type: "image",
        description: "Upload the image here",
        options: {
            hotspot: true,
        }
    }, {
        name: "price",
        title: "Product Price",
        type: "number",
        description: "Price Of the product",
    }],
};