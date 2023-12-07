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
								<Link to="/">HOME</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">ABOUT</Link>
							</li>
							<li
								className={
									active === "cv"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/cv">CV</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">CONTACT</Link>
							</li>
							<a href="https://www.linkedin.com/in/nicole-ashley-cheung/" target="_blank"><img src={linkedinIcon} alt="linkedin" className="linkedin-logo" /></a>
						</ul>
					</div>
				</nav>
			</div>

	)
}

export default NavBar;
