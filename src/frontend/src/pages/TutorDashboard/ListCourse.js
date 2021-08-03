import { Breadcrumb, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "../../components/course/Course";
import { SearchOutlined } from "@ant-design/icons";
import { listCourse } from "../../api/tutorDashboard";
import handleErrorApi from "../../utils/handleErrorApi";

export default function ListCourse() {
    const [value, setValue] = useState('');
    const [courses, setCourses] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    }
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    useEffect(async () => {
        try {
            const response = await listCourse();
            const { items } = response;
            setCourses(items);
        } catch (err) {
            handleErrorApi(err);
        }
    }, [])

    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>My Course</Breadcrumb.Item>
            </Breadcrumb>
            <div className="text-end">
                <form class="flex my-2 md:w-full justify-center">
                    <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 text-base"
                        onChange={event => setValue(event.target.value)} />
                    <button className="ml-2 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700" type="submit"
                        onClick={onSubmit}>
                        <SearchOutlined />
                    </button>
                </form>
            </div>
            {courses.map(element =>(
                <Course data={element}/>
            ))}
        </Layout>
    );
}