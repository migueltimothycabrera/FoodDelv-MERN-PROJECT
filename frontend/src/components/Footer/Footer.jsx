import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img src={assets.logo} alt="" className="logo" />
                <p>text msgg nung akoy bata pa mahilig na akong kumain ng masasarap 
                    na pagkain hindi ko alam na hanggang sa pag tanda ko ganon parin 
                    ang aking hangarin kaya ako gumawa ng website para may pang tusto 
                    sa aking pangangailangan charot</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                   <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                   </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Phone: +63 123 456 7890</li>
                        <li>contactus@outlook.com </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright by: miguelgwapings.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer