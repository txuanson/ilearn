import React from 'react';

export default function TutorCourseItem(props) {
    return (
        <div>
            <li className="course__item">
                <a href={props.path} className="course__item__link">
                    <img src={props.source} alt ="Course" className="course__item__img"/>
                    <div className="course__item__info">
                        <h5 className="course__item__title">{props.title}</h5>
                        <div className="course__item__text">{props.text} </div>
                        <span className="course__item__type">{props.type}</span>
                    </div>
                </a>          
            </li>
        </div>

    )
}

