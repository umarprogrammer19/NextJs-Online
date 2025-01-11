import Card from "../card"
import PageIntro from "../pageintro"
import { arr } from "@/utils/productdata"

const Pagefive = () => {
    return (
        <div className="p-3">
            <PageIntro intro="Our Products" text={"Explore Our Products"}></PageIntro>
            <div className="flex flex-wrap gap-3 justify-center py-10">
                <Card arr={arr} />
            </div>
            <div className="w-full flex justify-center">
                <button className="px-5 py-3 text-white bg-[#DB4444] rounded-sm text-base my-4">View All Products</button>
            </div>
        </div>
    )
}

export default Pagefive