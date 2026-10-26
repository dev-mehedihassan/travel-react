import React from 'react'
import './review.css'
import Image from '../../components/Image'
import packageShape from "../../assets/images/package_shape.png"
import Paragraph from '../../components/Paragraph'
import customer1 from "../../assets/images/customer1.png"
import customer2 from "../../assets/images/customer2.png"
import customer3 from "../../assets/images/customer3.png"
import customer4 from "../../assets/images/customer4.png"
import customer5 from "../../assets/images/customer5.png"
import customer6 from "../../assets/images/customer6.png"
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section id="review">
      <div className="review_shape">
        <Image source={packageShape} alt={"gal_shape"} />
      </div>
      <div className="container review_container">
        <div className="review_heading">
          <h2 className="sec_title">CUSTOMER WORDS</h2>
          <Paragraph style={"paragraph"}
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat." />
        </div>
        <div className="review_wrapper">
          <div className="review_item">
            <div className="review_img">
              <Image source={customer1} alt={""} />
            </div>
            <div className="review_content">
              <h4>Victoria Wotton</h4>
              <h5>Traveler, Guide</h5>
              <div className="review_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style={"paragraph"}
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="review_item">
            <div className="review_img">
              <Image source={customer2} alt={""} />
            </div>
            <div className="review_content">
              <h4>Victoria Wotton</h4>
              <h5>Traveler, Guide</h5>
              <div className="review_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style={"paragraph"}
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="review_item">
            <div className="review_img">
              <Image source={customer3} alt={""} />
            </div>
            <div className="review_content">
              <h4>Victoria Wotton</h4>
              <h5>Traveler, Guide</h5>
              <div className="review_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style={"paragraph"}
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="review_item">
            <div className="review_img">
              <Image source={customer4} alt={""} />
            </div>
            <div className="review_content">
              <h4>Victoria Wotton</h4>
              <h5>Traveler, Guide</h5>
              <div className="review_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style={"paragraph"}
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="review_item">
            <div className="review_img">
              <Image source={customer5} alt={""} />
            </div>
            <div className="review_content">
              <h4>Victoria Wotton</h4>
              <h5>Traveler, Guide</h5>
              <div className="review_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style={"paragraph"}
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
          <div className="review_item">
            <div className="review_img">
              <Image source={customer6} alt={""} />
            </div>
            <div className="review_content">
              <h4>Victoria Wotton</h4>
              <h5>Traveler, Guide</h5>
              <div className="review_rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <Paragraph style={"paragraph"}
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review