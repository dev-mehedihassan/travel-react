import React from 'react'
import './destination2.css'
import Image from '../../components/Image'
import destination2 from "../../assets/images/destination2.png"
import destination2Shape from "../../assets/images/destination2_shape.svg"
import Paragraph from '../../components/Paragraph'

const Destination2 = () => {
  return (
    <section id="destination2">
      <div className="container">
        <div className="destination2_wrapper">
          <div className="destination2_img">
            <Image source={destination2} alt="" />
          </div>
          <div className="destination2_content">
            <h4 className="sec_subtitle">FEATURED DESTINATION</h4>
            <h2 className="sec_title">
              TAKE ONLY <br />
              MEMORIES, LEAVE ONLY FOOTPRINTS.
            </h2>
            <Paragraph style={"paragraph"}
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat." />
          </div>
        </div>
      </div>
      <div className="destination2_shape">
        <Image source={destination2Shape} alt={"destination2_shape"} />
      </div>
    </section>
  )
}

export default Destination2