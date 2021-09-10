import { Breadcrumb, Button, Layout, message, Space, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import confirm from "antd/lib/modal/confirm";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { listSection } from "../../api/tutorDashboard";
import handleErrorApi from "../../utils/handleErrorApi";
import Column from "antd/lib/table/Column";
import { deleteSection } from "../../api/section";


export default function ListSection(props) {
    const { course_id } = useParams();
    const [value, setValue] = useState('');
    const [sections, setSection] = useState([]);

    const handleDeleteSection = async (section_id) => {
        try {
            await deleteSection(section_id);
            message.success("Section deleted successfully!");
            fetchListCourse();
        } catch (err) {
            handleErrorApi(err);
        }
    }

    
    const fetchListCourse = async () => {
        try {
            const response = await listSection(course_id);
            const { sections } = response;
            setSection(sections);
        }
        
        catch (err) {
            handleErrorApi(err);
        }
    }
    
    const showConfirmDeleteSection = (section_id) => {
        confirm({
            title: "Confirm Delete",
            icon: <ExclamationCircleOutlined />,
            content: "Are you sure you want to delete this section? This process cannot be undone.",
            okText: "OK, Delete",
            cancelText: "Cancel",
            onOk() {
                handleDeleteSection(section_id);
            }
        });
    }

    useEffect(() => {
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
            <div className="mb-2 flex">
                <Button type="primary" className="ml-auto" href={`/tutor/course/${course_id}/create-section`}>Add Section</Button>
            </div>
            <Table dataSource={sections} pagination={false} scroll={{ x: 'fit-content' }}>
                <Column title="Topic" dataIndex={["section", "topic"]} key="topic" />
                <Column title="Type" dataIndex="section_type" key="type" />
                <Column title="Action" key="action" render={((text, record) => (
                    <Space size="small">
                        <Button className="bg-yellow-400 hover:bg-yellow-300 text-white hover:text-white"><a href={record.section.start_url} target="_blank">Start</a></Button>
                        <Button type="primary"><Link to={`/tutor/section/${record.section._id}/edit`}>Edit</Link></Button>
                        <Button type="primary" danger><a onClick={() => showConfirmDeleteSection(record.section._id)}>Delete</a></Button>
                    </Space>
                ))}></Column>
            </Table>
        </Layout>
    );
}