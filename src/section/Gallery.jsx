import React from 'react'
import Image from '../components/Image'
import packageShape from "../assets/images/package_shape.png"
import galLarge1 from "../assets/images/gal_large1.png"
import galLarge2 from "../assets/images/gal_large2.png"
import galLarge3 from "../assets/images/gal_large3.png"
import galLarge4 from "../assets/images/gal_large4.png"
import galSmall1 from "../assets/images/gal_small1.png"
import galSmall2 from "../assets/images/gal_small2.png"
import galSmall3 from "../assets/images/gal_small3.png"
import galSmall4 from "../assets/images/gal_small4.png"
import Paragraph from '../components/Paragraph'

const Gallery = () => {
  return (
    <section className="py-[110px] relative z-[555]">
      <div className="relative">
        <Image source={packageShape} alt={"gal_shape"} style="absolute -top-[50px] left-1/2 -translate-x-1/2" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="sec_title !text-package-price mb-[23px]">Most Destinations</h2>
          <Paragraph style="paragraph max-w-[830px] mx-auto text-black text-center"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat." />
        </div>
        <div className="mt-[106px] flex gap-[16px]">
          <div className="w-[275px] flex flex-col gap-y-[17px]">
            <div className="w-full h-[407px] rounded-[28px] overflow-hidden relative">
              <Image source={galLarge1} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">North America</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
            <div className="w-full h-[256px] rounded-[28px] overflow-hidden relative">
              <Image source={galSmall1} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">Cambodia</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
          </div>
          <div className="w-[275px] flex flex-col gap-y-[17px]">
            <div className="w-full h-[256px] rounded-[28px] overflow-hidden relative">
              <Image source={galSmall2} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">South America</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
            <div className="w-full h-[407px] rounded-[28px] overflow-hidden relative">
              <Image source={galLarge2} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">Cape Town</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
          </div>
          <div className="w-[275px] flex flex-col gap-y-[17px]">
            <div className="w-full h-[407px] rounded-[28px] overflow-hidden relative">
              <Image source={galLarge3} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">Europe</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
            <div className="w-full h-[256px] rounded-[28px] overflow-hidden relative">
              <Image source={galSmall3} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">South Africa</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
          </div>
          <div className="w-[275px] flex flex-col gap-y-[17px]">
            <div className="w-full h-[256px] rounded-[28px] overflow-hidden relative">
              <Image source={galSmall4} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">New York</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
            <div className="w-full h-[407px] rounded-[28px] overflow-hidden relative">
              <Image source={galLarge4} alt={"img"} style="w-full h-full object-cover" />
              <div className="absolute left-[30px] bottom-[30px] w-auto">
                <h3 className="font-montserrat font-bold text-[25px] leading-normal text-[#707070]">Australia</h3>
                <h6 className="font-montserrat font-normal text-[20px] leading-normal text-[#707070]">Nice Place.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery