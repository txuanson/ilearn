import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { Card, Menu, Dropdown, Button, message, Space, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Course({
    data,
    showConfirmDeleteCourse,
    onOpenModal
}) {
    const menu = (data =>
        <Menu>
            <Menu.Item key="1">
                <Link to={`tutor/course/${data._id}/edit`}>Edit</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={`tutor/course/${data._id}/section`}>Sections</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <a onClick={() => onOpenModal(data._id,"Subscribers", "subscriber", "Ban")}>Subscribers</a>
            </Menu.Item>
            <Menu.Item key="4">
                <a onClick={() => onOpenModal(data._id,"Pending For Accept", "pending", "Approve")}>Pending</a>
            </Menu.Item>
            <Menu.Item key="5">
                <a onClick={() => onOpenModal(data._id,"Banned Users", "banned", "Unban")}>Banned</a>
            </Menu.Item>
            <Menu.Item key="6">
                <a onClick={() => showConfirmDeleteCourse(data._id)}>Delete</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Row className="block">
            <div className="p-2 mb-2 bg-white shadow-xl flex  flex-col md:flex-row justify-start dark:bg-gray-800">
                <Col xs={24} md={3} className="relative justify-center items-center flex">
                    <img src={`${process.env.REACT_APP_BASE_HOST}/${data.cover}`} alt={data.name} className="h-52 w-auto md:max-h-24" />
                    <span className="px-1 py-1 text-white bg-blue-700 rounded absolute right-0 bottom-0 bg-opacity-50">
                        {data.public ? 'Public' : 'Private'}
                    </span>
                </Col>
                <Col xs={24} md={21} className="relative flex flex-col space-between w-full md:flex-row">
                    <div className="text-center flex-col items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                        <p className="md:text-xl text-lg leading-5 pb-2">
                            {data.name}
                        </p>
                    </div>

                    <div className="mt-auto ml-auto flex">
                        <Space wrap>
                            <Dropdown overlay={() => menu(data)}>
                                <Button>
                                    Action <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Space>
                    </div>
                </Col>
            </div>
        </Row>
    );
}