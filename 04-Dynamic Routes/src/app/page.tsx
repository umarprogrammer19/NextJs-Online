import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // "https://fakestoreapi.com/products"

  // JSON Javascript Object Notation

  const productData = await fetch("https://fakestoreapi.com/products");
  const response = await productData.json();
  console.log(response);

  return (
    <div className="w-screen">
      <Navbar bgColor="yellow" />
      <h1 className="text-center text-4xl underline">Products</h1>
      <div className="p-10 flex gap-6 flex-wrap justify-center">
        {response.map((data: any) => <div className="w-[400px] h-[400px] border border-black p-2 flex flex-col  items-center gap-8">
          <h1>{data.title}</h1>
          <p>{data.description.slice(0, 50)}</p>
          <p>{data.price}</p>
          <Image src={data.image} alt="Image" width={100} height={100} />
          <Link href={`/${data.id}`} className="text-[blue] text-xl">Read More</Link>
        </div>)}
      </div>
    </div>
  );
}
