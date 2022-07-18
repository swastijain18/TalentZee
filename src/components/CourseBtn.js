import React from "react";
import { Button } from "react-bootstrap";
import strings from "../string.js";


function CourseBtn(props){
    return(
        <Button style={{width: "20%", height: "3.5rem", backgroundColor:"white", color: "#ff8b94", border: "2px solid #ff8b94",
        margin: "1rem", boxShadow: "3px 3px 10px #d6d5da", fontSize: "1.3rem",}} >
           <b>{props.title}</b>
        </Button>
    )
}

export default CourseBtn;