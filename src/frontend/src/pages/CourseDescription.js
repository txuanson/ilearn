import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { useParams } from "react-router-dom";
import ReadMore from '../components/ui/ReadMore';
import { getCourseInfo } from "../api/course";
import { joinCourse } from '../api/user';
import { Layout, Button } from 'antd';
import { subscribeCourse, unsubscribeCourse, getProfileUser } from '../api/user';
import handleErrorApi from '../utils/handleErrorApi';
import { message } from 'antd';

const { Content } = Layout;

export default function CourseDescription({ user, ...props }) {
    const { course_id } = useParams();
    const [course, setCourse] = useState({});
    const [subscriber, setSubscriber] = useState(0);
    const [subscribed, setSubscribed] = useState(false);
    const [pending, setPending] = useState(false);
    const [actor, setActor] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchCourse = async () => {
        try {
            setLoading(true);
            const res = await getCourseInfo(course_id);
            setCourse(res);
            setSubscribed(res.subscribed);
            setPending(res.pending);
            setSubscriber(res.subscriber_count);
            setLoading(false);
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const fetchUser = async () => {
        try {
            const profile = await getProfileUser();
            setActor(profile);
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const fetchSection = async () => {
        try {
            const section = await joinCourse(course_id);
            if (section.section_id)
                window.location.href = `/section/${course_id}/${section.section_id}`;
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const patchSubscribe = async () => {
        try {
            if (course.subscribed != undefined) {
                await subscribeCourse(course_id);
                setPending(true);
                if (course.public || actor._id == course.tutor._id || actor.role == 10) {
                    setSubscribed(true);
                    setPending(false);
                    setSubscriber(subscriber + 1);
                }
            }
            else {
                message.error('You must login to iLearn before subscribe to course!');
            }
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const patchUnsubscribe = async () => {
        try {
            await unsubscribeCourse(course_id);
            setSubscribed(false);
            setPending(false);
            setSubscriber(subscriber - 1);
        } catch (err) {
            handleErrorApi(err);
        }
    }
    useEffect(() => {
        if (user) {
            fetchUser();
        }
        fetchCourse();

    }, []);


    const HOST = process.env.REACT_APP_BASE_HOST;
    return (<>
        {loading && <></>}
        {!loading && <>
            <div style={{ backgroundColor: '#001529' }} className="w-full mx-auto shadow-md overflow-hidden grid place-items-center">
                <div className="md:hidden block">
                    <div className="relative m-2">
                        <img src={HOST + '/' + course.cover} alt={course.name} className="h-60 w-full object-cover"/>
                        <span className="px-1 py-1 text-white bg-red-700 rounded absolute right-0 bottom-0">
                            {course.public ? 'Public' : 'Private'}
                        </span>
                    </div>
                </div>
                <div className="container md:flex xl:px-40" style={{ justifyContent: 'space-between' }}>
                    <div className="text-center p-5 justify-center flex flex-col md:text-left">
                        <div className="uppercase block leading-tight text-3xl text-white font-bold">{course.name}</div>
                        <p className="text-white mt-1">{course.description}</p>
                        <p className="text-white mt-1">Category: {course.category.name}</p>
                        <div className="tracking-wide text-sm text-indigo-500 font-semibold">Tutor: {course.tutor.name}</div>

                        {subscribed ?
                            <div className="flex flex-row  justify-center md:justify-start">
                                <Button type="primary" className="font-bold px-5 mr-4 mt-2" onClick={fetchSection}>
                                    Join
                                </Button>
                                <Button type="danger" className="font-bold px-5 mt-2" onClick={patchUnsubscribe}>
                                    Unsubscribe
                                </Button>

                            </div>
                            : <>
                                {pending ?

                                    <div className="md:place-items-start place-items-center">
                                        <div className="font-bold p-2 mr-4 mt-2 bg-yellow-500 text-center text-white text-l md:w-min w-full">
                                            Pending
                                        </div>

                                    </div>
                                    :
                                    <div>
                                        <Button type="primary" className="font-bold px-5 mt-2 md:place-items-start place-items-center" onClick={patchSubscribe} >
                                            Subscribe
                                        </Button>
                                    </div>}
                            </>}

                        <div className="text-center md:text-left text-white flex mt-2 justify-center md:justify-start" style={{ alignItems: 'flex-end' }}>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{subscriber}</span>
                            <span className="pr-4">
                                {subscriber > 1 ? 'subscribers' : 'subscriber'}
                            </span>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{course.view}</span>
                            <span className="pr-4">
                            {course.view > 1 ? 'views' : 'view'}
                            </span>
                            <span className="font-bold text-4xl md:text-5xl pr-1">{course.section_count}</span>
                            <span>
                            {course.section_count > 1 ? 'sections' : 'section'}
                            </span>


                        </div>
                    </div>
                    <div className="md:flex-shrink-0 md:block hidden right-0 text-right">
                        <div className="relative m-2">
                            <img src={HOST + '/' + course.cover} alt={course.name} className="h-60 w-full object-cover md:w-70" />
                            <span className="px-1 py-1 text-white bg-red-700 rounded absolute left-0 bottom-0">
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
