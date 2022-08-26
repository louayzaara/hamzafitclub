import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>Explore My</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape you</span>
            </div>

            <div className="program-categroies">
                {programsData.map((program, i)=>(
                    <div className="category" key={i}>
                        {program.image}
                        <span key="{program.heading}">{program.heading}</span>
                        <span key="{program.details}">{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span><img src={RightArrow} alt="" />
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Programs