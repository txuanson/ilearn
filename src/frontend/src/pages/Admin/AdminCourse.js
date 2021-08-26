import { Breadcrumb, Layout, Space, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/input/Search";
const data = [
  ];
export default function AdminCourse(props) {
    
    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/admin">Admin</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Course</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search" enterButton="Search" allowClear />
            <Table dataSource={data} pagination={false} scroll={{ x: 'fit-content' }}>
                <Column title="Course name" dataIndex={"course_name"} key="course_name" />
                <Column title="Tutor" dataIndex={"tutor"} key="tutor" />
                <Column title="Create at" dataIndex={"create_at"} key="create_at" />
                <Column title="Subscribers" dataIndex={"subscribers"} key="subscribers" />
                <Column title="View" dataIndex={"view"} key="view" />
                <Column title="Sections" dataIndex={"sections"} key="sections" />
                <Column title="Action" key="action" render={((text, record) => (
                    <Space size="small">
                        <Link to={`/admin/${record.course._id}/edit`}>Edit</Link>
                        <a>Delete</a>
                    </Space>
                ))}></Column>
            </Table>
        </Layout>
    );
}