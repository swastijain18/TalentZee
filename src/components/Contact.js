import React from "react";
import "../stylesheets/Contact.css"
import Header from "./Header";
import ContactForm from "./ContactForm";
import strings from "../string";

import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill, BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagramSquare } from 'react-icons/fa'
import Footer from "./Footer";




function Contact() {
    return (
        <div>

            <Header />
            <div className="contact-box">
                <h1>{strings.GetInTouch}</h1>

                <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                    <div style={{ flex: "50%" }}>
                        <ContactForm />
                    </div>

                    <div style={{ flex: "50%" }} className="connections">
                        <div className="mail-section detail">
                            <h3 ><MdEmail /> <b>{strings.Email}</b></h3>

                            {strings.EmailID}
                        </div>

                        <div className="phone-section detail">
                            <h3><BsFillTelephoneFill /> <b>{strings.Phone}</b></h3>

                            {strings.PhoneNo}
                        </div>

                        <div className="follow-section detail">
                            <h3><b>{strings.Follow}</b></h3>

                            <button onClick={event => window.location.href = '/'} className="wabtn" >
                                <IoLogoWhatsapp color="#ff8b94" size={30}/></button>

                            <button onClick={event => window.location.href = '/'} className="instabtn" >

                                <FaInstagramSquare  color="#ff8b94" size={30}/></button>

                            <button onClick={event => window.location.href = '/'} className="fbbtn" >
                                <BsFacebook  color="#ff8b94" size={30}/></button>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;