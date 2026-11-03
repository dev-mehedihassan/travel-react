import React from 'react'
import counter from '../../assets/images/counter.png'

const Counter = () => {
  return (
    <section className="pt-[90px] pb-[120px] bg-center bg-no-repeat bg-cover relative z-[555]" style={{ backgroundImage: `url(${counter})` }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="w-[22%]">
            <h3 className="font-montserrat font-bold text-[55px] leading-normal text-[#707070]">800K</h3>
            <span className="font-montserrat font-normal text-[30px] leading-normal text-[#707070]">SUBSCRIBERS</span>
          </div>
          <div className="w-[22%]">
            <h3 className="font-montserrat font-bold text-[55px] leading-normal text-[#707070]">2.3M</h3>
            <span className="font-montserrat font-normal text-[30px] leading-normal text-[#707070]">FOLLOWERS</span>
          </div>
          <div className="w-[22%]">
            <h3 className="font-montserrat font-bold text-[55px] leading-normal text-[#707070]">1.7B</h3>
            <span className="font-montserrat font-normal text-[30px] leading-normal text-[#707070]">LIKES</span>
          </div>
          <div className="w-[22%]">
            <h3 className="font-montserrat font-bold text-[55px] leading-normal text-[#707070]">4.5*</h3>
            <span className="font-montserrat font-normal text-[30px] leading-normal text-[#707070]">RATING</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter