import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import california from '../../assets/californiaa.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose me?</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt=""></img>
            <span>Street defense system instructor (sds)</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Second level Boxe trainer</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Fitness and bodybuilding instructor</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Physical education teacher</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Reliable Partners</span>
          </div>
        </div>
        <span style={{color: 'var(--gray)', fontweight: "normal",}}>MY PARTNERS</span>
        <div className="partners">
          <img src={california} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons