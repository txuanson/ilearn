import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import classes from './Info.module.css'
import Markdown from './Markdown'

export class Info extends Component {
    render() {

        const input = '<h1> Hello \n [Zuko](https://github.com/codingforentrepreneurs/Try-Reactjs/blob/master/src/thirdParty/ReactMarkdownExample.js) here </h1>'

        return (
            <div className={classes.container}>

                <div className={classes.name}>USER's NAME</div> 

                <Markdown
                    input = {input}
                />

                <Link to="/user/profile/user_id">
                    Change Information
                </Link>

            </div>
        )
    }
}

export default Info
