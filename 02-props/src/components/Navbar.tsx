import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div className="h-[100px] border-b border-b-black flex justify-center items-center">
                <div className="w-4/5 h-9 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-wider">Exclusive</div>
                    <div className="space-x-5">
                        <a href="#" className="underline">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Sign Up</a>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex px-4">
                            <input type="text" placeholder="What are you looking for?" className="placeholder:text-[15px]"/>
                            <Image src="/Search.png" alt="Wish" width={25} height={25}></Image>
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src="/Wishlist.png" alt="Wish" width={30} height={30}></Image>
                            <Image src="/Cart.png" alt="Cart" width={30} height={30}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}