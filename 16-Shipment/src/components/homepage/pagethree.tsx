import Image from "next/image"
import PageIntro from "../pageintro"

const arr = [
    {
        type: "Phones",
        icon: "/categoryicons/phone.png"
    },
    {
        type: "Computers",
        icon: "/categoryicons/computer.png"
    },
    {
        type: "Smartwatches",
        icon: "/categoryicons/smartwatch.png"
    },
    {
        type: "Camera",
        icon: "/categoryicons/camera.png"
    },
    {
        type: "HeadPhones",
        icon: "/categoryicons/headphone.png"
    },
    {
        type: "Gaming",
        icon: "/categoryicons/gaming.png"
    },
]
const Pagethree = () => {
    return (
        <div className="p-3 border-b">
            <PageIntro intro={"Categories"} text={"Browse By Category"}></PageIntro>
            <div className="flex flex-wrap items-center justify-center py-12 gap-4">
                {arr.map((data, index) => {
                    return(
                        <div className="group xs:w-40 xs:h-36 w-32 h-28 border-[1px] border-zinc-400 hover:bg-primRed hover:text-white transition-all rounded-md flex flex-col justify-center items-center m-1" key={index}>
                            <div className="w-12 h-12 group-hover:invert">
                                <Image src={data.icon} alt="" width={600} height={600} className="w-full h-full object-contain"/>
                            </div>
                            <span>{data.type}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pagethree