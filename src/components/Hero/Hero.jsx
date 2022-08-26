import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='Home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "163px": '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}>
          </motion.div>
          <span>The best fitness program you can get</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here i will help you to shape and build your ideal body whether virtually, at your home or at the gym club so you can live up your life to fullest.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={20} start={0} delay='1' preFix="+"/></span>
            <span>PROFESSIONAL CERTIFICATIONS</span>
          </div>
          <div>
            <span><NumberCounter end={120} start={0} delay='0.1' preFix="+"/></span>
            <span>CLIENTS TRAINED</span>
          </div>
          <div>
            <span><NumberCounter end={100} start={0} delay='0.5' preFix="+"/></span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* herobuttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "22rem" }}
          transition={transition}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span><span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero