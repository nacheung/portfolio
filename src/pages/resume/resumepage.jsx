import React from "react";
import NavBar from "../../components/navBar/navBar";

import "../pages.css";
import Resume from "./NC_Resume.pdf";



const Resumepage = () => {

    return (
        <div className="page-content">
            <NavBar active="resume" />
            <div className="hero">
                <iframe src={Resume} height="1100px"/>
            </div>
        </div>
    )
}

export default Resumepage;