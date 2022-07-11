import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap"
import "../stylesheets/Cources.css"

import { FaBook } from 'react-icons/fa';

import studying from "../images/studying-girl.jpg"
import yellowstar from "../images/yellowstar.svg"
import strings from "../string";



function CourceCard(props) {
    return (
        <div>
            <Card style={{ width: '20rem'}} className="cource-card">
                <Card.Img variant="top" src={studying} />

                <Card.Body style={{ padding: "2.5rem", paddingTop: "1rem" }}>
                    <Row style={{ paddingBottom: "0.5rem", fontSize: "0.9rem", color: "grey" }}>
                        <Col>

                            <Card.Text> <FaBook /> {props.LessonNo} Lessons</Card.Text>
                        </Col>

                        <Col style={{ display: "flex" }}>

                            <Card.Img src={yellowstar} height={20}></Card.Img>
                            <Card.Text>{props.stars}</Card.Text>

                        </Col>
                    </Row>

                    <Row>
                        <Card.Title>{props.cource}</Card.Title>
                    </Row>

                    <Row>

                        <div className="card-name">

                            <Card.Img src={studying} style={{
                                borderRadius: "50%", width: "2rem", height: "2rem", marginRight: "1rem"
                            }} />

                            <Card.Text style={{ fontSize: "1rem", color: "black" }}>
                                {props.Name}
                            </Card.Text>
                        </div>
                        <Button variant="primary">{strings.MoreDetails}</Button>

                    </Row>

                </Card.Body>
            </Card>

        </div>
    )
}

export default CourceCard;