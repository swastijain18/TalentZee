import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import strings from "../string";
import "../stylesheets/Header.css"
import { BrowserRouter as Link } from "react-router-dom";


function Header() {
    return (
        <div >
            <Navbar expand="lg" sticky="top" style={{ boxShadow: "0px 10px 20px #d6d5da", paddingBottom: "1.5rem", paddingTop: "1.5rem" }}>
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="#home">Online_Study</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse style={{ color: "black" }} id="responsive-navbar-nav"
                        className="justify-content-end">

                        <Navbar.Text>
                            <Nav className="me-auto" >

                                <Nav.Link className="mx-3" href="#home">{strings.Home}</Nav.Link>
                                <Nav.Link className="mx-3" href="#home">{strings.Cources}</Nav.Link>
                                <Nav.Link className="mx-3" href="#home">{strings.DailyFeed}</Nav.Link>
                                <Nav.Link className="mx-3" href="#home">{strings.About}</Nav.Link>

                                <Link to={"./Contact"}>
                                {/* <a href="#Contact"> {strings.Contact}</a>
                                <button href="#Contact" >{strings.Contact}</button> */}
                                {strings.Contact}
                                </Link>

                            </Nav>

                        </Navbar.Text>
                        <Button className="mx-3" ><b>{strings.Register}</b></Button>
                        <Button className="mx-3" variant="outline-dark"><b>{strings.Login}</b></Button>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </div>
    )
}

export default Header;