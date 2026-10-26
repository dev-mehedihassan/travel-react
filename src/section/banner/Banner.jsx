import React from 'react'
import './banner.css'
import bannerImage from '../../assets/images/banner.png'
import Form from '../../components/Form'
import Paragraph from '../../components/Paragraph';


const Banner = () => {
  return (
    <section id="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container">
        <div className="banner_wrapper">
          <h1>
            CHOOSE <br />
            THE PERFECT DESTINATIONS.
          </h1>
          <Paragraph style={"paragraph"}
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation." />
          <Form type="location" />
        </div>
      </div>
    </section>
  )
}

export default Banner