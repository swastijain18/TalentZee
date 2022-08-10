import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import strings from "../string.js"

import { InputGroup, Form } from "react-bootstrap"
import CourseBtn from "./CourseBtn.js"
import studying from "../images/studying-girl.jpg"



const allCourses = [
    {
        "Name": strings.cource1,
        "image": {studying}
    },
    {
        "Name": strings.cource2,
        "image": {studying}
    },
    {
        "Name": strings.cource3,
        "image": {studying}
    },
    {
        "Name": strings.cource4,
        "image": {studying}
    },
    {
        "Name": strings.cource5,
        "image": {studying}
    },
    {
        "Name": strings.cource6,
        "image": {studying}
    },
    {
        "Name": strings.cource1,
        "image": {studying}
    },
    {
        "Name": strings.cource2,
        "image": {studying}
    },
    {
        "Name": strings.cource3,
        "image": {studying}
    },
    {
        "Name": strings.cource4,
        "image": {studying}
    },
    {
        "Name": strings.cource5,
        "image": {studying}
    },
    {
        "Name": strings.cource6,
        "image": {studying}
    },
    {
        "Name": strings.cource7,
        "image": {studying}
    },
    {
        "Name": strings.cource8,
        "image": {studying}
    },
    {
        "Name": strings.cource4,
        "image": {studying}
    },
    {
        "Name": strings.cource5,
        "image": {studying}
    },
    {
        "Name": strings.cource6,
        "image": {studying}
    },
    {
        "Name": strings.cource7,
        "image": {studying}
    },
    {
        "Name": strings.cource8,
        "image": {studying}
    },

]


function CoursePage() {

    const [course, setCourse] = useState("");

    let searchInput = (ele) => {
        setCourse(ele.target.value)
    }

    return (
        <div className="course-page">
            <Header />
            <h1 style={{ color: "#8BC2FF" }}>{strings.Cources}</h1>



            {/* <-------------------- SEARCH BUTTON --------------------> */}

            <div className="search-btn">
                <InputGroup className="mb-3" style={{ width: "40rem" }}>

                    <Form.Control placeholder="Search Course" type="text" value={course}
                        onChange={searchInput}
                    />

                </InputGroup>
            </div>
            {/* ----------------------------------------------------------------------------- */}



            {/* <-------------------- COURSES SECTION --------------------> */}


            <div className="course-section">

                {allCourses.filter((val) => {
                    if (course == "" || course == " ")
                        return val;
                    else if (val.Name.toLowerCase().includes(course.toLowerCase()))
                        return val;
                }).map((ele) => {
                    return <CourseBtn title={ele.Name} img={ele.image}/>
                })}

            </div>

            <Footer />

        </div>
    )
}


export default CoursePage;