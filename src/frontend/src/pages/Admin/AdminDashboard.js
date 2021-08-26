import { Breadcrumb, Layout, Table, Card, Col, Row} from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/input/Search";
const new_courses = [
    {
      course_name: 'Introduction',
      create_at: '1st Jan 2022',
      category: 'C++',
      subscribers: '100',
    },
    {
    course_name: 'Introduction 2',
    create_at: '3rd Jan 2022',
    category: 'C++',
    subscribers: '100',
    },
    {
    course_name: 'Introduction 3',
    create_at: '5th Jan 2022',
    category: 'C++',
    subscribers: '100',
    },
  ];


export default function AdminDashBoard(props) {
    
    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/admin">Admin</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search" enterButton="Search" allowClear />
            <div className="site-card-wrapper my-5 flex md:flex-row flex-col">
                <Card title="Accounts" bordered={false} style={{backgroundColor:'#FA306C', color:'#fff'}} className="text-center md:p-5 md:mx-2 mb-2">
                    <span className="text-3xl font-bold">100 000</span>
                    <p>Total number of accounts</p>
                </Card>
                <Card title="Accounts" bordered={false} style={{backgroundColor:'#A25DFB', color:'#fff'}} className="text-center md:p-5 md:mx-2 mb-2">
                    <span className="text-3xl font-bold">1234</span>
                    <p>New accounts this month</p>
                </Card>
                <Card title="Courses" bordered={false} style={{backgroundColor:'#51AD97', color:'#fff'}} className="text-center md:p-5 md:mx-2 mb-2">
                    <span className="text-3xl font-bold">2000</span>
                    <p>Total number of courses</p>
                </Card>
                <Card title="Courses" bordered={false} style={{backgroundColor:'#047D8D', color:'#fff'}} className="text-center md:p-5 md:mx-2 mb-2">
                    <span className="text-3xl font-bold">1234</span>
                    <p>New courses this month</p>
                </Card>
            </div>
            <Table dataSource={new_courses} pagination={false} scroll={{ x: 'fit-content' }}>
                <Column title="Course name" dataIndex={"course_name"} key="course_name" />
                <Column title="Category" dataIndex={"category"} key="category" />
                <Column title="Create at" dataIndex={"create_at"} key="create_at" />
                <Column title="Subscribers" dataIndex={"subscribers"} key="subscribers" />
            </Table>
        </Layout>
    );
}