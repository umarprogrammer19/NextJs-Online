import Image from "next/image"
import Link from "next/link"

const SignUpPage = () => {
    return (
        <div className="max-w-[1280px] m-auto min-h-[70vh] p-3">
            <div className="w-full xs:py-20 py-10 flex">
                <div className="md:w-1/2 w-full md:block hidden">
                    <Image src="/banners/auth/banner.png" alt="" width={805} height={781} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 w-full m-auto xs:px-20 px-2">
                    <h1 className="text-4xl font-medium mb-2">Create an account</h1>
                    <span className="text-base text-zinc-800">Enter your details below</span>
                    <form action="" className="space-y-7 mt-10">
                        <input type="text" name="name" placeholder="Name" className="w-full bg-none border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-400 placeholder:text-lg" />
                        <input type="text" name="emailorphone" placeholder="Email or Phone Number" className="w-full bg-none border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-400 placeholder:text-lg" />
                        <input type="password" name="password" placeholder="Password" className="w-full bg-none border-b border-zinc-400 py-2 focus:outline-none placeholder:text-zinc-400 placeholder:text-lg" />
                        <input type="submit" value="Create Account" className="font-medium w-full bg-primRed text-white py-3 rounded-md" />
                    </form>
                    <div className="bg-white border-[1px] border-zinc-400 px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center gap-3 mt-3">
                        <div className="w-6 h-6 overflow-hidden">
                            <Image src={"/icons/googleicon.png"} alt={"icon"} width={600} height={600} className="w-full h-full object-cover" />
                        </div>
                        <span>Sign in with google</span>
                    </div>
                    <p className="text-zinc-600 m-auto w-fit mt-8">Already have an account? <Link href="/login" className="border-b-2 border-zinc-400 font-medium text-zinc-500 pb-[0.2rem]">Log in</Link></p>
                </div>
            </div>
        </div >
    )
}

export default SignUpPage