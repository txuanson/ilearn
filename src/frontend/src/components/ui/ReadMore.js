import React , { useState }from 'react';
import {Button} from 'antd';

import gfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

function ReadMore({ children, maxCharCount = 500 }) {
    const text = children;

    const [isTruncated, setIsTruncated] = useState(true);

    const res = isTruncated ? text.slice(0, maxCharCount) : text;

    function toggleIsTruncated() {
        setIsTruncated (!isTruncated);
        console.log(text)
        console.log(res)
    }
    return (
        <div>
            <ReactMarkdown 
                    remarkPlugins={[gfm]} 
                    children={res} />
            {/* <p> {res} </p> */}

            <Button type = "text" onClick = {toggleIsTruncated}>
                {isTruncated ? "Read more" : "Hide"}
            </Button>
        </div>
        
    )
}

export default ReadMore
