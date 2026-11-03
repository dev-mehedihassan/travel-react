import React from 'react'
import Image from '../components/Image'
import newsletterGalSmall from "../assets/images/newsletter_gal_small.png" 
import newsletterGalLg from "../assets/images/newsletter_gal_lg.png"
import newsletterBox from "../assets/images/newsletter_box.png"
import Form from '../components/Form'


const Newsletter = () => {
  return (
    <section className="py-[100px] pb-[130px] relative z-[555]">
      <div className="container mx-auto px-4">
        <div className="flex gap-[23px] mb-[20px]">
          <div className="w-[275px] h-[240px] rounded-[25px] overflow-hidden">
            <Image source={newsletterGalSmall} alt={"image"} style="w-full h-full object-cover" />
          </div>
          <div className="w-[850px] h-[240px] rounded-[25px] overflow-hidden">
            <Image source={newsletterGalLg} alt={"image"} style="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[514px] h-[482px] rounded-[25px] overflow-hidden">
            <Image source={newsletterBox} alt={"image"} style="w-full h-full object-cover" />
          </div>
          <div className="w-[566px]">
            <h4 className="sec_subtitle !text-primary pt-[80px] pb-[30px]">SUBSCRIBE FOR OFFERS</h4>
            <h2 className="sec_title">
              TO GET ALL NEWS <br />
              SUBSCRIBE OUR NEWSLETTER
            </h2>
            <Form type="newsletter" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter