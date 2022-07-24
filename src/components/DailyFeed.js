import React from "react";
import Footer from "./Footer";
import Header from "./Header";


import "../stylesheets/DailyFeed.css"
import strings from "../string";

function DailyFeed() {
    return (
        <div style={{ fontFamily: "Open-Sans" }}>
            <Header />
            <div className="df-container">
                <h1 style={{ color: "#5AEA8F" }}>{strings.DailyFeed}</h1>
            </div>

            <Footer />
        </div>
    )
}

export default DailyFeed;