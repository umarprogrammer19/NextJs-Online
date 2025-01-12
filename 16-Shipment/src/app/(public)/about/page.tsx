import Aboutcards from "@/components/about/aboutcards"
import Employees from "@/components/about/employees"
import Bottombar from "@/components/homepage/bottombar"
import Image from "next/image"

const AboutPage = () => {
    return (
        <div className="max-w-[1280px] m-auto min-h-[70vh] md:p-0 p-3">
            <div className="w-full xs:py-20 py-10 flex">
                <div className="md:w-1/2 w-full m-auto sm::px-20 xs:px-10 px-2">
                    <h1 className="text-5xl font-medium">Out Story</h1>
                    <p className="text-sm mt-10">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.<br/><br/>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="md:w-1/2 md:block hidden">
                    <Image src="/banners/about/banner.png" alt="" width={805} height={781} className="w-full h-full object-cover" />
                </div>
            </div>
            <Aboutcards />
            <Employees />
            <Bottombar />
        </div >
    )
}

export default AboutPage