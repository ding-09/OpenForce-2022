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
                    <li className='footerfirst'>
                        <div className="footer-logo">
                            <a href="#" target="_blank"><img className="icon" src={Logo} alt="" style={{height:"235px"}}/></a>
                        </div>
                        {/* <div className="social-medias">
                            <div className="text"></div>
                            <div className="icons">
                                
                            </div>
                        </div> */}
                        <div style={{fontSize:"25px",textAlign:"center"}}>
                        OpenSource meets its<br/>Contributor Force!
                        </div>
                    </li>
                    <li>
                        <div className="links-heading">Social Media</div>
                        <ul className='socalmedia'>
                            <li><a href="https://www.youtube.com/c/Codefloworg" target="_blank"><img src={YouTube} alt="" className='socalmediaicon'/> YouTube</a></li>
                            <li><a href="https://discord.gg/XYWMBqCXPJ" target="_blank"><img src={Discord} alt="" className='socalmediaicon'/> Discord</a></li>
                            <li><a href="https://in.linkedin.com/company/codefloworg" target="_blank"><img src={LinkedIn} alt="" className='socalmediaicon'/> LinkedIn</a></li>
                            <li><a href="https://github.com/CodeFlowOrg" target="_blank"><img src={Github} alt="" className='socalmediaicon'/> Github</a></li>
                            <li><a href="https://www.instagram.com/codefloworg/" target="_blank"><img src={Instagram} alt="" className='socalmediaicon'/> Instagram</a></li>
                            <li><a href="https://twitter.com/codefloworg" target="_blank"><img src={Twitter} alt="" className='socalmediaicon'/> Twitter</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="links-heading">Codeflow</div>
                        <ul>
                            <div className="footer-links"><a href="#aboutusLink">About Us</a></div>
                            <div className="footer-links"><a href="https://drive.google.com/file/d/1z1GqyHtHzFY38EZ4JehV8DaqUPNWtN9W/view" target="_blank">Brochure</a></div>
                            <div className="footer-links"><a href="mailto:codefloworg@gmail.com">Be a sponsor</a></div>
                            <div className="footer-links"><a href="mailto:queries.codeflow@gmail.com">Conduct a Session</a></div>
                            <div className="footer-links"><a href="mailto:queries.codeflow@gmail.com">Become a community partner</a></div>
                            <div className="footer-links"><a href="mailto:queries.codeflow@gmail.com">Bring Opensource Organisation</a></div>
                        </ul>
                    </li>
                    {/* <li>
                        <div className="links-heading">Our Services</div>
                        <ul>
                            <div className="footer-links"><a href="#">Watch</a></div>
                            <div className="footer-links"><a href="#">Bagpack</a></div>
                            <div className="footer-links"><a href="#">Shoes</a></div>
                            <div className="footer-links"><a href="#">Dress</a></div>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <hr />
            <div className="footer-end">
                Made with ❤️ by Codeflow    
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
