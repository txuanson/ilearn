import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Link, useParams} from "react-router-dom";
import ReadMore from '../components/ui/ReadMore';
import { getCourseInfo } from "../api/course";
import { joinCourse } from '../api/user';
import { Layout, Space, message, Button} from 'antd';
import { subscribeCourse } from '../api/user';
import handleErrorApi from '../utils/handleErrorApi';

const { Content } = Layout;

export default function CourseDescription() {
    const { course_id } = useParams();
    const [course, setCourse] = useState({});
    const [section, setSection] = useState({});
    const [subscribed, setSubscribed] = useState(course.subscribed);
    const [pending, setPending] = useState(course.pending);
    const [loading, setLoading] = useState(true);

    
    const fetchCourse = async () => {
        try {
            setLoading(true);
            const res = await getCourseInfo(course_id);
            setCourse(res);
            setLoading(false);
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const fetchSection = async () => {
        try {
            const res = await joinCourse(course_id);
            setSection(res);
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const subscriber = async() => {
        try {
            const subs = await subscribeCourse(course_id);
            setSubscribed(subs);
            if (subscribed && course.public){
                setPending(true);
        }
        } catch (err) {
            handleErrorApi(err);
        }  
    }
    useEffect(() => {
        fetchCourse();
    }, []);

    
    const HOST = process.env.REACT_APP_BASE_HOST;
    return (<>
        { loading && <></>} 
        {!loading && <>
            <div style={{ backgroundColor: '#001529' }} className="w-full mx-auto shadow-md overflow-hidden">
                <div className="md:hidden block">
                    <div className="relative m-2">
                        <img src={HOST + '/' + course.cover} alt={course.name} class="h-60 w-full object-cover" />
                        <span class="px-1 py-1 text-white bg-red-700 rounded absolute right-0 bottom-0"> 
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
                        
                        {subscribed && course.public?
                        <div className="flex flex-row" style={{justifyContent:'center'}}>
                         <Button type="primary" className="font-bold px-5 mr-4 mt-2" onClick={fetchSection}> 
                            <Link to={`/section/${course_id}/${section.section_id}`}>
                                Join
                            </Link> 
                         </Button>
                         <Button type="primary" className="font-bold px-5 mt-2">
                         Unsubscribed
                         </Button>
                         
                        </div>
                        : <Link to={`/course/${course_id}`} className="bg-blue-500 font-bold text-white py-3 px-2 hover:bg-blue-600 my-2 md:w-20 text-center" onClick={subscriber}>
                            Subscribe
                        </Link>}

                        <div className="text-center md:text-left text-white flex mt-2" style={{ justifyContent:'center', alignItems:'flex-end' }}>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{course.subscriber_count}</span>
                            <span className="pr-4">subscribers</span>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{course.view}</span>
                            <span>views</span>
                           
                        </div>
                    </div>
                    <div className="md:flex-shrink-0 md:block hidden right-0 text-right">
                        <div className="relative m-2">
                            <img src={HOST + '/' + course.cover} alt={course.name} class="h-60 w-full object-cover md:w-70" />
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
