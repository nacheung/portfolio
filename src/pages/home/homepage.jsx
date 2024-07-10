import React from "react";
import FadeIn from 'react-fade-in';
import NavBar from "../../components/navBar/navBar"
import {ReactComponent as Squiggle} from '../../components/home/images/squiggle.svg'
import imageOfMe from '../../components/home/images/me.jpg'
import { Link } from "react-router-dom";


import "../pages.css"
  

const apiUrl = 'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@freshofftheraq/video/7289216870433983749';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.html);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const Homepage = () => {

    return (
        <div className="page-content">
            <NavBar active="home" />
            <div className="hero">
                <FadeIn childClassName="fade-in-div">
                    <div className="boxes">
                        <div className="green-box">
                            <Squiggle className="squiggle"/>
                        </div>
                        <div className="beige-box">
                            <div className="hero-text">
                                <h1 className="hello-message">Hello, I'm Nicole.</h1>
                                I'm a web developer from Vancouver, BC. <br />
                                Welcome to my site!
                            </div>
                        </div>
                    </div>
                        <div className="hero-image-div">
                            <img src={imageOfMe} alt="me" className="hero-image"/>
                        </div>
                </FadeIn>
            </div>
            <div>
                <div className="subsection-container">
                        <h2>Projects</h2>
                        <p className="subsection-description">More details can be found on my <Link className="resume-link" to="/portfolio/resume">resume.</Link></p>
                        <ul className="projects">
                            <li>
                                <a className="project-title" href="https://www.kickstarter.com/projects/attasociety/when-air-takes-shape-global-air-quality-interactive-art" target="_blank">When Air Takes Shape </a> <br/>
                                This is a Global Air Quality Interactive Art installation creatted by ATTA Society. As a volunteer with ATTA, I’m helping to develop the program that enables users to select a country/region for the
                                sculpture to visualize air quality data and access interactive educational content about climate change.
                            </li>
                            <br/>
                            <li>
                                <a className="project-title" href="https://my-recipes.fly.dev" target="_blank">MyRecipes </a> <br/>
                                This web application allows users to enter a recipe blog url and parses the blog to extract the recipe. It then allows users to modify and save the recipe. Soon, users will also be able to enter TikTok and Instagram URLs to extract the recipes.
                            </li>
                            <br/>
                            <li>
                                <a className="project-title" href="https://nacheung.github.io/ted_talking/" target="_blank">TED Talking </a> <br/>
                                This dynamic visualization allows users to explore TED Talk data and find talks based on theme and other attributes.
                            </li>
                        </ul>
                    </div>
                <div className="subsection-container">
                    <h2>Education</h2>
                    <p className="subsection-description">My most recent education is from the Bachelor of Computer Science program at UBC. 
                        It's an excelerated program for students who already have another Bachelor's degree.
                        I also have a Bachelor of Science from the Combined Major in Science program
                        which allowed me to combine specializations of Chemistry, Physics, and Biology. 
                    </p>
                    <br/>
                    <table className="home-table education">
                        <tbody>
                            <tr>
                            <td>
                                Bachelor of Computer Science | University of British Columbia
                            </td>
                            <td className="dates">Sep 2020 - Dec 2023</td>
                            </tr>
                            <tr>
                            <td> Bachelor of Science | University of British Columbia</td>
                            <td className="dates">Sep 2013 - Apr 2018</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="subsection-container">
                <h2>Experience</h2>
                <p className="subsection-description">More details can be found on my <Link className="resume-link" to="/portfolio/resume">resume.</Link></p>
                <br/>
                <table className="home-table work">
                    <tbody>
                    <tr className="experience-row">
                        <td className="position">
                        UI Developer (co-op) | Jostle
                        </td>
                        <td className="dates">Jan 2023 - Aug 2023</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Web Developer (co-op) | Invoke Media
                        </td>
                        <td className="dates">Jan 2022 - May 2022</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Open Science Specialist (co-op) | UBC Centre for Brain Health
                        </td>
                        <td className="dates">Sep 2021 - Dec 2021</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Program Coordinator | Office of Pediatric Surgical Evaluation and Innovation - BC Children's Hospital
                        </td>
                        <td className="dates">Jul 2019 - Aug 2020</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Research Assistant (co-op) | Office of Pediatric Surgical Evaluation and Innovation - BC Children's Hospital
                        </td>
                        <td className="dates">May 2017 - Aug 2017</td>

                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Shift Supervisor | Starbucks Canada
                        </td>
                        <td className="dates">May 2018 - Jul 2019</td>

                    </tr>

                    <tr className="experience-row">
                        <td className="position">
                        Go Girls Program Mentor (Volunteer) | Big Sisters of Canada
                        </td>
                        <td className="dates">Apr 2015 - May 2018</td>

                    </tr>
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default Homepage;