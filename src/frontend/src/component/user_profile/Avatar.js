import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'antd'
// import { classes } from 'istanbul-lib-coverage'
import classes from './Avatar.module.css'

export class Avatar extends Component {
    render() {
        return (
            <div className={classes.avatar_container}>

                <Image
                    className = {classes.avatar_holder}
                    width = {20}
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                />
                <Link to="/user/profile/avatar" className = {classes.link}>
                    Change avatar   
                </Link>
   
            </div>
        )
    }
}

export default Avatar
