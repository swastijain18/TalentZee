import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Features from "./Features.js"
import "../stylesheets/AboutPage.css"
import studying from "../images/studying-girl.jpg"
import strings from "../string";




function AboutPage() {
    return (
        <div>
            <Header />

            <div className="ab-outer">
                <div className="ab-left">
                    <img src={studying}></img>
                </div>

                <div className="ab-right">
                    <h2>{strings.abHead1}</h2>
                    <p>{strings.abDescription1}</p>
                </div>
            </div>

            <div className="ab-outer">
                <div className="ab-left" style={{ flex: "40%" }}>
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