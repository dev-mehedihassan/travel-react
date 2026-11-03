import React from 'react'
import brand1 from "../assets/images/brand1.png"
import brand2 from "../assets/images/brand2.png"
import brand3 from "../assets/images/brand3.png"
import brand4 from "../assets/images/brand4.png"
import Image from '../components/Image'

const Brand = () => {
  return (
    <section className="pb-[120px] relative z-[555]">
      <div className="container mx-auto px-4">
        <div className="border-[3px] border-primary rounded-[15px] p-[70px] flex justify-between items-center">
          <div className="relative after:absolute after:content-[''] after:top-1/2 after:-right-[63px] after:-translate-y-1/2 after:w-[3px] after:h-[73px] after:rounded-[5px] after:bg-primary last:after:bg-transparent">
            <Image source={brand1} alt={"brand"} />
          </div>
          <div className="relative after:absolute after:content-[''] after:top-1/2 after:-right-[63px] after:-translate-y-1/2 after:w-[3px] after:h-[73px] after:rounded-[5px] after:bg-primary last:after:bg-transparent">
            <Image source={brand2} alt={"brand"} />
          </div>
          <div className="relative after:absolute after:content-[''] after:top-1/2 after:-right-[63px] after:-translate-y-1/2 after:w-[3px] after:h-[73px] after:rounded-[5px] after:bg-primary last:after:bg-transparent">
            <Image source={brand3} alt={"brand"} />
          </div>
          <div className="relative after:absolute after:content-[''] after:top-1/2 after:-right-[63px] after:-translate-y-1/2 after:w-[3px] after:h-[73px] after:rounded-[5px] after:bg-primary last:after:bg-transparent">
            <Image source={brand4} alt={"brand"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand