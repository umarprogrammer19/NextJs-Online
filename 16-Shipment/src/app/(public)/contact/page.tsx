import Image from "next/image"

const ContactPage = () => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[70vh] md:py-20 sm:py-10 py-6 p-3">
      <div className="w-full md:flex justify-center items-center gap-3">
        <div className="md:w-[35%] w-full sm:p-4 space-y-4 md:py-0 py-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-primRed p-2">
              <Image src={"/icons/call.png"} alt={""} width={600} height={600} className="w-full h-full object-contain"/>
            </div>
            <span className="text-xl">Call To Us</span>
          </div>
          <p className="text-zinc-800">We are available 24/7, 7 days a week.</p>
          <p className="text-zinc-800 pb-3">Phone: +8801611112222</p>

          <hr className="border border-zinc-300"/>

          <div className="flex items-center gap-3 py-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-primRed p-2">
              <Image src={"/icons/mail.png"} alt={""} width={600} height={600} className="w-full h-full object-contain"/>
            </div>
            <span className="text-xl">Write To Us</span>
          </div>
          <p className="text-zinc-800">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-zinc-800">Emails: customer@exclusive.com</p>
          <p className="text-zinc-800">Emails: support@exclusive.com</p>
        </div>

        <div className="md:w-[65%] w-full sm:p-4">
          <form action="">
            <div className="w-full grid md:grid-cols-3 grid-cols-2 md:grid-rows-1 grid-rows-2 sm:gap-5 gap-2 rounded-md">
              <input type="text" name="name" className="px-4 py-3 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none col-span-1 rounded-md" placeholder="Your Name"/>
              <input type="email" name="email" className="px-4 py-3 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none col-span-1 rounded-md" placeholder="Your Email"/>
              <input type="phone" name="phone" className="px-4 py-3 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none md:col-span-1 col-span-2 rounded-md" placeholder="Your Phone"/>
            </div>
            <textarea name="message" className="sm:my-5 my-2 w-full sm:h-60 h-40 px-4 py-3 bg-[#F5F5F5] placeholder:text-zinc-500 focus:outline-none resize-none rounded-md" placeholder="Your Message"></textarea>
            <div className="w-full flex justify-end">
            <input type="submit" value={"Send Message"} className="px-10 font-medium w-fit bg-primRed text-white py-3 rounded-sm"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage