import Bottombar from "@/components/homepage/bottombar";
import Pagefive from "@/components/homepage/pagefive";
import Pagefour from "@/components/homepage/pagefour";
import Pageone from "@/components/homepage/pageone";
import Pagesix from "@/components/homepage/pagesix";
import Pagethree from "@/components/homepage/pagethree";
import Pagetwo from "@/components/homepage/pagetwo";
export default async function Home() {
  return (
    <div className="md:max-w-[1280px] w-full m-auto overflow-hidden">
      <Pageone />
      <Pagetwo />
      <Pagethree />
      <Pagefour />
      <Pagefive />
      <Pagesix />
      <Bottombar />
    </div>
  );
}
