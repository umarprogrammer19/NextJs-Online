import Link from "next/link";

export default async function Home() {

  const data = await fetch("http://localhost:8000/blogs");
  const res = await data.json();

  return (
    <>
      <h1 className="text-center text-3xl">All Blogs</h1>
      <div className="w-screen flex flex-wrap justify-center gap-5">
        {res.blogs.map((item: any) => <div className="w-[300px] h-[300px] border border-black p-5 space-y-5" key={item.id}>
          <h1>{item.author}</h1>
          <h1>{item.date}</h1>
          <h1>{item.title}</h1>
          <h1>{item.content}</h1>
          <Link href={`/${item.id}`}>View More</Link>
        </div>)}
      </div>
    </>
  );
}
