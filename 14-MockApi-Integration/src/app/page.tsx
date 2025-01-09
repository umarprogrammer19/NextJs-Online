import { fetchData } from "@/Fetch";

export default async function Home() {
  await fetchData()
  // *[_type == "Products"]{
  //   product_name,
  //   product_description,
  //   product_price,
  //   product_sizes,
  //   "product_image": product_image.asset->url,
  //   product_rating,
  //   product_stock_quantity,
  //   product_category,
  // }
  return (
    <div>Hello World</div>
  );
}
