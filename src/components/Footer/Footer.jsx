import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={whatsapp} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer