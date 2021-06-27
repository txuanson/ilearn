import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CourseForm from '../components/CourseForm'
import SideBar from '../components/SideBar'
import classes from './CreateNewCourse.module.css'

function createNewCourse() {
    return (
        <div className={classes.flex}>
            <div className={classes.flex_left}>
                <SideBar></SideBar>
            </div>
            <div className={classes.flex_right}>
                <Breadcrumb></Breadcrumb>
                <CourseForm></CourseForm>
            </div>
        </div>
    )
}

export default createNewCourse
