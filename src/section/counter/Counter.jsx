import React from 'react'
import './counter.css'
import counter from '../../assets/images/counter.png'

const Counter = () => {
  return (
    <section id="counter" style={{ backgroundImage: `url(${counter})` }}>
      <div className="container">
        <div className="counter_wrapper">
          <div className="counter_item">
            <h3>800K</h3>
            <span>SUBSCRIBERS</span>
          </div>
          <div className="counter_item">
            <h3>2.3M</h3>
            <span>FOLLOWERS</span>
          </div>
          <div className="counter_item">
            <h3>1.7B</h3>
            <span>LIKES</span>
          </div>
          <div className="counter_item">
            <h3>4.5*</h3>
            <span>RATING</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter