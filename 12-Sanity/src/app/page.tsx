import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  const query = `*[_type == "Product"]{
    title,
    description,
    price,
    "image": image.asset->url,
  }`
  const data = await client.fetch(query);
  console.log(data);
  return (
    <div className="flex justify-center py-10 gap-4">
      {data.map((product: any) => <div className="border border-black p-4  space-y-6">
        <Image src={product.image} alt="None" height={200} width={200} className="w-full h-40"/>
        <h1>Title: {product.title}</h1>
        <h1>Description: {product.description}</h1>
        <h1>Price: {product.price}</h1>
      </div>)}
    </div>
  );
}
