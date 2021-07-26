import { Breadcrumb, Layout} from "antd";
import React, {useState} from "react";
import { Link} from "react-router-dom";
import {SearchOutlined } from "@ant-design/icons";
import { Table, Space, Switch} from 'antd';
const { Column} = Table;
const { Content} = Layout;

const data = [
    {
      topic: 'Introduction',
      content: 'First introduction to SE',
      duration: 60,
      start_time: '1st Jan 2022',
      visible: false,
      section_id: '001'
    },
    {
    topic: 'Introduction 2',
    content: 'Introduction to SE',
    duration: 60,
    start_time: '3rd Jan 2022',
    visible: false,
    section_id: '002'
    },
    {
    topic: 'Introduction 3',
    content: 'Introduction to SE',
    duration: 60,
    start_time: '5th Jan 2022',
    visible: true,
    section_id: '003'
    },
  ];

  
export default function ListSection(){
    const [value, setValue] = useState('');
    const onSubmit=(event) => {
        event.preventDefault();
        console.log(value);
    }
    const onChange = (checked, index) => {
        console.log('data', index)
        console.log(`switch to ${checked}`);
    };
   return(

    <Layout className="px-0 md:px-4 lg:px-20">
        <Breadcrumb style={{ margin: '0 0 10px' }}>
            <Breadcrumb.Item>  
                <Link to="/homepage">iLearn</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Sections</Breadcrumb.Item>
        </Breadcrumb>
        <div className="text-end"> 
            <form className="flex my-2 md:w-full justify-center">
                <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 bg-white text-gray-700 text-base"
                onChange={event => setValue(event.target.value)}/>
                <button className="ml-2 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700" type="submit"
                onClick={onSubmit}>
                    <SearchOutlined />
                </button>
            </form>
        </div>
        <Content>
            <Table dataSource={data}>   
                <Column title="Topic" dataIndex="topic" key="topic" />
                <Column title="Content" dataIndex="content" key="content" />
                <Column title="Duration" dataIndex="duration" key="duration" />
                <Column title="Start time" dataIndex="start_time" key="start_time" />
                <Column title="Visible" dataIndex="visible" key="visible"
                render={()=>(
                    <Switch onChange={onChange} defaultChecked={data.visible}  /> 
                )}> 
                </Column>
                <Column title="Action" key="action"
                render={() => (
                    <Space size="middle">
                        <Link to={`tutors/course/section/edit`}>Edit</Link>
                        <Link to={`tutors/course/section/delete`}>Delete</Link>
                    </Space>
                )}
                />
            </Table>
        </Content>
    </Layout>
   );
}