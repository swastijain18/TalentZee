import React from "react";

import "../stylesheets/RegisterPage.css"
import Header from "./Header.js"
import Footer from "./Footer.js"
import strings from "../string.js";
import { Form, Row, Col, Button } from "react-bootstrap";



function RegisterPage() {

    let submitBtn= () => {
        alert("Successfully registered")

        // console.log("Successfully registered")
    }


    return (
        <div style={{ fontFamily: "Open-Sans" }}>
            <Header />

            <div className="register-container">
                <h1 style={{ color: "#8BC2FF", textAlign: "center" }}>{strings.Register}</h1>
                <Row className="register-form">
                    <Col>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    <Form.Control placeholder="Full Name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control placeholder="Contact Number" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} >
                                    <Form.Control placeholder="Student's Age" />
                                </Form.Group>


                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">

                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">

                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">

                                    <Form.Control placeholder="City" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">

                                    <Form.Control placeholder="State" />
                                </Form.Group>
                            </Row>


                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>


                            <Button variant="primary" type="submit" onClick={submitBtn}
                                style={{ backgroundColor: "#ff8b94", borderColor: "#ff8b94" }}>
                                <b> {strings.Register}</b>
                            </Button>
                        </Form>

                    </Col>
                    <Col>
                        <h1>image</h1>
                    </Col>
                </Row>
            </div>


            <Footer />
        </div>
    )
}

export default RegisterPage;