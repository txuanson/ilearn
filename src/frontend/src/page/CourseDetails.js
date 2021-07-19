import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import { Breadcrumb, BreadcrumbItem, Container} from 'reactstrap';
import TutorCourseItem from '../component/course/CourseItem';
import './CourseDetails.css'
import {Button} from '../component/button/Button';

function CourseDescription(data) {
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
        <Container className="screen">
            <Breadcrumb className="breadcrumb">
            <BreadcrumbItem><a href="/Homepage" className="breadcrumb-link">iLearn</a></BreadcrumbItem>
            <BreadcrumbItem><a href={`/${data.category}`} className="breadcrumb-link">{data.category}</a></BreadcrumbItem>
            <BreadcrumbItem active>{data.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className={sliderMenu ? "slider-menu active" : "slider-menu"}>
                <div className="lead-title">{data.name}</div>
                <Button>Subscribe</Button>

            </div>
            <div className="main-content">
                <TutorCourseItem
                    cover = {data.cover}
                    name ={data.name}
                    text ={data.text}
                    type = {data.type}/>

                <Link to={`/course/${data._id}`}>
                    <Button className="float-right">Detail</Button>
                </Link>
                
            </div>
            <div className="course-content">
                <div className="title">CONTENT</div>
                <ReactMarkdown>{data.content}</ReactMarkdown>
            </div>

        </Container>
    )
}

export default CourseDescription