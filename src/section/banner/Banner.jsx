import React from 'react'
import bannerImage from '../../assets/images/banner.png'
import Form from '../../components/Form'
import Paragraph from '../../components/Paragraph';


const Banner = () => {
  return (
    <section className="bg-center bg-no-repeat bg-cover pt-[257px] pb-[200px]" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container mx-auto px-4">
        <div className="max-w-[784px] mx-auto">
          <h1 className="max-w-[700px] font-['Montserrat'] font-bold text-[89px] leading-[1.1] uppercase text-[#FFFFFF]">
            CHOOSE <br />
            THE PERFECT DESTINATIONS.
          </h1>
          <Paragraph style="paragraph mt-[24px]"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation." />
          <Form type="location" />
        </div>
      </div>
    </section>
  )
}

export default Banner