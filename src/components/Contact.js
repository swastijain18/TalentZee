import React from "react";
import "../stylesheets/Contact.css"
import Header from "./Header";
import ContactForm from "./ContactForm";
import strings from "../string";

function Contact() {
    return (
        <div>

            <Header />
            <div className="contact-box">
                <h1>{strings.GetInTouch}</h1>

                <ContactForm />
            </div>

        </div>
    )
}

export default Contact;