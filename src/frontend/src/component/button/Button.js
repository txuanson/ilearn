import React from 'react'
import './Button.css'


const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large'];

export const Button =({
    children, btnStyle, btnSize
}) => {
    const checkBtnStyle = STYLES.includes(btnStyle)? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
    return(
        <button className={`my-btn ${checkBtnStyle} ${checkBtnSize}`}>{children}</button>
    );

}