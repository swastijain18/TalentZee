import React from "react";
import { Button } from "react-bootstrap";



function CourseBtn(props) {
    return (
        <Button className="" style={{
            width: "20%", height: "7rem", backgroundColor: "white", color: "#ff8b94",
            border: "2px solid #ff8b94", textAlign: "left",
            margin: "1rem", boxShadow: "3px 3px 10px #d6d5da", fontSize: "1.3rem",
        }} >

            <b >{props.title}</b>
            <img src={props.img} width={80} height={80} style={{ float: "right" }}></img>

        </Button>
    )
}

export default CourseBtn;