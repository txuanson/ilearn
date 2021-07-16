import React from "react";
import { Container } from "reactstrap";

export default function DashBoardHeader(props) {
    return (
        <Container fluid className="bg-white p-2 shadow-sm" style={{height:"50px"}}>
            <h3 className="text-start ms-1">
                {props.name}
            </h3>
        </Container>
    );
}