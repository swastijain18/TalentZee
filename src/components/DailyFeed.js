import React from "react";
import Footer from "./Footer";
import Header from "./Header";


import strings from "../string";

function DailyFeed(){
    return(
        <div style={{fontFamily: "Open-Sans"}}>
            <Header/>

            <h1 style={{ color: "#5AEA8F" }}>{strings.DailyFeed}</h1>
            <Footer/>
        </div>
    )
}

export default DailyFeed;