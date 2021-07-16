import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Container, CustomInput, Form, FormGroup, Input, Label } from "reactstrap";
import DashBoardHeader from "../../component/header/DashBoardHeader";
import { ReactMarkdown as Markdown } from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

export default function NewCourse() {



    return (
        <Container fluid className="p-0 overflow-auto">
            <DashBoardHeader name="Create new course"/>
            <div className="shadow rounded m-2 bg-white">
                <Breadcrumb listClassName="p-2 m-0 overflow-visible">
                    <BreadcrumbItem>
                        <Link to="/dashboard">Dashboard</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        New course
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className="shadow rounded m-2 bg-white">
                <Form className="p-3">
                    <FormGroup>
                        <Label for="courseName">Course name</Label>
                        <Input type="text" name="courseName" id="courseName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="courseName">Course name</Label>
                        <Input type="select" name="courseName" id="courseName">
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="courseName">Course name</Label>
                        <CustomInput type="switch" name="courseName" id="courseName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCustomFileBrowser">File Browser</Label>
                        <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
                    </FormGroup>
                </Form>

            </div>

        </Container>
    )
}