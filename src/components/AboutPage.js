import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Features from "./Features.js"
import "../stylesheets/AboutPage.css"
import studying from "../images/studying-girl.jpg"
import strings from "../string";




function AboutPage() {
    return (
        <div style={{fontFamily: "Open-Sans"}} className="about-box"> 
            <Header />

            <h1 style={{color: "#5AEA8F"}}>{strings.AboutUs}</h1>


            <div className="ab-outer">
                <div className="ab-left">
                    <img src={studying}></img>
                </div>

                <div className="ab-right" style={{ flex: "30%" }}>
                    <h2>{strings.abHead1}</h2>
                    <p>{strings.abDescription1}</p>
                </div>
            </div>

            <div className="ab-outer">
                <div className="ab-left" style={{ flex: "30%" }}>
                    <h2>{strings.abHead1}</h2>
                    <p>{strings.abDescription1}</p>
                </div>

                <div className="ab-right">
                    <img src={studying}></img>

                </div>
            </div>
            <Features />
            <Footer />
        </div>
    )
}

export default AboutPage;