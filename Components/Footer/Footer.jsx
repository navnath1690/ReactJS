import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagramicon from '../Assets/instagram_icon.png'
import pininteresticon from '../Assets/pintester_icon.png'
import whatsappicon from '../Assets/whatsapp_icon.png' 
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagramicon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pininteresticon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsappicon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Rights Reservesd</p>
        </div>
    </div>
  )
}

export default Footer
