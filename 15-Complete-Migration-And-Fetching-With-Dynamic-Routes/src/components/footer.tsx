import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div>
                        <h2 className="font-medium text-xl">Exclusive</h2>
                        <p className="mt-4 text-zinc-200 font-light">Subscribe</p>
                        <p className="mt-2 text-zinc-200 font-light">Get 10% off your first order</p>
                        <div className="mt-4 flex items-center border border-white rounded">
                            <input type="email" placeholder="Enter your email" className="bg-black text-white p-2 flex-grow outline-none rounded-lg" />
                            <button className="p-2">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Support</h2>
                        <p className="mt-4 text-zinc-200 font-light">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className="mt-3 text-zinc-200 font-light">exclusive@gmail.com</p>
                        <p className="mt-3 text-zinc-200 font-light">+88015-88888-9999</p>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Account</h2>
                        <ul className="mt-4 space-y-3 text-zinc-200 font-light">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Quick Link</h2>
                        <ul className="mt-4 space-y-3 text-zinc-200 font-light">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-medium text-xl">Download App</h2>
                        <p className="mt-4 text-zinc-200 font-light">Save $3 with App New User Only</p>
                        <div className="mt-4 flex items-center gap-2">
                            <div className="w-[100px] h-[100px]">
                                    <Image src={"/design/qrcode.png"} alt="" width={150} height={50} className="w-full h-full object-contain"/>
                            </div>
                            <div className="">
                                <div className="w-36 h-12">
                                    <Image src={"/design/getongoogle.png"} alt="" width={150} height={50} className="w-full h-full object-contain"/>
                                </div>
                                <div className="w-36 h-12">
                                    <Image src={"/design/getonapplestore.png"} alt="" width={150} height={50} className="w-full h-full object-contain"/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center border-t border-zinc-800 text-zinc-800">
                    <p className="py-6">© Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer