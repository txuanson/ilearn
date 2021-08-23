import { Breadcrumb, Layout, Space, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/input/Search";
const data = [
    {
        ban: true,
    },
    {
        ban: false,
    },
    {
        ban: true,
    },
];


export default function AdminAccount(props) {
    
    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/admin">Admin</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Account</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search" enterButton="Search" allowClear />
            <Table dataSource={data} pagination={false} scroll={{ x: 'fit-content' }}>
                <Column title="User" dataIndex={"user"} key="user" />
                <Column title="Role" dataIndex={"role"} key="role" />
                <Column title="Date registered" dataIndex={"date_registered"} key="date_registered" />
                <Column title="Last login" dataIndex={"last_login"} key="last_login" />
                <Column title="Status" dataIndex={"Status"} key="Status" />
                <Column title="Action" key="action" render={((text, record) => (
                    <a>Ban</a>
                ))}></Column>
            </Table>
        </Layout>
    );
}