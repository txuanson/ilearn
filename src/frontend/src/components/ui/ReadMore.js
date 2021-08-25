import React , { useState }from 'react';
import {Button} from 'antd';

import gfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

function ReadMore({ children, maxCharCount = 200 }) {
    const text = children;

    const [isTruncated, setIsTruncated] = useState(true);

    const res = isTruncated ? text.slice(0, maxCharCount) : text;

    function toggleIsTruncated() {
        setIsTruncated (!isTruncated);
        // console.log(text)
        // console.log(res)
    }
    return (
        <div>
            <article className="prose lg:prose-md max-w-none px-2 my-10">
                    <ReactMarkdown children={res} remarkPlugins={[gfm]}/>
            </article>
            {/* <ReactMarkdown 
                    remarkPlugins={[gfm]} 
                    children={res} /> */}
            {/* <p> {res} </p> */}

            <Button type = "text" onClick = {toggleIsTruncated}>
                {isTruncated ? "Read more" : "Hide"}
            </Button>
        </div>
        
    )
}

export default ReadMore
