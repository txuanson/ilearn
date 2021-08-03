import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { Card, Menu, Dropdown, Button, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


function handleMenuClick(e) {
    // message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (data =>
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Link to={`tutor/course/${data._id}/edit`}>Edit</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to={`tutor/course/${data._id}/section`}>Sections</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to={`tutor/course/${data._id}/subscriber`}>Subscribers</Link>
        </Menu.Item>
        <Menu.Item key="4">
            <Link to={`tutor/course/${data._id}/pending`}>Pending</Link>
        </Menu.Item>
        <Menu.Item key="5">
            <Link to={`tutor/course/${data._id}/banned`}>Banned</Link>
        </Menu.Item>
        <Menu.Item key="6">
            <Link to={`tutor/course/${data._id}/delete`}> Delete</Link>
        </Menu.Item>
    </Menu>
);

export default function Course({ data }) {
    const handleDeleteCourse = (course_id) =>{
        
    }
    return (
        <div class="p-2 mb-2 bg-white shadow-xl flex  flex-col md:flex-row justify-start dark:bg-gray-800 gap-4">
            <div class="relative justify-center items-center flex">
                <img src={`${process.env.REACT_APP_BASE_HOST}/${data.cover}`} alt={data.name} class="h-52 w-auto md:max-h-24" />
                <span class="px-1 py-1 text-white bg-blue-700 rounded absolute right-0 bottom-0 bg-opacity-50">
                    {data.public ? 'Public' : 'Private'}
                </span>
            </div>
            <div class="relative flex flex-col space-between w-full md:flex-row">
                <div class="text-center flex-col items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                    <p class="text-xl leading-5 pb-2">
                        {data.name}
                    </p>
                    <div class="flex items-center text-gray-500 dark:text-gray-400 text-xs my-2 md:m-0">
                        {data.category}
                    </div>
                </div>

                <div class="absolute right-0 bottom-0 flex items-start my-1 md:m-1">
                    <Space wrap>
                        <Dropdown overlay={() => menu(data)}>
                            <Button>
                                Action <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Space>
                </div>
            </div>
        </div>
    );
}