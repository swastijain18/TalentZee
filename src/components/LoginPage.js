import React, { useState } from "react";
import strings from "../string";

import "../stylesheets/LoginPage.css"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";




function LoginPage() {

    const [mailId, setMailId] = useState("");
    const [password, setPassword] = useState("");


    const loginInButton = () => {
        if (mailId != "" && password != "") {
            alert("submitted")
        }
        else {
            alert("Fill the Details!!")
        }
    }

    let mailChange = (e) => {
        setMailId(e.target.value)
    }

    let passChange = (e) => {
        setPassword(e.target.value)
    }

    return (

        <div className="login-container">

            <div style={{ display: "flex" }}>

                <div className="login-form">
                    <h1>{strings.Login}</h1>
                    {/* ----------------LOG IN FORM--------------- */}

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="email" placeholder="Email" value={mailId}
                                onChange={mailChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={passChange} required />
                        </Form.Group>

                        <Button variant="primary" type="submit"
                            style={{ backgroundColor: "#ff8b94", borderColor: "#ff8b94" }}
                            onClick={loginInButton}>
                            <b>{strings.Login}</b>
                        </Button>


                        <span className="mx-3">or</span>
                        <Link to="/" target="_blank">{strings.Register}</Link>

                    </Form>
                </div>


                <div className="">

                </div>
            </div>

        </div>


    )
}

export default LoginPage;