import React from 'react'
import './package.css'
import packageShape from "../../assets/images/package_shape.png"
import Image from '../../components/Image';
import Paragraph from '../../components/Paragraph';
import { GoCheckCircleFill } from "react-icons/go";
import Anchor from '../../components/Anchor';

const features = [
  {
    id: 1,
    text: "International Air Ticket.",
    disabled: false,
  },
  {
    id: 2,
    text: "Daily Continental Breakfast.",
    disabled: false,
  },
  {
    id: 3,
    text: "Lunch And Dinner",
    disabled: false,
  },
  {
    id: 4,
    text: "City Tour with Guide",
    disabled: false,
  },
  {
    id: 5,
    text: "09 Nights Hotel",
    disabled: true,
  },
  {
    id: 6,
    text: "Desert Safari & BBQ Dinner",
    disabled: true,
  },
];

const Package = () => {
  return (
    <section id="package">
      <div className="package_shape">
        <Image source={packageShape} alt="" />
      </div>
      <div className="container">
        <div className="package_title">
          <h2 className="sec_title">Special Package</h2>
          <Paragraph style={"paragraph"}
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat." />
        </div>
        <div className="package_wrapper">
          <div className="package_item">
            <div className="package_item_inner">
              <h3 className="sec_title">STARTER</h3>
              <h3 className="sec_title price">$9</h3>
              <h5>Per Month</h5>
              <ul>
                {features.map((item, index) => (
                  <li key={index}>
                    <GoCheckCircleFill className={item.disabled ? "disable" : ""} />
                    <span>{item.text}</span>
                  </li>
                ))}
                </ul>
              <Anchor href={"#"} style={"package_btn"}>
                Get Started
              </Anchor>
            </div>
            <Paragraph style={"paragraph trial"}
            text="4 Days Trial Available" />
          </div>
          <div className="package_item">
            <div className="package_item_inner">
              <h3 className="sec_title">STANDARD</h3>
              <h3 className="sec_title price">$199</h3>
              <h5>Per Month</h5>
              <ul>
                {features.map((item, index) => (
                  <li key={index}>
                    <GoCheckCircleFill className={item.disabled ? "disable" : ""} />
                    <span>{item.text}</span>
                  </li>
                ))}
                </ul>
              <Anchor href={"#"} style={"package_btn"}>
                Get Started
              </Anchor>
            </div>
            <Paragraph style={"paragraph trial"}
            text="4 Days Trial Available" />
          </div>
          <div className="package_item">
            <div className="package_item_inner">
              <h3 className="sec_title">PREMIUM</h3>
              <h3 className="sec_title price">$499</h3>
              <h5>Per Month</h5>
              <ul>
                {features.map((item, index) => (
                  <li key={index}>
                    <GoCheckCircleFill className={item.disabled ? "disable" : ""} />
                    <span>{item.text}</span>
                  </li>
                ))}
                </ul>
              <Anchor href={"#"} style={"package_btn"}>
                Get Started
              </Anchor>
            </div>
            <Paragraph style={"paragraph trial"}
            text="4 Days Trial Available" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Package