import React from 'react'
import './message.css'
import messageShape from "../../assets/images/message_shape.png"
import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'

const Message = () => {
  return (
    <section id="message">
      <div className="container">
        <div className="message_mainbox">
          <div className="message_wrapper">
            <h2>How can we help?</h2>
            <Paragraph style={"paragraph"}
            text="Our service team is available every day 24/7 Free diagnostics for
              all types of work." />
            <div className="message_Btn">
              <button>Message Us!</button>
            </div>
          </div>
          <Image source={messageShape} alt={"shape"} style={"message_image"} />
        </div>
      </div>
    </section>
  )
}

export default Message