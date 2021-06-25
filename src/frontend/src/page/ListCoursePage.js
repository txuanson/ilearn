import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col} from 'reactstrap';
import Sidebar from '../Sidebar';
import './ListCoursePage.css';
import '../CourseItem.css';
import TutorCourseItem from '../CourseItem';

function ListCoursePage() {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col xs="6" sm="2">
                        <Sidebar/>
                    </Col>
                    <Col>
                        <div className="title">COURSE MANAGER </div>
                        <Breadcrumb className="breadcrumb">
                            <BreadcrumbItem><a href="/Homepage" className="breadcrumb-link">iLearn</a></BreadcrumbItem>
                            <BreadcrumbItem active>List course</BreadcrumbItem>
                        </Breadcrumb>
                        <ul className="tutor-course__list">
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="INTRODUCTION TO AI"
                                text="Some text about this course"
                                path ="/ai-course"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="WEBSITE"
                                text="Some text about this course"
                                path ="/"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="MATH"
                                text="Some text about this course"
                                path ="/"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="INTRODUCTION TO AI"
                                text="Some text about this course"
                                path ="/ai-course"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="INTRODUCTION TO AI"
                                text="Some text about this course"
                                path ="/ai-course"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="INTRODUCTION TO AI"
                                text="Some text about this course"
                                path ="/ai-course"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                            <div className="course-list-item">
                                <TutorCourseItem 
                                source = "./online-course.svg"
                                title ="INTRODUCTION TO AI"
                                text="Some text about this course"
                                path ="/ai-course"
                                type = "Public"/>
                                
                                <div className="custom-action">
                                    <a href="/edit">Edit</a>
                                    <a href="/">Sessions</a>
                                </div>
                            </div>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ListCoursePage;
