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
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/admin">Admin</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search" enterButton="Search" allowClear />
            <div className="site-card-wrapper my-5">
                <Row gutter={16}>
                <Col span={6}>
                    <Card title="Accounts" bordered={false} style={{backgroundColor:'#FA306C', color:'#fff'}} className="text-2xl font-bold text-center">
                    100 000
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Accounts" bordered={false} style={{backgroundColor:'#A25DFB', color:'#fff'}} className="text-2xl font-bold text-center">
                    1234
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Courses" bordered={false} style={{backgroundColor:'#51AD97', color:'#fff'}} className="text-2xl font-bold text-center">
                    1234
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Courses" bordered={false} style={{backgroundColor:'#047D8D', color:'#fff'}} className="text-2xl font-bold text-center">
                    1234
                    </Card>
                </Col>
                </Row>
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