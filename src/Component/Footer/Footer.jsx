import React from 'react';
import "./Footer.css";


const Footer = () => {
  return (
    <>
        {/* <h1>hello this is a footer section</h1> */}
        <div className="footer__section">
            <div className="footer__imgsection">
                <div className="footer__i">
                    <img src="../img/as2.png" alt="StarClinch"  className='ii'/>
                    <p>StarClinch</p>
                </div>
                <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>

                </div>

            </div>
            <div className="middle_section">
                <div>
                    <p className='id'>FOR BUYERS</p>
                    <div className="middle__section2">
                        <p>Our Buyers</p>
                        <p>Browse</p>
                        <p>Post Your Requirement</p>
                        <p>Entertainment on EMI</p>
                    </div>
                    
                    <div className='last__section'>
                        <p className='last'>ABOUT US</p>
                        <div className='c'>
                                <p>Our Stories</p>
                                <p>Careers</p>
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
                <div className="address">
                    <div>
                        <p className="main__address">REGISTERED OFFICE <br /> ADDRESS:</p>
                        <p className="address2">VINSM Globe Private Limited <br />Percept House, Ground Floor <br />
                        East of Kailash, New Delhi<br />
                        CIN: U52605DL2012PTC23694<br />Phone: +91 11 498 498 01</p>
                        <div className='Add'>
                            <p>Contact us </p>

                        </div>
                    </div>

                </div>
                

            </div>
            <div className="payment">
                <div className="payment2">
                    <img src="../img/as3.png" alt="payment" />

                </div>
                <div>
                    <p>© Copyright 2015-2023 | <span className='p'>VINSM Globe Pvt. Ltd.  |  </span>All Rights Reserved.</p>
                </div>
                <hr/>
            </div>
            
        </div>
    </>
  )
}

export default Footer;
