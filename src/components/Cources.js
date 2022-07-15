import React from "react";
import CourceCard from "./CourceCard";
import "../stylesheets/Cources.css"
import strings from "../string";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1025 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 465 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Cources() {
    return (
        <div className="cource-box">
            <h1 style={{color: "#5AEA8F"}}>{strings.Cources}</h1>

            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                dotListClass=""
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px">

                <CourceCard LessonNo={2} stars={4} Name={strings.name2} cource={strings.cource1}/>
                <CourceCard LessonNo={2} stars={4} Name={strings.name1} cource={strings.cource2}/>
                <CourceCard LessonNo={2} stars={4} Name={strings.name1} cource={strings.cource3}/>
                <CourceCard LessonNo={2} stars={4} Name={strings.name4} cource={strings.cource4}/>
                <CourceCard LessonNo={2} stars={4} Name={strings.name8} cource={strings.cource5}/>
                <CourceCard LessonNo={2} stars={4} Name={strings.name1} cource={strings.cource6}/>
                <CourceCard LessonNo={2} stars={4} Name={strings.name1} cource={strings.cource7}/>

            </Carousel>


        </div>
    )
}

export default Cources;