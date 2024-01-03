import React from "react";
import NavBar from "../../components/navBar/navBar";
import FadeIn from 'react-fade-in';
import LinkedInLogo from './linkedin.svg';
import MailLogo from './mail.png';

import "../pages.css";



const Contactpage = () => {

    return (
        <div className="page-content">
            <NavBar active="contact" />
            <div>
                <FadeIn childClassName="fade-in-div">
                    <div className="contact-box-div">
                        <div className="contact-green-box">
                            <div className="contact-text"> 
                                <h1 className="connect-message">Connect with me!</h1>
                                <div className="contact-info">
                                    <div className="contact">   
                                        <img className="contact-logo" src={MailLogo} />                             
                                        <a className="contact-link" href="mailto:nicoleacheung@gmail.com">nicoleacheung@gmail.com</a>
                                    </div>
                                    <div className="contact">    
                                        <img className="contact-logo" src={LinkedInLogo} />                            
                                        <a className="contact-link" target="_blank" href="http://linkedin.com/in/nicole-ashley-cheung">linkedin.com/in/nicole-ashley-cheung/</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Contactpage;