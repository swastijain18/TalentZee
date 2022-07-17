import React from "react";
import "../stylesheets/Features.css"
import strings from "../string";
import FeatureCard from "./FeatureCard";

let allFeatures = [
    {
        "title": strings.feature2,
        "text": strings.text2,

    },
    {
        "title": strings.feature1,
        "text": strings.text1,

    },
    {
        "title": strings.feature3,
        "text": strings.text3,

    },
    {
        "title": strings.feature4,
        "text": strings.text4,

    },

]

function Features() {
    return (
        <div className="feature-container">
            <h1 style={{ color: "#5AEA8F",marginBottom:"2rem" }}>{strings.Features}</h1>

            <div style={{ margin: "1rem", display:"flex",justifyContent:"center"}}>

                {allFeatures.map((ele) => {
                    return <FeatureCard
                        feature={ele.title} descr={ele.text}

                    />
                })}

            </div>

        </div>

    )
}


export default Features;