import React from 'react'
import logo from '../../assets/images/logo.png'
import './navbar.css'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">PAGES</a></li>
              <li><a href="#">TRAVEL</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">LEMENTS</a></li>
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