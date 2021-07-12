import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col} from 'reactstrap';
import Sidebar from '../component/sidebar/Sidebar';
import './DashBoard.css';
import '../component/course/CourseItem.css';
import TutorCourseItem from '../component/course/CourseItem';

function ListCoursePage() {
    return (
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
                            cover = "/img/default-class-cover.png"
                            name ="INTRODUCTION TO AI"
                            text ="Some text about this course"
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
    );
}

export default ListCoursePage;
