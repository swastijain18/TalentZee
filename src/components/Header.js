import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import strings from "../string";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png"

import "../stylesheets/Header.css"



function Header() {
    return (
        <div style={{ fontFamily: "Open-Sans" }}>


            <Navbar expand="lg" sticky="top" style={{ boxShadow: "0px 10px 20px #d6d5da" }}>
                <Container>

                    <Navbar.Brand href="#home"><img src={logo} height={100} /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse style={{ color: "black" }} id="responsive-navbar-nav"
                        className="justify-content-end">




                        {/* Links to connect to different pages */}

                        <Navbar.Text>
                            <Nav className="me-auto nav-link" style={{ fontSize: "1.4rem", textDecoration: "none" }} >

                                <Link className="mx-2" style={{ textDecoration: "none" }} to="/">
                                    <button className="link">{strings.Home}</button>
                                </Link>

                                <Link className="mx-2" style={{ textDecoration: "none" }} target="_blank" to="/coursePage">
                                    <button className="link">{strings.Cources}</button>
                                </Link>

                                <Link className="mx-2" style={{ textDecoration: "none" }} target="_blank" to="/dailyFeed">
                                    <button className="link">{strings.DailyFeed}</button>
                                </Link>

                                <Link className="mx-2" style={{ textDecoration: "none" }} target="_blank" to="/aboutPage">
                                    <button className="link">{strings.AboutUs}</button>
                                </Link>

                                <Link className="mx-2" style={{ textDecoration: "none" }} target="_blank" to="/contact">
                                    <button className="link">{strings.Contact}</button>
                                </Link>

                            </Nav>
                        </Navbar.Text>


                        {/* ---------------------- LOGIN AND REGISTRATION BUTTON --------------------- */}

                        <Link target="_blank" to="/registerPage">
                            <button className="mx-3 btn-color" >
                                <b>{strings.Register}</b></button>

                        </Link>

                        <Link target="_blank" to="/loginPage">
                            <button className="mx-3 btn-plain">
                                <b>{strings.Login}</b></button>
                        </Link>
                    </Navbar.Collapse>

                </Container>
                <Outlet />
            </Navbar>

        </div>

    )
}

export default Header;