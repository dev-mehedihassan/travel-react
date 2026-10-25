import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav id="navbar">
      <div class="container">
        <div class="nav_wrapper">
          <div class="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div class="menu">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">PAGES</a></li>
              <li><a href="#">TRAVEL</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">LEMENTS</a></li>
            </ul>
          </div>
          <div class="nav_actions">
            <a href="#" class="nav_action_item">
              <i class="fa-solid fa-message"></i>
            </a>
            <div class="nav_action_item">
              <i class="fa-solid fa-location-arrow"></i>
            </div>
            <div class="nav_action_item">
              <i class="fa-solid fa-heart"></i>
            </div>
            <div class="nav_action_item">
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar