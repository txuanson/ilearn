import React from 'react';

export default function TutorCourseItem(props) {
    return (
        <div>
            <li className="course__item">
                <a href={props.path} className="course__item__link">
                    <img src={props.cover} alt ="Course" className="course__item__img"/>
                    <div className="course__item__info">
                        <h5 className="course__item__title">{props.name}</h5>
                        <div className="course__item__text">{props.text} </div>
                        <span className="course__item__type">{props.type}</span>
                        <span className="course__item__category">{props.category}</span>
                    </div>
                </a>          
            </li>
        </div>

    )
}

