import React from 'react'
import packageShape from "../assets/images/package_shape.png"
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';
import { GoCheckCircleFill } from "react-icons/go";
import Anchor from '../components/Anchor';
import { features } from '../dummyData/packageData';

const Package = () => {
  return (
    <section className="pb-[114px]">
      <div className="relative">
        <Image 
        source={packageShape} 
        alt=""
        style="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container mx-auto px-4">
        <div className="relative z-[999] text-center">
          <h2 className="font-montserrat font-bold text-[60px] leading-normal uppercase text-primary mb-[23px]">Special Package</h2>
          <Paragraph style="paragraph max-w-[830px] mx-auto text-black"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat." />
        </div>
        <div className="mt-[90px] flex justify-between flex-wrap">
          <div className="w-[356px] relative z-[999]">
            <div className="group border border-primary rounded-[12px] p-[36px_36px_76px_36px] relative transition-all duration-300 hover:border-map-orange">
              <h3 className="font-montserrat font-bold text-[40px] leading-normal uppercase text-primary transition-all duration-300 group-hover:text-map-orange">STARTER</h3>
              <h3 className="font-montserrat font-bold text-[60px] leading-normal uppercase text-primary transition-all duration-300 group-hover:text-map-orange">$9</h3>
              <h5 className="font-montserrat font-normal text-[25px] leading-normal text-primary mt-[6px] transition-all duration-300 group-hover:text-map-orange">Per Month</h5>
              <ul className="mt-[40px] flex flex-col gap-y-[15px]">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-x-[13px]">
                    <GoCheckCircleFill className={`text-primary text-[18px] transition-all duration-300 group-hover:text-map-orange ${item.disabled ? "opacity-50" : ""}`} />
                    <span className="font-montserrat font-normal text-[18px] leading-normal text-black">
                      {item.text}
                    </span>
                  </li>
                ))}
                </ul>
              <Anchor href={"#"} style="inline-block py-[14px] px-[26px] rounded-[15px] absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 translate-y-1/2 bg-primary group-hover:bg-map-orange text-white font-montserrat font-medium text-[20px] leading-normal uppercase text-center transition-all duration-300">
                Get Started
              </Anchor>
            </div>
            <Paragraph style="paragraph text-center mt-[42px] text-black"
            text="4 Days Trial Available" />
          </div>
          <div className="w-[356px] relative z-[999]">
            <div className="group border border-primary rounded-[12px] p-[36px_36px_76px_36px] relative transition-all duration-300 hover:border-map-orange">
              <h3 className="font-montserrat font-bold text-[40px] leading-normal uppercase text-primary transition-all duration-300 group-hover:text-map-orange">STANDARD</h3>
              <h3 className="font-montserrat font-bold text-[60px] leading-normal uppercase text-primary transition-all duration-300 group-hover:text-map-orange">$199</h3>
              <h5 className="font-montserrat font-normal text-[25px] leading-normal text-primary mt-[6px] transition-all duration-300 group-hover:text-map-orange">Per Month</h5>
              <ul className="mt-[40px] flex flex-col gap-y-[15px]">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-x-[13px]">
                    <GoCheckCircleFill className={`text-primary text-[18px] transition-all duration-300 group-hover:text-map-orange ${item.disabled ? "opacity-50" : ""}`} />
                    <span className="font-montserrat font-normal text-[18px] leading-normal text-black">
                      {item.text}
                    </span>
                  </li>
                ))}
                </ul>
              <Anchor href={"#"} style="inline-block py-[14px] px-[26px] rounded-[15px] absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 translate-y-1/2 bg-primary group-hover:bg-map-orange text-white font-montserrat font-medium text-[20px] leading-normal uppercase text-center transition-all duration-300">
                Get Started
              </Anchor>
            </div>
            <Paragraph style="paragraph text-center mt-[42px] text-black"
            text="4 Days Trial Available" />
          </div>
          <div className="w-[356px] relative z-[999]">
            <div className="group border border-primary rounded-[12px] p-[36px_36px_76px_36px] relative transition-all duration-300 hover:border-map-orange">
              <h3 className="font-montserrat font-bold text-[40px] leading-normal uppercase text-primary transition-all duration-300 group-hover:text-map-orange">PREMIUM</h3>
              <h3 className="font-montserrat font-bold text-[60px] leading-normal uppercase text-primary transition-all duration-300 group-hover:text-map-orange">$499</h3>
              <h5 className="font-montserrat font-normal text-[25px] leading-normal text-primary mt-[6px] transition-all duration-300 group-hover:text-map-orange">Per Month</h5>
              <ul className="mt-[40px] flex flex-col gap-y-[15px]">
                {features.map((item, index) => (
                  <li key={index} className="flex items-center gap-x-[13px]">
                    <GoCheckCircleFill className={`text-primary text-[18px] transition-all duration-300 group-hover:text-map-orange ${item.disabled ? "opacity-50" : ""}`} />
                    <span className="font-montserrat font-normal text-[18px] leading-normal text-black">
                      {item.text}
                    </span>
                  </li>
                ))}
                </ul>
              <Anchor href={"#"} style="inline-block py-[14px] px-[26px] rounded-[15px] absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 translate-y-1/2 bg-primary group-hover:bg-map-orange text-white font-montserrat font-medium text-[20px] leading-normal uppercase text-center transition-all duration-300">
                Get Started
              </Anchor>
            </div>
            <Paragraph style="paragraph text-center mt-[42px] text-black"
            text="4 Days Trial Available" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Package