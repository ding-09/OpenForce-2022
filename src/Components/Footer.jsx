import React from 'react'
import './styles/Footer.css'
import Logo from './assets/Logo-footer.png'
import YouTube from './assets/YouTube.svg'
import Discord from './assets/Discord.svg'
import Instagram from './assets/Instagram.svg'
import Twitter from './assets/Twitter.svg'
import LinkedIn from './assets/LinkedIn.svg'
import Github from './assets/Github.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div id="Footer">
            <div className="footer-main">
                <ul className="footer-row-cont">
                    <li>
                        <div className="footer-logo">
                            <a href="#" target="_blank"><img className="icon" src={Logo} alt=""/></a>
                        </div>
                        <div className="social-medias">
                            <div className="text">Social Media</div>
                            <div className="icons">
                                <a href="https://www.youtube.com/c/Codefloworg" target="_blank"><img src={YouTube} alt=""/></a>
                                <a href="https://discord.gg/XYWMBqCXPJ" target="_blank"><img src={Discord} alt=""/></a>
                                <a href="https://in.linkedin.com/company/codefloworg" target="_blank"><img src={LinkedIn} alt=""/></a>
                                <a href="https://github.com/CodeFlowOrg" target="_blank"><img src={Github} alt=""/></a>
                                <a href="https://www.instagram.com/codefloworg/" target="_blank"><img src={Instagram} alt=""/></a>
                                <a href="https://twitter.com/codefloworg" target="_blank"><img src={Twitter} alt=""/></a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="links-heading">Company</div>
                        <ul>
                            <div className="footer-links"><a href="#aboutusLink">About Us</a></div>
                            <div className="footer-links"><a href="#">Our Service</a></div>
                            <div className="footer-links"><a href="#">Privacy Policy</a></div>
                            <div className="footer-links"><a href="#">Affiliate Program</a></div>
                        </ul>
                    </li>
                    <li>
                        <div className="links-heading">Get Help</div>
                        <ul>
                            <div className="footer-links"><a href="#faqclick">FAQs</a></div>
                            <div className="footer-links"><a href="#">CodeFlow</a></div>
                            <div className="footer-links"><a href="#">Message</a></div>
                            <div className="footer-links"><a href="#">Payment Details</a></div>
                        </ul>
                    </li>
                    <li>
                        <div className="links-heading">Prize</div>
                        <ul>
                            <div className="footer-links"><a href="#">Watch</a></div>
                            <div className="footer-links"><a href="#">Bagpack</a></div>
                            <div className="footer-links"><a href="#">Shoes</a></div>
                            <div className="footer-links"><a href="#">Dress</a></div>
                        </ul>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="footer-end">
                Made with ❤️ by CodeFlow    
            </div>
            <div className="footer-bg-particles">
                {/* set data-eff to 0 for these particles to stop animating on mouse move */}
                <img className="bg-crl" id="bg-ft-cr" data-eff="5" alt="" />
                <img className="bg-icn" id="bg-ft-i1" data-eff="10" alt=""/>
                <img className="bg-icn" id="bg-ft-i2" data-eff="-15" alt=""/>
            </div>
        </div>
    )
}

export default Footer
