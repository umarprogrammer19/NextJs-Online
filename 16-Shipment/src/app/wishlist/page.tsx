import Card from "@/components/card"

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

const foryou = [
    {
        title: "Kids Electric Car",
        image: "/products/toycar.png",
        price: 960,
        id: 5
    },
    {
        title: "Jr. Zoom Soccer Cleats",
        image: "/products/shoess.png",
        price: 1160,
        id: 6
    },
    {
        title: "GP11 Shooter USB Gamepad",
        image: "/products/gamecontroller.png",
        price: 660,
        id: 7
    },
    {
        title: "Quilted Satin Jacket",
        image: "/products/jacket.png",
        price: 600,
        id: 8
    },
]

const WishList = () => {
    return (
        <div className="md:max-w-[1280px] w-full m-auto min-h-[80vh] py-20 p-3">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Whishlist ({data.length})</h3>
                <button className="xs:px-8 xs:py-3 px-6 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500">Move All To Bag</button>
            </div>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8">
                <Card arr={data} />
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="w-full flex items-center gap-3">
                    <span className="w-5 h-10 bg-primRed rounded-md"></span>
                    <span className="text-base xs:text-xl">Just For You</span>
                </div>
                <button className="xs:px-10 xs:py-3 px-8 py-2 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap">See All</button>
            </div>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8">
                <Card arr={foryou} />
            </div>
        </div>
    )
}

export default WishList