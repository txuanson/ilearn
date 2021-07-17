import React from "react";
import { Container } from "reactstrap";

export default function DashBoardFooter() {
    return (
        <Container fluid className="bg-white p-2 shadow-sm d-flex align-items-center justify-content-center" style={{height:"50px"}}>
            <span style={{fontSize:".75rem"}}>
             Design and developed by 404 Not Found ©
            </span>
        </Container>
    );
}