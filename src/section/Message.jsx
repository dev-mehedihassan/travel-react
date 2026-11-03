import React from 'react'
import messageShape from "../assets/images/message_shape.png"
import Image from '../components/Image'
import Paragraph from '../components/Paragraph'

const Message = () => {
  return (
    <section className="pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="p-[85px] rounded-[50px] bg-primary relative overflow-hidden">
          <div className="relative z-[555]">
            <h2 className="font-montserrat font-bold text-[70px] leading-normal text-center text-white relative mb-[135px] after:absolute after:content-[''] after:-bottom-[60px] after:left-1/2 after:-translate-x-1/2 after:w-[778px] after:h-[3px] after:rounded-[8px] after:bg-white">
            How can we help?
            </h2>
            <Paragraph 
            style="paragraph font-medium text-[30px] text-center text-white relative max-w-[661px] mx-auto mb-[103px] after:absolute after:content-[''] after:-bottom-[60px] after:left-1/2 after:-translate-x-1/2 after:w-[441px] after:h-[3px] after:rounded-[8px] after:bg-white"
            text="Our service team is available every day 24/7 Free diagnostics for all types of work." 
            />
            <div className="text-center">
              <button className="py-[21px] px-[67px] border-none rounded-[16px] bg-map-orange font-montserrat font-medium text-[30px] leading-normal capitalize cursor-pointer text-white">Message Us!</button>
            </div>
          </div>
          <Image source={messageShape} alt={"shape"} style="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  )
}

export default Message