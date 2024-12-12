"use client";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Products() {
  const { id } = useParams();
  const [productData, setProductData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const res = await data.json();
      setProductData(res);
      console.log(res);
    }
    getData();
  }, [productData])
  console.log(productData);

  return (
    <div>{productData ? <div>
      <h1>{productData.title}</h1>
      <p>{productData.description.slice(0, 50)}</p>
      <p>{productData.price}</p>
      <Image src={productData.image} alt="Image" width={100} height={100} />
    </div> : "Loading ....."}</div>
  )
}

export default Products