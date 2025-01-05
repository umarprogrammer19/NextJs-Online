import Image from "next/image";
import img1 from  "../../../public/img1.jpg";
import img2 from "../../../public/img4.webp";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img5.jpg";


import Link from "next/link";

export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src= {img1} alt="image1" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image alt="/img1.jpg" src={img2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image alt="/img1.jpg" src={img3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image alt= "img4.webp" src={img4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <Image src={img3} alt="image5" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <Image src={img4} alt="image6" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide5" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
      </div>
</>
 );
}