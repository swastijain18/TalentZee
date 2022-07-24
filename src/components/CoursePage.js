import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import strings from "../string.js"

import { InputGroup, Button, Form } from "react-bootstrap"
import CourseBtn from "./CourseBtn.js"



const allCourses = [
    {
        "Name": strings.cource1
    },
    {
        "Name": strings.cource2
    },
    {
        "Name": strings.cource3
    },
    {
        "Name": strings.cource4
    },
    {
        "Name": strings.cource5
    },
    {
        "Name": strings.cource6
    },
    {
        "Name": strings.cource1
    },
    {
        "Name": strings.cource2
    },
    {
        "Name": strings.cource3
    },
    {
        "Name": strings.cource4
    },
    {
        "Name": strings.cource5
    },
    {
        "Name": strings.cource6
    },
    {
        "Name": strings.cource7
    },
    {
        "Name": strings.cource8
    },
    {
        "Name": strings.cource4
    },
    {
        "Name": strings.cource5
    },
    {
        "Name": strings.cource6
    },
    {
        "Name": strings.cource7
    },
    {
        "Name": strings.cource8
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
            <h1 style={{ color: "#5AEA8F" }}>{strings.Cources}</h1>



            {/* <-------------------- SEARCH BUTTON --------------------> */}

            <div className="search-btn">
                <InputGroup className="mb-3" style={{ width: "40rem" }}>

                    <Form.Control placeholder="Search" type="text"
                        onChange={searchInput}
                    />
                    {/* 
                    <Button variant="outline" style={{ border: "3px solid #ff8b94", color: "#ff8b94" }}>
                        Search
                    </Button> */}
                </InputGroup>
            </div>
            {/* ----------------------------------------------------------------------------- */}



            {/* <-------------------- COURSES SECTION --------------------> */}


            <div style={{  marginBottom: "4rem", alignItems: "center" }}>

                {allCourses.filter((val) => {
                    if (course == "" || course == " ")
                        return val;
                    else if (val.Name.toLowerCase().includes(course.toLowerCase()))
                        return val;
                }).map((ele) => {
                    return <CourseBtn title={ele.Name} />
                })}

            </div>


            <Footer />
        </div>

    )
    // }
}


export default CoursePage;