import React from 'react'
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
      <div className="container mx-auto px-4">
        <div className="pb-[98px] flex justify-between gap-x-[80px]">
          <div className="footer_item">
            <h3 className="font-montserrat font-bold text-[24px] leading-normal uppercase text-primary mb-[70px] relative after:absolute after:content-[''] after:-bottom-[32px] after:left-0 after:w-[142px] after:h-[2px] after:bg-primary">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-y-[25px]">
              {quickLinks.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href} style="font-montserrat font-normal text-[20px] leading-normal capitalize text-[#262525]">
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="font-montserrat font-bold text-[24px] leading-normal uppercase text-primary mb-[70px] relative after:absolute after:content-[''] after:-bottom-[32px] after:left-0 after:w-[142px] after:h-[2px] after:bg-primary">
              LEGAL STUFF
            </h3>
            <ul className="flex flex-col gap-y-[25px]">
              {legalStuff.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href} style="font-montserrat font-normal text-[20px] leading-normal capitalize text-[#262525]">
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="font-montserrat font-bold text-[24px] leading-normal uppercase text-primary mb-[70px] relative after:absolute after:content-[''] after:-bottom-[32px] after:left-0 after:w-[142px] after:h-[2px] after:bg-primary">
              OUR TEAM
            </h3>
            <ul className="flex flex-col gap-y-[25px]">
              {ourTeam.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href} style="font-montserrat font-normal text-[20px] leading-normal capitalize text-[#262525]">
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item">
            <h3 className="font-montserrat font-bold text-[24px] leading-normal uppercase text-primary mb-[70px] relative after:absolute after:content-[''] after:-bottom-[32px] after:left-0 after:w-[142px] after:h-[2px] after:bg-primary">
              FEATURED SERVICES
            </h3>
            <ul className="flex flex-col gap-y-[25px]">
              {featuredServices.map((item, index) => (
                <li key={index}>
                    <Anchor href={item.href} style="font-montserrat font-normal text-[20px] leading-normal capitalize text-[#262525]">
                        {item.name}
                    </Anchor>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-[42px] bg-map-orange">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Paragraph style="paragraph text-white"
            text="Copyright 2023-2026 example.com" />
            <div className="flex justify-center items-center gap-[10px]">
              <Anchor href={"#"} style="w-[29px] h-[29px] border border-[#E2E0E0] rounded-full flex items-center justify-center [&_svg]:text-[12px] [&_svg]:text-white">
                <FaMessage />
              </Anchor>
              <div className="w-[29px] h-[29px] border border-[#E2E0E0] rounded-full flex items-center justify-center [&_svg]:text-[12px] [&_svg]:text-white cursor-pointer">
                <FaLocationArrow />
              </div>
              <div className="w-[29px] h-[29px] border border-[#E2E0E0] rounded-full flex items-center justify-center [&_svg]:text-[12px] [&_svg]:text-white cursor-pointer">
                <FaRegHeart />
              </div>
              <div className="w-[29px] h-[29px] border border-[#E2E0E0] rounded-full flex items-center justify-center [&_svg]:text-[12px] [&_svg]:text-white cursor-pointer">
                <FaPlus />
              </div>
            </div>
            <Paragraph style="paragraph text-white"
            text="Terms of service Privacy policy ookie policy." />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer