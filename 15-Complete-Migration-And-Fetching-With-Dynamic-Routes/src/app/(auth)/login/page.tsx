import Image from "next/image"
import Link from "next/link"

const LoginPage = () => {
    return (
        <div className="max-w-[1280px] m-auto min-h-[70vh] p-3">
            <div className="w-full xs:py-20 py-10 flex">
                <div className="md:w-1/2 w-full md:block hidden">
                    <Image src="/banners/auth/banner.png" alt="" width={805} height={781} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 w-full m-auto xs:px-20 px-2">
                    <h1 className="text-4xl font-medium mb-2">Login To Exclusive</h1>
                    <span className="text-base text-zinc-800">Enter your details below</span>
                    <form action="" className="space-y-7 mt-10">
                        <input type="text" name="emailorphone" placeholder="Email or Phone Number" className="w-full bg-none border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-400 placeholder:text-lg" />
                        <input type="password" name="password" placeholder="Password" className="w-full bg-none border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-400 placeholder:text-lg" />
                        <div className="flex justify-between items-center">
                        <input type="submit" value="Log In" className="px-10 font-medium w-fit bg-primRed text-white py-3 rounded-md" />
                        <span className="text-primRed">Forget Password?</span>
                        </div>
                    </form>
                    <p className="text-zinc-600 mt-8">Don&apos;t have an account <Link href="/signup" className="border-b-2 border-zinc-400 font-medium text-zinc-500 pb-[0.2rem]">sign up</Link></p>
                </div>
            </div>
        </div >
    )
}

export default LoginPage