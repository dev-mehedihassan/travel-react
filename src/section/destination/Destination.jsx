import React from 'react'
import destinationVideoImage from "../../assets/images/destination_video.jpg"
import { FaPlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from '../../components/Image';
import Anchor from '../../components/Anchor';
import Paragraph from '../../components/Paragraph';


const Destination = () => {
  return (
    <section className="pt-[148px] pb-[90px] relative z-[999]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between gap-x-[80px]">
          <div className="w-[560px]">
            <h4 className="sec_subtitle">FEATURED DESTINATION</h4>
            <h2 className="sec_title mt-[31px]">
              CHOOSE <br />
              THE PERFECT ACCOMMODATION.
            </h2>
            <Paragraph style="paragraph text-black mt-[30px]"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat." />
          </div>
          <div className="w-[508px] h-[369px] rounded-[25px] overflow-hidden relative [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
            <Image source={destinationVideoImage} alt="Destination Video" />
            <Anchor href={"#"} style="inline-flex absolute top-1/2 left-1/2 w-[72px] h-[72px] rounded-full bg-white justify-center items-center -translate-x-1/2 -translate-y-1/2 [&_svg]:text-primary [&_svg]:text-[28px]">
                <FaPlay />
            </Anchor>
          </div>
        </div>
        <div className="mt-[70px] py-[54px] px-[64px] border-2 border-primary rounded-[10px] flex items-center justify-between">
          <div className="flex gap-x-[166px]">
            <div className="relative after:absolute after:content-[''] after:top-[10px] after:-right-[80px] after:w-[4px] after:h-[96px] after:bg-map-orange">
              <h4 className="font-montserrat font-bold text-[30px] leading-normal uppercase text-primary">TRAVEL LOCATION</h4>
              <div className="flex items-center gap-x-[15px] mt-[14px] [&_svg]:text-map-orange [&_svg]:text-[20px] [&_svg:last-child]:opacity-50">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <Paragraph style="paragraph text-black" text="Tour Price" />
              <span className="font-montserrat font-bold text-[60px] leading-normal text-primary">
                $125,99
              </span>
            </div>
          </div>
          <Anchor href={"#"} style="py-[16px] px-[45px] bg-map-orange text-white rounded-[15px] font-montserrat font-bold text-[25px] leading-normal uppercase">
            BOOK NOW
          </Anchor>
        </div>
      </div>
    </section>
  )
}

export default Destination