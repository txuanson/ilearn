import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import { Breadcrumb, BreadcrumbItem, Container} from 'reactstrap';
import TutorCourseItem from '../component/course/CourseItem';
import './CourseDescription.css'
import {Button} from '../component/button/Button';

function CourseDescription(props) {
    const [sliderMenu, setSliderMenu] = useState(false);
    const showSliderMenu = () => {
        if(window.scrollY >= 400){
            setSliderMenu(true);
        } else {
            setSliderMenu(false);
        }
        console.log(window.scrollY)
        console.log(sliderMenu)
    }
    window.addEventListener('scroll', showSliderMenu);
    return (
        <Container className="hello">
            <Breadcrumb className="breadcrumb">
            <BreadcrumbItem><a href="/Homepage" className="breadcrumb-link">iLearn</a></BreadcrumbItem>
            <BreadcrumbItem><a href={`/${props.category}`} className="breadcrumb-link">{props.category}</a></BreadcrumbItem>
            <BreadcrumbItem active>{props.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className={sliderMenu ? "slider-menu active" : "slider-menu"}>
                <div className="lead-title">{props.name}</div>
                <Button>Subscribe</Button>

            </div>
            <div className="main-content">
                <TutorCourseItem
                    cover = {props.cover}
                    name ={props.name}
                    text ={props.text}
                    type = {props.type}/>
                    
                <Button
                    children = "Subscribe"
                    btnStyle = "btn-outline"
                    btnSize = "btn-large"
                />
            </div>
            <div className="course-content">
                <div className="title">CONTENT</div>
                <ReactMarkdown>{props.content}</ReactMarkdown>
            </div>
        
        </Container>
    )
}

export default CourseDescription
