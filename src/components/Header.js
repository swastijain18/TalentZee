import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import strings from "../string";
// import "../stylesheets/Header.css"
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../images/logo.png"



function Header() {
    return (
        <div >
            <Navbar expand="lg" sticky="top" style={{ boxShadow: "0px 10px 20px #d6d5da" }}>
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home"><img src={logo} height={100} /></Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse style={{ color: "black" }} id="responsive-navbar-nav"
                        className="justify-content-end">

                        <Navbar.Text>
                            <Nav className="me-auto" style={{ fontSize: "1.4rem", fontFamily: "Architects Daughter" }} >

                                <Nav.Link className="mx-2" href="#home">{strings.Home}</Nav.Link>
                                <Nav.Link className="mx-2" href="#home">{strings.Cources}</Nav.Link>
                                <Nav.Link className="mx-2" href="#home">{strings.DailyFeed}</Nav.Link>
                                <Nav.Link className="mx-2" href="#home">{strings.About}</Nav.Link>


                                <Link to="/contact">{strings.Contact}</Link>

                            </Nav>

                        </Navbar.Text>
                        <button className="mx-3 btn-color" >
                    <b>{strings.Register}</b></button>


                <button className="mx-3 btn-plain">
                    <b>{strings.Login}</b></button>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </div>
    )
}

export default Header;