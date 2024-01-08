import React from "react";
import NavBar from "../../components/navBar/navBar";
import FadeIn from 'react-fade-in';
import ImageOfMolly from './molly.jpg';
import ImageOfMeAtBeach from './beach.jpg';
import ImageOfMeWithPie from './pie.jpg';


import "../pages.css"



const Aboutpage = () => {

    return (
        <div className="page-content">
            <NavBar active="about" />
            <div className="about-section">
                A few things about me...
                <FadeIn childClassName="fade-in-div">
                    <div className="about-boxes">

                        <div className="about-beige-box">
                            <div className="hero-text">
                                <h3>After work, you can find me...</h3>
                                Strolling through Stanley Park or another Vancouver beach - rain or shine!
                            </div>
                        </div>
                        <div className="about-image-div">
                            <img src={ImageOfMeAtBeach} alt="me" className="about-image"/>
                        </div>
                    </div>
                    <div className="about-boxes">
                        <div className="about-beige-box">
                            <div className="hero-text">
                                <h3>Dog or cat person?</h3>
                                I love both, but think I'm more of a dog person. This is my dog Molly.
                            </div>
                        </div>
                            <div className="about-image-div">
                                <img src={ImageOfMolly} alt="me" className="about-image"/>
                            </div>
                    </div>
                    <div className="about-boxes">
                        <div className="about-beige-box">
                            <div className="hero-text">
                                <h3>My hobbies include...</h3>
                                Exploring new restaurants, trying different cuisines, cooking and baking. I made this apple pie at a pie-making class.
                            </div>
                        </div>
                            <div className="about-image-div">
                                <img src={ImageOfMeWithPie} alt="me" className="about-image"/>
                            </div>
                    </div>


                </FadeIn>


            </div>
        </div>
    )
}

export default Aboutpage;