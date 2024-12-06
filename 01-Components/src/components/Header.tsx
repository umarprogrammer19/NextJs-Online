import Image from "next/image";
export default function Header() {
    return (
        <>
            <div className="h-12 w-screen bg-black text-white flex
            justify-center items-center">
                <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline">ShopNow</span></h1>
                <div className="flex sm:relative sm:left-12 md:relative md:left-24 lg:relative lg:left-48">
                    <h1>English</h1>
                    <Image src={"/DropDown.png"} alt="Error From Getting Image" width={20} height={20}/>
                </div>
            </div>
        </>
    )
}
