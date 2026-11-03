import React from 'react'
import Image from '../components/Image'
import packageShape from "../assets/images/package_shape.png"
import Paragraph from '../components/Paragraph'
import customer1 from "../assets/images/customer1.png"
import customer2 from "../assets/images/customer2.png"
import customer3 from "../assets/images/customer3.png"
import customer4 from "../assets/images/customer4.png"
import customer5 from "../assets/images/customer5.png"
import customer6 from "../assets/images/customer6.png"
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="pb-[155px]">
      <div className="relative">
        <Image source={packageShape} alt={"gal_shape"} style="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%]" />
      </div>
      <div className="container mx-auto px-4 relative z-[555]">
        <div className="text-center">
          <h2 className="sec_title !text-package-price mb-[23px]">CUSTOMER WORDS</h2>
          <Paragraph style="paragraph max-w-[830px] mx-auto text-black text-center"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat." />
        </div>
        <div className="mt-[110px] flex flex-wrap gap-x-[72px] gap-y-[77px]">
          <div className="group w-[538px] h-[400px] rounded-[20px] p-[40px_59px] shadow-[-1px_0_17px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 odd:hover:bg-primary even:hover:bg-map-orange">
            <div className="w-[113px] h-[113px] mx-auto border border-[#707070] rounded-full overflow-hidden">
              <Image source={customer1} alt={""} style="w-full h-full object-cover" />
            </div>
            <div className="mt-[26px] text-center">
              <h4 className="font-montserrat font-medium text-[25px] leading-normal text-primary group-hover:text-white transition-all duration-300">Victoria Wotton</h4>
              <h5 className="font-montserrat font-bold text-[20px] leading-normal text-[#262525] group-hover:text-white transition-all duration-300">Traveler, Guide</h5>
              <div className="my-[8px_20px] text-map-orange flex justify-center items-center gap-[6px] group-hover:text-white transition-all duration-300 [&_svg]:text-map-orange group-hover:[&_svg]:text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style="paragraph text-black group-hover:text-white transition-all duration-300"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="group w-[538px] h-[400px] rounded-[20px] p-[40px_59px] shadow-[-1px_0_17px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 odd:hover:bg-primary even:hover:bg-map-orange">
            <div className="w-[113px] h-[113px] mx-auto border border-[#707070] rounded-full overflow-hidden">
              <Image source={customer2} alt={""} style="w-full h-full object-cover" />
            </div>
            <div className="mt-[26px] text-center">
              <h4 className="font-montserrat font-medium text-[25px] leading-normal text-primary group-hover:text-white transition-all duration-300">Victoria Wotton</h4>
              <h5 className="font-montserrat font-bold text-[20px] leading-normal text-[#262525] group-hover:text-white transition-all duration-300">Traveler, Guide</h5>
              <div className="my-[8px_20px] text-map-orange flex justify-center items-center gap-[6px] group-hover:text-white transition-all duration-300 [&_svg]:text-map-orange group-hover:[&_svg]:text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style="paragraph text-black group-hover:text-white transition-all duration-300"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="group w-[538px] h-[400px] rounded-[20px] p-[40px_59px] shadow-[-1px_0_17px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 odd:hover:bg-primary even:hover:bg-map-orange">
            <div className="w-[113px] h-[113px] mx-auto border border-[#707070] rounded-full overflow-hidden">
              <Image source={customer3} alt={""} style="w-full h-full object-cover" />
            </div>
            <div className="mt-[26px] text-center">
              <h4 className="font-montserrat font-medium text-[25px] leading-normal text-primary group-hover:text-white transition-all duration-300">Victoria Wotton</h4>
              <h5 className="font-montserrat font-bold text-[20px] leading-normal text-[#262525] group-hover:text-white transition-all duration-300">Traveler, Guide</h5>
              <div className="my-[8px_20px] text-map-orange flex justify-center items-center gap-[6px] group-hover:text-white transition-all duration-300 [&_svg]:text-map-orange group-hover:[&_svg]:text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style="paragraph text-black group-hover:text-white transition-all duration-300"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="group w-[538px] h-[400px] rounded-[20px] p-[40px_59px] shadow-[-1px_0_17px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 odd:hover:bg-primary even:hover:bg-map-orange">
            <div className="w-[113px] h-[113px] mx-auto border border-[#707070] rounded-full overflow-hidden">
              <Image source={customer4} alt={""} style="w-full h-full object-cover" />
            </div>
            <div className="mt-[26px] text-center">
              <h4 className="font-montserrat font-medium text-[25px] leading-normal text-primary group-hover:text-white transition-all duration-300">Victoria Wotton</h4>
              <h5 className="font-montserrat font-bold text-[20px] leading-normal text-[#262525] group-hover:text-white transition-all duration-300">Traveler, Guide</h5>
              <div className="my-[8px_20px] text-map-orange flex justify-center items-center gap-[6px] group-hover:text-white transition-all duration-300 [&_svg]:text-map-orange group-hover:[&_svg]:text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style="paragraph text-black group-hover:text-white transition-all duration-300"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="group w-[538px] h-[400px] rounded-[20px] p-[40px_59px] shadow-[-1px_0_17px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 odd:hover:bg-primary even:hover:bg-map-orange">
            <div className="w-[113px] h-[113px] mx-auto border border-[#707070] rounded-full overflow-hidden">
              <Image source={customer5} alt={""} style="w-full h-full object-cover" />
            </div>
            <div className="mt-[26px] text-center">
              <h4 className="font-montserrat font-medium text-[25px] leading-normal text-primary group-hover:text-white transition-all duration-300">Victoria Wotton</h4>
              <h5 className="font-montserrat font-bold text-[20px] leading-normal text-[#262525] group-hover:text-white transition-all duration-300">Traveler, Guide</h5>
              <div className="my-[8px_20px] text-map-orange flex justify-center items-center gap-[6px] group-hover:text-white transition-all duration-300 [&_svg]:text-map-orange group-hover:[&_svg]:text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style="paragraph text-black group-hover:text-white transition-all duration-300"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="group w-[538px] h-[400px] rounded-[20px] p-[40px_59px] shadow-[-1px_0_17px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 odd:hover:bg-primary even:hover:bg-map-orange">
            <div className="w-[113px] h-[113px] mx-auto border border-[#707070] rounded-full overflow-hidden">
              <Image source={customer6} alt={""} style="w-full h-full object-cover" />
            </div>
            <div className="mt-[26px] text-center">
              <h4 className="font-montserrat font-medium text-[25px] leading-normal text-primary group-hover:text-white transition-all duration-300">Victoria Wotton</h4>
              <h5 className="font-montserrat font-bold text-[20px] leading-normal text-[#262525] group-hover:text-white transition-all duration-300">Traveler, Guide</h5>
              <div className="my-[8px_20px] text-map-orange flex justify-center items-center gap-[6px] group-hover:text-white transition-all duration-300 [&_svg]:text-map-orange group-hover:[&_svg]:text-white">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style="paragraph text-black group-hover:text-white transition-all duration-300"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review