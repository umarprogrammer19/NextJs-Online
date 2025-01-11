export default {
    name: 'Prodatas',
    title: 'data',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Product title',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Description',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
};
