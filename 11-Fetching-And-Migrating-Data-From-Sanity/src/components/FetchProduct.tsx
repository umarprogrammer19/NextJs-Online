import { fetchAndMigrateData } from "@/Fetch";
import { client } from "@/sanity/lib/client";

interface Product_Type {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
}


async function FetchProduct() {

    //     const query = `*[_type == "product"]{
    //    _id,
    //    title,
    //    description,
    //    "imageUrl": imageUrl.asset->url,
    //    price
    //  }`
    //     const fetchData = await client.fetch(query);
    //     console.log(fetchData);

    const query2 = `*[_type == "ProductApi"]{
    name,
    category,
    "image": image.asset -> url,
    description,
    price,
}`

    const fetchQuery2 = await client.fetch(query2);

    // <div className='m-10 flex gap-4 justify-center flex-wrap'>
        {/* {fetchData.map((item: Product_Type) => <div key={item._id} className='border border-white'>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <Image src={item.imageUrl} alt='None' width={500} height={500} className='w-full h-48' />
                <h1>Price: {item.price}</h1>
            </div>)} */}
        // </div>
    return (
        <div className="min-h-screen bg-gray-100" >
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-center text-2xl font-bold">Product List</h1>
            </header>
            <main className="container mx-auto py-8 px-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fetchQuery2.map((product:any, index:number) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
                        >
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-40 w-40 object-cover mb-4 rounded"
                                />
                            )}
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-gray-600 text-sm">{product.category}</p>
                            <p className="text-gray-800 text-sm text-center mt-2">
                                {product.description}
                            </p>
                            <p className="text-blue-600 text-lg font-semibold mt-4">
                                ${product.price}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div >
    )
}

export default FetchProduct