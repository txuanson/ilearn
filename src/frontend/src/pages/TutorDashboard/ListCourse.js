import { Breadcrumb, Layout, message, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "../../components/course/Course";
import { SearchOutlined } from "@ant-design/icons";
import { deleteCourse, listCourse } from "../../api/tutorDashboard";
import handleErrorApi from "../../utils/handleErrorApi";
import confirm from "antd/lib/modal/confirm";
import { ExclamationCircleOutlined } from '@ant-design/icons'
import Form from "antd/lib/form/Form";
import Search from "antd/lib/input/Search";

export default function ListCourse() {
    const [courses, setCourses] = useState([]);
    const [currentQuery, setCurrentQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemCount, setItemCount] = useState(10);

    const onSearch = (query) => {
        fetchCourse({query});
    }

    const fetchCourse = async ({page = currentPage, query = currentQuery} = {}) => {
        try {
            setCurrentQuery(query);
            setCurrentPage(page);
            const response = await listCourse(page, query);
            const { items, items_count } = response;
            setCourses(items);
            setItemCount(items_count);
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const showConfirmDeleteCourse = (course_id) => {
        confirm({
            title: "Confirm delete",
            icon: <ExclamationCircleOutlined />,
            content: "Are you sure you want to delete this course? This process cannot be undone.",
            okText: "OK, Delete",
            cancelText: "Cancel",
            onOk() {
                handleDeleteCourse(course_id);
            }
        });
    }

    const handleDeleteCourse = async (course_id) => {
        try {
            await deleteCourse(course_id);
            message.success("Course deleted successfully!");
            fetchCourse();
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const handleChangePage = (page) => {
        fetchCourse({page});
    }

    useEffect(() => {
        fetchCourse();
    }, [])

    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>My Course</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search for course" onSearch={onSearch} enterButton="Search" allowClear/>
            
            {courses.map(element => (
                <Course
                    data={element}
                    showConfirmDeleteCourse={showConfirmDeleteCourse}
                />
            ))}
            <Pagination className="ml-auto" defaultCurrent={currentPage} pageSize={10} total={itemCount} onChange={handleChangePage} />
        </Layout>
    );
}