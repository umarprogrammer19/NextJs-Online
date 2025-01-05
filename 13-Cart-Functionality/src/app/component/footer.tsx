
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () =>{
    return(
        <div className="bg-[#E4D7CA]">
<footer className="text-gray-600 body-font max-w-full">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-xl text-gray-900 tracking-widest  mb-3">
     COMPANY
        </h2>
        <nav className="list-none mb-10 text-sm">
          <li>
            <Link  href = {"#"} className="text-gray-600 hover:text-gray-800">Home</Link>
          </li>
          <li>
          <Link  href= {"#"}    className="text-gray-600 hover:text-gray-800">About us</Link>
          </li>
          <li>
            <Link  href= {"#"} className="text-gray-600 hover:text-gray-800">Contact us</Link>
          </li>
        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-gray-900 tracking-widest text-xl Xmb-3">
  SERVICES
        </h2>
        <nav className="list-none mb-10 text-sm">
          <li>
          <Link  href = {"#"}  className="text-gray-600 hover:text-gray-800">Branding</Link>
          </li>
          <li>
          <Link  href = {"#"} className="text-gray-600 hover:text-gray-800">Design</Link>
          </li>
          <li>
          <Link  href = {"#"}  className="text-gray-600 hover:text-gray-800">Marketing</Link>
          </li>
          <li>
          <Link  href = {"#"}  className="text-gray-600 hover:text-gray-800">Advertisement</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-lg text-gray-900 tracking-widest mb-3">
    Legal
        </h2>
        <nav className="list-none mb-10 text-sm">
          <li>
          <Link  href = {"#"} className="text-gray-600 hover:text-gray-800">Terms of use</Link>
          </li>
          <li>
          <Link  href = {"#"}  className="text-gray-600 hover:text-gray-800">Privacy policy</Link>
          </li>
          <li>
          <Link  href = {"#"} className="text-gray-600 hover:text-gray-800">Cookie Policy</Link>
          </li>
        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
    Enter your Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="mt-4 sm:mt-6 md:mt-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-slate-500 rounded">
  Get Notified
</button>

        </div>
      
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

      <span className="ml-3 text-xl">Asifa M.Qasim</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Asifa M.Qasim ❤️
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href = {'https://www.facebook.com/profile.php?id=61556456222532'}className="text-gray-500 mr-3 w-5 h-5 hover:text-blue-500">
       <FaFacebook className='hover:text-blue-500'/>
      </Link>
      
      <Link target='_blank' href = {'https://github.com/AsfaQasim?tab=repositories'}className="text-gray-500">
     
       <FaGithub className='hover:text-gray-700'/>
      </Link>
      <Link target='_blank' href = {'https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className="text-gray-500 ml-3 w-5 h-5">
     
       <FaLinkedin className='hover:text-blue-500'/>
      </Link>
    </span>
  </div>
  </div>
</footer>

        </div>
    )
}
export default Footer