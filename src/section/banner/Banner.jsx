import React from 'react'
import './banner.css'
import bannerImage from '../../assets/images/banner.png'
import { IoIosSearch } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";


const Banner = () => {
  return (
    <section id="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container">
        <div className="banner_wrapper">
          <h1>
            CHOOSE <br />
            THE PERFECT DESTINATIONS.
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
          </p>
          <form>
            <div className="form_inner">
              <div className="banner_search">
                <input type="text" placeholder="Enter Your Location" />
                <IoIosSearch />
              </div>
              <div className="map_circle">
                <LuMapPin />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Banner