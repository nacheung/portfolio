import React from "react";
import FadeIn from 'react-fade-in';
import NavBar from "../../components/navBar/navBar"
import {ReactComponent as Squiggle} from '../../components/home/images/squiggle.svg'
import imageOfMe from '../../components/home/images/me.jpg'

import "../pages.css"



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
                    <h2>Education</h2>
                    <p>My most recent education is from the Bachelor of Computer Science program at UBC. 
                        It's an excelerated program for students who already have another Bachelor's degree.
                        I also have a Bachelor of Science from the Combined Major in Science program
                        which allowed me to combine specializations of Chemistry, Physics, and Biology. 
                    </p>
                    <br/>
                    <table className="home-table education">
                        <thead>
                            <th>Program</th>
                            <th>Dates</th>
                        </thead>
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
                <table className="home-table work">
                    <thead>
                    <th>Work</th>
                    <th>Dates</th>
                    </thead>
                    <tbody>
                    <tr className="experience-row">
                        <td className="position">
                        UI Developer (co-op) | Jostle
                        <ul>
                            <li>
                            Develop client and internal projects while collaborating with the Design, Strategy, and Project Management teams in a Scrum environment.
                            </li>
                        </ul>
                        </td>
                        <td className="dates">Jan 2023 - Aug 2023</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Web Developer (co-op) | Invoke Media
                        <ul>
                            <li>
                            Develop client and internal projects while collaborating with the Design, Strategy, and Project Management teams in a Scrum environment.
                            </li>
                        </ul>
                        </td>
                        <td className="dates">Jan 2022 - May 2022</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Open Science Specialist (co-op) | UBC Centre for Brain Health
                        <ul>
                            <li>
                            Supported data sharing and back-up and hosted open science and coding best practices.
                            </li>
                        </ul>
                        </td>
                        <td className="dates">Sep 2021 - Dec 2021</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Program Coordinator | Office of Pediatric Surgical Evaluation and Innovation - BC Children's Hospital
                        <ul>
                            <li>
                            Coordinated and oversaw all aspects of the education and research activities within OPSEI.
                            </li>
                        </ul>
                        </td>
                        <td className="dates">Jul 2019 - Aug 2020</td>
                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Research Assistant | Office of Pediatric Surgical Evaluation and Innovation - BC Children's Hospital
                        <ul>
                            <li> Assisted with several research and quality improvement projects which I presented at hospital academic rounds. </li>
                        </ul>
                        </td>
                        <td className="dates">May 2018 - Jul 2019</td>

                    </tr>
                    <tr className="experience-row">
                        <td className="position">
                        Shift Supervisor | Starbucks Canada
                        <ul>
                            <li> Supervised a busy store, trained new hires, and solved a wide range of unpredictable problems. </li>
                        </ul>
                        </td>
                        <td className="dates">May 2018 - Jul 2019</td>

                    </tr>

                    <tr className="experience-row">
                        <td className="position">
                        Go Girls Program Mentor (Volunteer) | Big Sisters of Canada
                        <ul>
                            <li> Ran a program for girls in grades 6-7 teaching them about healthy lifestyles through activities to build knowledge and self-esteem. </li>
                        </ul>
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