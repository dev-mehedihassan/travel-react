import React from 'react'
import logo from '../../assets/images/logo.png'
import { FaMessage } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Image from '../../components/Image';
import Anchor from '../../components/Anchor';
import { menuData } from '../../dummyData/menuData';



const Navbar = () => {
  return (
    <nav className="absolute top-[36px] left-0 w-full bg-white py-[15px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="w-[20%]">
            <Anchor href="/">
              <Image source={logo} alt="logo" />
            </Anchor>
          </div>
          <div className="w-[60%]">
            <ul className="flex items-center justify-center gap-x-[45px]">
              {menuData.map((item, index)=>(
                <li key={index}>
                  <Anchor href={item.url} style="font-['Montserrat'] font-medium text-[15px] leading-normal uppercase text-[#036E8A]">
                    {item.label}
                  </Anchor>
                </li>
              ))
              }
            </ul>
          </div>
          <div className="w-[20%] flex justify-end gap-x-[8px]">
            <Anchor href={"#"} style="inline-flex w-[23px] h-[23px] rounded-full border border-[#036E8A] items-center justify-center [&_svg]:text-[#036E8A] [&_svg]:text-[10px]">
              <FaMessage />
            </Anchor>
            <div className="inline-flex w-[23px] h-[23px] rounded-full border border-[#036E8A] items-center justify-center [&_svg]:text-[#036E8A] [&_svg]:text-[10px]">
              <FaLocationArrow />
            </div>
            <div className="inline-flex w-[23px] h-[23px] rounded-full border border-[#036E8A] items-center justify-center [&_svg]:text-[#036E8A] [&_svg]:text-[10px]">
              <FaRegHeart />
            </div>
            <div className="inline-flex w-[23px] h-[23px] rounded-full border border-[#036E8A] items-center justify-center [&_svg]:text-[#036E8A] [&_svg]:text-[10px]">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar