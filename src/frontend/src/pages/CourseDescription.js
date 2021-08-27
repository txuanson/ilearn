import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Link, useParams} from "react-router-dom";
import ReadMore from '../components/ui/ReadMore';
import { getCourseInfo } from "../api/course";
import { joinCourse } from '../api/user';
import { Layout, Space, message} from 'antd';
import { subscribeCourse } from '../api/user';

const { Content } = Layout;

const markdown = `## 📖 About this class

- 🖥 Wellcome and prepair
- 💼 About Javascript
- 🎓 Javascript Fundamentals
- 🌐 Callback function
- 🔭 Arrow function

## 🌟 Content

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

  Markdown is a lightweight markup language based on the formatting conventions
  that people naturally use in email.
  As [John Gruber] writes on the [Markdown site][df1]

  > The overriding design goal for Markdown's
  > formatting syntax is to make it as readable
  > as possible. The idea is that a
  > Markdown-formatted document should be
  > publishable as-is, as plain text, without
  > looking like it's been marked up with tags
  > or formatting instructions.

  This text you see here is actually-written in Markdown! To get a feel
  for Markdown's syntax, type some text into the left window and
  watch the results in the right.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

For production environments...


## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][pldb]         |
| GitHub           | [plugins/github/README.md][plgh]          |
| Google Drive     | [plugins/googledrive/README.md][plgd]     |
| OneDrive         | [plugins/onedrive/README.md][plod]        |
| Medium           | [plugins/medium/README.md][plme]          |
| Google Analytics | [plugins/googleanalytics/README.md][plga] |


`

export default function CourseDescription() {
    const { course_id } = useParams();
    const [course, setCourse] = useState({});
    const [section, setSection] = useState({});
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(true);
    
    
    const fetchCourse = async () => {
        try {
            setLoading(true);
            const res = await getCourseInfo(course_id);
            setCourse(res);
            setLoading(false);
        } catch (err) {
            console.log('Failed!!');
        }
    }

    const fetchSection = async () => {
        try {
            const res = await joinCourse(course_id);
            setSection(res);
        } catch (err) {
            console.log('Failed!!');
        }
    }

    const subscriber = () => {
        subscribeCourse(course_id);
        setSubscribed(true);
        message.success("Successfully subscribe to this course!");

    }
    console.log('Section : ', section);
    useEffect(() => {
        fetchCourse();
    }, []);

    useEffect(() => {
        fetchSection();
    }, []);
    console.log(course);
    return (<>
        { loading && <></>} 
        {!loading && <>
            <div style={{ backgroundColor: '#001529' }} className="w-full mx-auto shadow-md overflow-hidden">
                <div className="md:hidden block">
                    <div className="relative m-2">
                        <img src={'https://ilearn.yurineko.net/' + course.cover} alt={course.name} class="h-60 w-full object-cover" />
                        <span class="px-1 py-1 text-white bg-red-700 rounded absolute right-0 bottom-0"> 
                        {/* bg-opacity-50 */}
                            {course.public ? 'Public' : 'Private'}
                        </span>
                    </div>
                </div>
                <div className="container md:flex md:mx-10 xl:px-40" style={{justifyContent:'space-between'}}>
                    <div className="text-center p-5 justify-center flex flex-col md:text-left">
                        <div className="uppercase block leading-tight text-3xl text-white font-bold">{course.name}</div>
                        <p className="text-white mt-1">{course.description}</p>
                        <p className="text-white mt-1">Category: {course.category.name}</p>

                        <div className="tracking-wide text-sm text-indigo-500 font-semibold">Tutor: {course.tutor.name}</div>
                        
                        {course.public || subscribed? <Link to={`/section/${course_id}/${section.section_id}`} className="bg-blue-500 font-bold text-white py-3 px-2 hover:bg-blue-600 my-2 md:w-20 text-center">
                            Join
                        </Link> : <Link to={`/course/${course_id}`} className="bg-blue-500 font-bold text-white py-3 px-2 hover:bg-blue-600 my-2 md:w-20 text-center" onClick={subscriber}>
                            Subscribe
                        </Link>}

                        <div className="text-center md:text-left text-white flex" style={{ justifyContent:'center', alignItems:'flex-end' }}>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{course.subscriber_count}</span>
                            <span className="pr-4">subscribers</span>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{course.view}</span>
                            <span>views</span>
                           
                        </div>
                    </div>
                    <div className="md:flex-shrink-0 md:block hidden right-0 text-right">
                        <div className="relative m-2">
                            <img src={'https://ilearn.yurineko.net/' + course.cover} alt={course.name} class="h-60 w-full object-cover md:w-70" />
                            <span class="px-1 py-1 text-white bg-red-700 rounded absolute left-0 bottom-0">
                                {course.public ? 'Public' : 'Private'}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <Layout className="container mx-auto xl:px-40">
                <Content className="p-0 md:px-70">
                    <div className="site-layout-background container mx-auto my-2" style={{ padding: 10, minHeight: 360 }}>
                        <ReadMore children={course.content} />
                    </div>

                </Content>
            </Layout>
        </>}
    </>
    );
};
