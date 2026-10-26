import React from 'react'
import './gallery.css'
import Image from '../../components/Image'
import packageShape from "../../assets/images/package_shape.png"
import galLarge1 from "../../assets/images/gal_large1.png"
import galLarge2 from "../../assets/images/gal_large2.png"
import galLarge3 from "../../assets/images/gal_large3.png"
import galLarge4 from "../../assets/images/gal_large4.png"
import galSmall1 from "../../assets/images/gal_small1.png"
import galSmall2 from "../../assets/images/gal_small2.png"
import galSmall3 from "../../assets/images/gal_small3.png"
import galSmall4 from "../../assets/images/gal_small4.png"
import Paragraph from '../../components/Paragraph'

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gal_shape">
        <Image source={packageShape} alt={"gal_shape"} />
      </div>
      <div className="container">
        <div className="gal_title">
          <h2 className="sec_title">Most Destinations</h2>
          <Paragraph style={"paragraph"}
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat." />
        </div>
        <div className="gal_wrapper">
          <div className="gal_item">
            <div className="gal_item_inner large">
              <Image source={galLarge1} alt={"img"} />
              <div className="overlay">
                <h3>North America</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div className="gal_item_inner small">
              <Image source={galSmall1} alt={"img"} />
              <div className="overlay">
                <h3>Cambodia</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
          <div className="gal_item">
            <div className="gal_item_inner small">
              <Image source={galSmall2} alt={"img"} />
              <div className="overlay">
                <h3>South America</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div className="gal_item_inner large">
              <Image source={galLarge2} alt={"img"} />
              <div className="overlay">
                <h3>Cape Town</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
          <div className="gal_item">
            <div className="gal_item_inner large">
              <Image source={galLarge3} alt={"img"} />
              <div className="overlay">
                <h3>Europe</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div className="gal_item_inner small">
              <Image source={galSmall3} alt={"img"} />
              <div className="overlay">
                <h3>South Africa</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
          <div className="gal_item">
            <div className="gal_item_inner small">
              <Image source={galSmall4} alt={"img"} />
              <div className="overlay">
                <h3>New York</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
            <div className="gal_item_inner large">
              <Image source={galLarge4} alt={"img"} />
              <div className="overlay">
                <h3>Australia</h3>
                <h6>Nice Place.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery