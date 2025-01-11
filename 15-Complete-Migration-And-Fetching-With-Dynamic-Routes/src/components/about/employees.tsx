import Image from "next/image";
import { SlSocialTwitter, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const data = [
    {
        name: "Tom Cruise",
        title: "Founder & Chairman",
        image: "/design/employees/tom.png"
    },
    {
        name: "Emma Watson",
        title: "Managing Director",
        image: "/design/employees/emma.png"
    },
    {
        name: "Will Smith",
        title: "Product Designer",
        image: "/design/employees/will.png"
    },
]

const Employees = () => {
    return (
        <div className="w-fit py-10 flex items-center flex-wrap gap-10 mx-auto justify-center">
            {data.map((data, index) => {
                return (
                    <div key={index}>
                        <div className="w-80 h-96 bg-[#F5F5F5] pt-8">
                            <Image src={data.image} alt={data.image} width={600} height={800} className="w-full h-full object-contain" />
                        </div>
                        <h1 className="w-full text-3xl font-medium text-zinc-800 pt-3">{data.name}</h1>
                        <span className="text-sm">{data.title}</span>
                        <div className="flex gap-3 items-center py-3 text-sm">
                            <SlSocialTwitter />
                            <SlSocialInstagram />
                            <SlSocialLinkedin />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Employees