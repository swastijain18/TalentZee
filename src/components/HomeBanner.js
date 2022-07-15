import React from "react";
import strings from "../string";
import "../stylesheets/HomeBanner.css"
import {Button} from "react-bootstrap";
import studying from "../images/studying-girl.jpg"

function HomeBanner(){
    return(
        <div className="banner-box">

            <div className="left-box">
                <h1>{strings.tagline}</h1>
                <div className="banner-text"> {strings.bannertext}</div>
                <Button style={{
                    paddingTop: "0.7rem", paddingBottom: "0.7rem", paddingRight: "2rem", paddingLeft: "2rem", fontSize: "1.1rem",
                    marginTop: "1.5rem", backgroundColor: "#ff8b94", borderColor: "#ff8b94"}}>
                    <b>Trial</b></Button>

            </div>

            <div className="right-box">
                <img src={studying} alt="image"></img>
            </div>
        </div>
    )
}

export default HomeBanner;