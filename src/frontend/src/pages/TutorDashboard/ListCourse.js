import { Breadcrumb, Layout, message, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "../../components/course/Course";
import { courseActionWithType, deleteCourse, listCourse, listUser } from "../../api/tutorDashboard";
import handleErrorApi from "../../utils/handleErrorApi";
import confirm from "antd/lib/modal/confirm";
import { ExclamationCircleOutlined } from '@ant-design/icons'
import Search from "antd/lib/input/Search";
import Modal from "antd/lib/modal/Modal";
import ListUserTable from "../../components/table/ListUserTable";
import useWindowSize from "../../hooks/useWindowSize";

export default function ListCourse() {
    const { width } = useWindowSize();

    const [courses, setCourses] = useState([]);
    const [currentQuery, setCurrentQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemCount, setItemCount] = useState(10);

    // Modal
    const [tableData, setTableData] = useState([]);
    const [titleModal, setTitleModal] = useState("");
    const [visibleModal, setVisibleModal] = useState(false);
    const [listUserAction, setListUserAction] = useState("");
    const [currentListUserType, setCurrentListUserType] = useState("");
    const [currentCourse, setCurrentCourse] = useState("");

    const onSearch = (query) => {
        fetchCourse({ query });
    }

    const fetchCourse = async ({ page = currentPage, query = currentQuery } = {}) => {
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

    const fetchListUserWithType = async (course_id, type) => {
        try {
            const response = await listUser(course_id, type);
            setTableData(response.items);
        } catch (err) {
            handleErrorApi(err);
        }
    }

    const doCourseAction = async (course_id, user_id) => {
        try {
            await courseActionWithType({ course_id, action: listUserAction.toLowerCase(), user_id });
            message.success(`${listUserAction} user successfully!`)
            fetchListUserWithType(course_id, currentListUserType);
        }
        catch (err) {
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
        fetchCourse({ page });
    }

    const onOpenModal = (course_id, title, type, action) => {
        setCurrentListUserType(type);
        setVisibleModal(true);
        fetchListUserWithType(course_id, type);
        setTitleModal(title);
        setCurrentCourse(course_id);
        setListUserAction(action);
    }

    const onCancelModal = () => {
        setTableData([]);
        setVisibleModal(false);
        setCurrentListUserType("");
        setCurrentCourse("");
        
    }

    const handleAction = (user_id) => {
        doCourseAction(currentCourse, user_id);
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
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search for course" onSearch={onSearch} enterButton="Search" allowClear />

            {courses.map(element => (
                <Course
                    data={element}
                    showConfirmDeleteCourse={showConfirmDeleteCourse}
                    onOpenModal={onOpenModal}
                />
            ))}
            <Pagination className="ml-auto" defaultCurrent={currentPage} pageSize={10} total={itemCount} onChange={handleChangePage} />
            <Modal
                title={titleModal}
                visible={visibleModal}
                footer={null}
                onCancel={onCancelModal}
                width={1204 < width * 1 ? 1204 : width}
            >
                <ListUserTable data={tableData} action={listUserAction} handleAction={handleAction}/>
            </Modal>
        </Layout>
    );
}