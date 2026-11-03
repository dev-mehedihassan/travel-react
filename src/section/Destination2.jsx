import React from 'react'
import Image from '../components/Image'
import destination2 from "../assets/images/destination2.png"
import destination2Shape from "../assets/images/destination2_shape.svg"
import Paragraph from '../components/Paragraph'

const Destination2 = () => {
  return (
    <section className="py-[70px] bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative z-[55]">
          <div className="w-[508px] h-[523px] rounded-[20px] overflow-hidden">
            <Image source={destination2} alt="" style="w-full h-full object-cover" />
          </div>
          <div className="w-[566px]">
            <h4 className="sec_subtitle !text-white">FEATURED DESTINATION</h4>
            <h2 className="sec_title !text-white my-[30px]">
              TAKE ONLY <br />
              MEMORIES, LEAVE ONLY FOOTPRINTS.
            </h2>
            <Paragraph style="paragraph text-white"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat." />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image source={destination2Shape} alt={"destination2_shape"} style="absolute left-1/2 -bottom-[35px] -translate-x-1/2" />
      </div>
    </section>
  )
}

export default Destination2