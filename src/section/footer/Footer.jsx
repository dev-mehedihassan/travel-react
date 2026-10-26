import React from 'react'
import './footer.css'
import Paragraph from '../../components/Paragraph'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Anchor from '../../components/Anchor';

const quickLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#",
  },
  {
    id: 3,
    name: "Press",
    href: "#",
  },
  {
    id: 4,
    name: "Blog",
    href: "#",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "#",
  },
];

const legalStuff = [
  {
    id: 1,
    name: "Terms Of Use",
    href: "#",
  },
  {
    id: 2,
    name: "Cookies",
    href: "#",
  },
  {
    id: 3,
    name: "Privacy Policy",
    href: "#",
  },
  {
    id: 4,
    name: "Security Policy",
    href: "#",
  },
  {
    id: 5,
    name: "Money Back Guarantee",
    href: "#",
  },
];

const ourTeam = [
  {
    id: 1,
    name: "Testimonials",
    href: "#",
  },
  {
    id: 2,
    name: "Affiliates",
    href: "#",
  },
  {
    id: 3,
    name: "Partners",
    href: "#",
  },
  {
    id: 4,
    name: "Digital Marketing",
    href: "#",
  },
];

const featuredServices = [
  {
    id: 1,
    name: "Local SEO",
    href: "#",
  },
  {
    id: 2,
    name: "Social Media Marketing",
    href: "#",
  },
  {
    id: 3,
    name: "Marketing Management",
    href: "#",
  },
  {
    id: 4,
    name: "Search Engine Optimization",
    href: "#",
  },
  {
    id: 5,
    name: "Free SEO Analysis",
    href: "#",
  },
];

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