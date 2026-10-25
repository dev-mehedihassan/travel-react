import React from 'react'
import logo from '../../assets/images/logo.png'
import './navbar.css'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Image from '../../components/Image';

const data = [
    {
        id: 1,
        label: "home",
        url: "#"
    },
    {
        id: 2,
        label: "pages",
        url: "#"
    },
    {
        id: 3,
        label: "travel",
        url: "#"
    },
    {
        id: 4,
        label: "blog",
        url: "#"
    },
    {
        id: 5,
        label: "shop",
        url: "#"
    },
    {
        id: 6,
        label: "lements",
        url: "#"
    }
]


const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <a href="#">
              <Image source={logo} alt="logo" />
            </a>
          </div>
          <div className="menu">
            <ul>
              {data.map((item, index)=>(
                <li key={index}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))
              }
            </ul>
          </div>
          <div className="nav_actions">
            <a href="#" className="nav_action_item">
              <FaMessage />
            </a>
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar