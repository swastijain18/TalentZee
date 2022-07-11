import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
function ContactForm() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control type="text" placeholder="Enter Name" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSubject">

                    <Form.Control  type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMsg">
                    <FormControl as="textarea" placeholder="Write Message" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default ContactForm;