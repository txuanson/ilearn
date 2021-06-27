import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import classes from './SideBar.module.css'

function SideBar() {
    return (
        <div className={classes.main}>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="tutor/course">New Course</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/course">Course</a>
                </li>
            </ul>
        </div>

    )}

export default SideBar
