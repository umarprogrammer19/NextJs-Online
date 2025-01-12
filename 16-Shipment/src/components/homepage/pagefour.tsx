import Image from "next/image";
import Card from "../card";
import PageIntro from "../pageintro";

const data = [
    {
        title: "Breed Dry Dog Food",
        image: "/products/dogfood.png",
        price: 100,
        id: 1
    },
    {
        title: "CANON EOS DSLR Camera",
        image: "/products/camera.png",
        price: 360,
        id: 2
    },
    {
        title: "ASUS FHD Gaming Laptop",
        image: "/products/laptop.png",
        price: 700,
        id: 3
    },
    {
        title: "Curology Product Set ",
        image: "/products/curology.png",
        price: 500,
        id: 4
    }
]

const Pagefour = () => {
    return (
        <div className="pb-10 p-3">
            <PageIntro intro={"This Month"} text={"Best Selling Products"} nav={"button"}></PageIntro>
            <div className="w-full flex flex-wrap justify-center gap-3 py-4">
                <Card arr={data} />
            </div>
            <div className="w-full xs:h-[500px] h-[400px] mt-20 relative">
                <Image src={"/banners/page-one/bannerbg-2.png"} alt="" width={1170} height={500} className="w-full h-full object-cover absolute top-0 right-0 -z-10" />
                <div className="w-full h-full flex justify-end items-center md:px-20 px-4">
                    <div className="flex flex-col justify-between h-full py-20 absolute bottom-10 sm:left-10 left-5 z-10">
                        <div className="flex flex-col gap-5">
                            <span className="text-[#00FF66] font-medium">Categories</span>
                            <h1 className="md:text-6xl text-5xl text-white">Enhance Your<br /> Music Experience</h1>
                        </div>
                        <button className="px-8 py-3 bg-[#00FF66] text-white rounded-sm w-fit xs:mt-0 mt-8">Buy Now</button>
                    </div>
                    <div className="md:w-1/2 md:h-full w-full h-[80%] z-0 md:py-0 md:px-0 py-20">
                        <Image src={"/banners/page-one/speaker.png"} alt="" width={600} height={500} className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagefour