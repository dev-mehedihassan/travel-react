import React from 'react'
import './brand.css'
import brand1 from "../../assets/images/brand1.png"
import brand2 from "../../assets/images/brand2.png"
import brand3 from "../../assets/images/brand3.png"
import brand4 from "../../assets/images/brand4.png"
import Image from '../../components/Image'

const Brand = () => {
  return (
    <section id="brand">
      <div className="container">
        <div className="brand_wrapper">
          <div className="brand_item">
            <Image source={brand1} alt={"brand"} />
          </div>
          <div className="brand_item">
            <Image source={brand2} alt={"brand"} />
          </div>
          <div className="brand_item">
            <Image source={brand3} alt={"brand"} />
          </div>
          <div className="brand_item">
            <Image source={brand4} alt={"brand"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand