import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{ gap: "2rem" }}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH ME</span>
        </div>
        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span key="{plan.name}">{plan.name}</span>
                    <span key="{plan.price}">{plan.price} DT</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature" key={i}>
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div>
                        <span>And more benefits !</span>
                    </div>
                    <button className="btn">Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans