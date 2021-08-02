import { Breadcrumb, Layout, Space, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Course from "../../components/course/Course";
import { SearchOutlined } from "@ant-design/icons";
import { listSection } from "../../api/tutorDashboard";
import handleErrorApi from "../../utils/handleErrorApi";
import Column from "antd/lib/table/Column";


export default function ListSection(props) {
    const { course_id } = useParams();
    console.log(course_id);
    const [value, setValue] = useState('');
    const [sections, setSection] = useState([]);
    
    const onEditSection = (section_id) =>{

    }

    const onDeleteSection = (section_id) =>{

    }

    useEffect(() => {
        const fetchListCourse = async () => {
            try {
                const response = await listSection(course_id);
                const { items } = response;
                setSection(items);
                console.log(items);
            }

            catch (err) {
                handleErrorApi(err);
            }
        }
        fetchListCourse()
    }, [])

    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item></Breadcrumb.Item>
                <Breadcrumb.Item>My Course</Breadcrumb.Item>
            </Breadcrumb>
            
            <Table dataSource={sections} pagination={false}>
                <Column title="Topic" dataIndex={["section", "topic"]} key="topic"/>
                <Column title="Type" dataIndex="section_type" key="type" />
                <Column title="Visible" dataIndex={["section", "visible"]} key="visible" render={(visible => (
                    <Switch checkedChildren="Show" unCheckedChildren="Hide" />
                ))} />
                <Column title="Action" key="action" render={((text, record) => (
                    <Space size="small">
                        <a href="/" target="_blank">Start</a>
                        <Link >Edit</Link>
                        <a >Delete</a>
                    </Space>
                ))}></Column>
            </Table>
        </Layout>
    );
}