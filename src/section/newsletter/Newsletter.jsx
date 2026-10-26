import React from 'react'
import './newsletter.css'
import Image from '../../components/Image'
import newsletterGalSmall from "../../assets/images/newsletter_gal_small.png" 
import newsletterGalLg from "../../assets/images/newsletter_gal_lg.png"
import newsletterBox from "../../assets/images/newsletter_box.png"
import Form from '../../components/Form'


const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <div className="newsletter_gal">
          <div className="newsletter_gal_item">
            <Image source={newsletterGalSmall} alt={"image"} />
          </div>
          <div className="newsletter_gal_item">
            <Image source={newsletterGalLg} alt={"image"} />
          </div>
        </div>
        <div className="newsletter_box">
          <div className="newsletter_box_img">
            <Image source={newsletterBox} alt={"image"} />
          </div>
          <div className="newsletter_box_form">
            <h4 className="sec_subtitle">SUBSCRIBE FOR OFFERS</h4>
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