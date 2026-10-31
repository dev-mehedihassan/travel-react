import React from 'react'
import './footer.css'
import Paragraph from '../../components/Paragraph'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Anchor from '../../components/Anchor';
import { quickLinks, legalStuff, ourTeam, featuredServices } from '../../dummyData/footerData';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_item">
            <h3 className="footer_title">QUICK LINKS</h3>
            <ul className="footer_link">
              {quickLinks.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href}>
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_title">LEGAL STUFF</h3>
            <ul className="footer_link">
              {legalStuff.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href}>
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_title">OUR TEAM</h3>
            <ul className="footer_link">
              {ourTeam.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href}>
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="footer_title">FEATURED SERVICES</h3>
            <ul className="footer_link">
              {featuredServices.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href}>
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright_wrapper">
            <Paragraph style={"paragraph"}
            text="Copyright 2023-2026 example.com" />
            <div className="footer_social_links">
              <Anchor href={"#"} style={"nav_action_item"}>
                <FaMessage />
              </Anchor>
              <div className="nav_action_item">
                <FaLocationArrow />
              </div>
              <div className="nav_action_item">
                <FaRegHeart />
              </div>
              <div className="nav_action_item">
                <FaPlus />
              </div>
            </div>
            <Paragraph style={"paragraph"}
            text="Terms of service Privacy policy ookie policy." />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer