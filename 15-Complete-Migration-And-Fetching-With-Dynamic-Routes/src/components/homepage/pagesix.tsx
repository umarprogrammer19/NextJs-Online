import Image from "next/image"
import PageIntro from "../pageintro"
const Pagesix = () => {
    return (
        <div className="p-3 h-full">
            <PageIntro intro="Featured" text={"New Arrival"} nav="none"></PageIntro>
            <div className="md:grid grid-cols-4 grid-rows-2 w-full md:h-[700px] xl:gap-6 sm:gap-4 gap-3 py-10 text-[#FAFAFA]">
                <div className="col-span-2 row-span-2 bg-black pt-4 relative md:w-full md:h-full w-full h-96">
                    <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
                        <h1 className="text-3xl font-medium">PlayStation 5</h1>
                        <span>
                            Black and White version of the PS5<br /> coming out on sale.
                        </span>
                        <span className="border-b font-medium w-fit">Shop Now</span>
                    </div>
                    <Image src={"/design/ps5.png"} alt="" width={600} height={600} className="w-full h-full lg:object-cover object-contain" />
                </div>
                <div className="col-span-2 row-span-1 bg-[#0C0C0C] flex justify-between relative p-6 overflow-hidden md:w-full md:h-full w-full h-96">
                    <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute bottom-10 sm:left-10 left-3">
                        <h1 className="text-3xl font-medium">Women&apos;s Collections</h1>
                        <span>
                            Featured woman collections that<br /> give you another vibe.
                        </span>
                        <span className="border-b font-medium w-fit">Shop Now</span>
                    </div>
                    <Image src={"/design/girl.png"} alt="" width={600} height={600} className="w-full h-full object-cover absolute top-0 -right-20 z-0 " />
                </div>
                <div className="col-span-1 row-span-1 bg-[#3d3d3d] md:bg-[#303030] p-4 relative md:w-full md:h-full w-full h-96">
                    <div className="h-full w-full z-[1] flex flex-col gap-2 justify-end absolute md:bottom-5 md:left-5 bottom-10 left-10">
                        <h1 className="md:text-2xl text-3xl font-medium">Speakers</h1>
                        <span className="md:text-sm">
                            Amazon wireless speakers
                        </span>
                        <span className="border-b font-medium w-fit">Shop Now</span>
                    </div>
                    <Image src={"/design/amzSpeaker.png"} alt="" width={600} height={600} className="w-full h-full lg:object-cover object-contain" />
                </div>
                <div className="col-span-1 row-span-1 bg-[#303030] p-4 md:w-full md:h-full w-full h-96">
                    <Image src={"/design/perfume.png"} alt="" width={600} height={600} className="w-full h-full lg:object-cover object-contain" />
                </div>
            </div>
        </div>
    )
}

export default Pagesix