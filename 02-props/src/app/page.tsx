import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
export default function page() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Cards title="Card 1" day="Saturday" date={6} />
      <Cards title="Card 2" day="Monday" date={3} /> */}
      <Hero />
      <Section2 />

      <div className="w-40 h-40 bg-black mx-auto mb-10 p-5 relative">
        <div className="w-1/2 h-1/2 bg-white absolute right-0">

        </div>
      </div>
    </div>
  )
}
