import Image from "next/image"

const Bottombar = () => {
    return (
        <div className="flex justify-evenly items-center m-auto w-full flex-wrap py-20 gap-6">
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/icons/service.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-medium pt-5">FREE AND FAST DELIVERY</h2>
                <span className="text-sm">Free delivery for all orders over $140</span>
            </div>
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/icons/customerService.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-medium pt-5">24/7 CUSTOMER SERVICE</h2>
                <span className="text-sm">Friendly 24/7 customer support</span>
            </div>
            <div className="text-center">
                <div className="w-14 h-14 m-auto">
                    <Image src={"/icons/moneyback.png"} alt="" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-medium pt-5">MONEY BACK GUARANTEE</h2>
                <span className="text-sm">We reurn money within 30 days</span>
            </div>
        </div>
    )
}

export default Bottombar