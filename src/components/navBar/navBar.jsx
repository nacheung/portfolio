import React from "react";
import { Link } from "react-router-dom";
import linkedinIcon from './images/linkedin.png'

import "./navBar.css";

const NavBar = (props) => {
	const { active } = props;
	return (
		<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/portfolio">HOME</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/portfolio/about">ABOUT</Link>
							</li>
							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/portfolio/resume">RESUME</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/portfolio/contact">CONTACT</Link>
							</li>
							<a href="https://www.linkedin.com/in/nicole-ashley-cheung/" target="_blank"><img src={linkedinIcon} alt="linkedin" className="linkedin-logo" /></a>
						</ul>
					</div>
				</nav>
			</div>

	)
}

export default NavBar;
