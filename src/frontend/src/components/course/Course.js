import React from 'react';
import 'antd/dist/antd.css';
import { Link} from "react-router-dom";
import { Card, Menu, Dropdown, Button, message, Space } from 'antd';
import { DownOutlined} from '@ant-design/icons';


function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/course/edit">Edit</Link>
      </Menu.Item>
      <Menu.Item key="2">
      <Link to="/course/sections">Sections</Link>
      </Menu.Item>
      <Menu.Item key="3">Subscribers</Menu.Item>
      <Menu.Item key="4">Pending</Menu.Item>
      <Menu.Item key="5">Banned</Menu.Item>
      <Menu.Item key="6">Delete</Menu.Item>
    </Menu>
  );

export default function Course(data){
    return (
        <div class="p-4 mb-2 bg-white shadow-xl rounded-xl flex  flex-col md:flex-row justify-start dark:bg-gray-800 gap-4">
            <div class="relative">
                <img src={data.cover} alt={data.name} class="rounded-xl w-full h-40 md:w-auto md:max-h-20"/>
                <span class="px-1 py-1 text-white bg-blue-700 rounded absolute right-0 bottom-0 bg-opacity-50">
                    {data.public ? 'Public' : 'Private'}
                </span>
            </div>
            <div class="relative flex flex-col space-between w-full md:flex-row">
                <div class="flex-col items-start justify-between text-gray-700 dark:text-white my-2 md:m-0">
                    <p class="text-xl leading-5 pb-2">
                        {data.name}
                    </p>
                    <div class="flex items-center text-gray-500 dark:text-gray-400 text-xs my-2 md:m-0">
                    {data.category}
                    </div>
                </div>
                
                <div class="absolute right-0 bottom-0 flex items-start my-2 md:m-1">   
                    <Space wrap>
                        <Dropdown overlay={menu}>
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