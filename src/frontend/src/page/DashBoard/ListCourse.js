import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container, CustomInput, Form, FormGroup, Input, Label } from "reactstrap";
import DashBoardHeader from "../../component/header/DashBoardHeader";
import { ReactMarkdown as Markdown } from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Course from "../../component/course/Course";

export default function NewCourse() {

    return (
        <Container fluid className="p-0 overflow-auto">
            <DashBoardHeader name="Courses " />
            <div className="shadow rounded m-2 bg-white">
                <Breadcrumb listClassName="p-2 m-0 overflow-visible">
                    <BreadcrumbItem active>
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className="shadow rounded m-2 bg-white px-2 pb-5">
                <div className="p-3">
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </div>
            </div>

        </Container>
    )
}