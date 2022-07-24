import React from "react";
import {Card} from "react-bootstrap"
import strings from "../string";


function FeatureCard(props) {
    return (
        <div className="f-card">
            <Card style={{ width: '17rem',backgroundColor:"#fcdcc7", padding:"1.5rem"}}>
                <Card.Body>
                    <Card.Title className="row"><b>{props.feature}</b></Card.Title>
                    <Card.Text className="row">
                        {props.descr}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FeatureCard;