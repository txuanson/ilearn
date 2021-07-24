import { Breadcrumb, Layout} from "antd";
import React from "react";
import { Link} from "react-router-dom";
import Course from "../../components/course/Course";
import {SearchOutlined } from "@ant-design/icons";

export default function ListCourse(data){
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
                    <input type="text" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 text-base"/>
                    <button class="ml-2 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700" type="submit">
                        <SearchOutlined />
                    </button>
                </form>
            </div>
            <Course
            name = "Software Engineering"
            public = {true}
            cover = "/default-class-cover.png"
            category = "Programming"
            />
            <Course
            name = "Software Engineering"
            public = {true}
            cover = "/default-class-cover.png"
            category = "Programming"
            />
            <Course
            name = "Welcome to our website"
            public = {false}
            cover = "/default-class-cover.png"
            category = "Programming"
            />
        </Layout>
    );
}