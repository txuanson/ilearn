import React from "react";
import { Container } from "reactstrap";

export default function DashBoardFooter() {
    return (
        <Container fluid className="bg-white p-2 shadow-sm" style={{height:"50px"}}>
            <span>
             Design and developed by 404 Not Found ©
            </span>
        </Container>
    );
}