import Image from "next/image"

const data = [
    {
        icon: "/icons/aboutcards/image1.png",
        number: "10.5k",
        text: "Sellers active our site"
    },
    {
        icon: "/icons/aboutcards/image2.png",
        number: "33k",
        text: "Monthly Product Sale"
    },
    {
        icon: "/icons/aboutcards/image3.png",
        number: "45.5k",
        text: "Customer active in our site"
    },
    {
        icon: "/icons/aboutcards/image4.png",
        number: "25k",
        text: "Anual gross sale in our site"
    },
]
const Aboutcards = () => {
  return (
    <div className="w-fit py-10 flex items-center flex-wrap sm:gap-10 xs:gap-5 gap-3 mx-auto justify-center">
        {data.map((data, index)=> {
            return(
                <div className="sm:w-56 sm:h-56 xs:w-48 xs:h-48 w-36 h-36 border border-zinc-400 flex flex-col justify-center items-center group hover:bg-primRed hover:text-white transition-all rounded-sm" key={index}>
                    <div className="xs:w-20 xs:h-20 w-12 h-12 group-hover:invert transition-all">
                        <Image src={data.icon} alt={data.icon} width={600} height={600} className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="text-2xl font-semibold xs:my-1">{data.number}</h3>
                    <span className="xs:text-sm text-xs px-3 text-center leading-3">{data.text}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Aboutcards