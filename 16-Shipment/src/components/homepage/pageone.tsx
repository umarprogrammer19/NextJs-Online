import Image from "next/image"
import Link from "next/link"

const sidebarList = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
]

const Pageone = () => {
    return (
        <div className="w-full">
            <div className="flex">
                <div className="w-[20%] border-r px-6 pt-10 lg:block hidden">
                    <div className="flex flex-col gap-4 w-44">
                        {sidebarList.map((data: string, index) => {
                            return (
                                <Link href="" key={index}>{data}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className="lg:w-[80%] w-full h-full lg:px-10 lg:pt-10">
                    <div className="w-full h-full bg-black text-white md:px-12 sm:px-8 px-4 py-8 flex justify-between items-center">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center md:gap-6 gap-3">
                                <div className="w-10 h-12 overflow-hidden">
                                    <Image src={"/banners/page-one/applelogo.png"} alt={"banner-logo"} width={600} height={800} className="w-full h-full object-cover" />
                                </div>
                                <span className="md:text-xl text-base">iPhone 14 Series</span>
                            </div>
                            <h1 className="md:text-6xl text-4xl font-medium">
                                Up to 10%<br /> off Voucher
                            </h1>
                            <div className="flex items-center gap-2">
                                <span className="border-b pb-1">Shop Now</span>
                                <div className="w-4 h-4">
                                    <Image src={"/icons/rightarrow.png"} alt="" width={600} height={600} className="w-full h-full overflow-hidden" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] h-full">
                            <Image src={"/banners/page-one/iphone.png"} alt={"banner-one"} width={600} height={600} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pageone