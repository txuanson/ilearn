import MDEditor from "@uiw/react-md-editor";
import { Breadcrumb, Button, DatePicker, Form, Input, Layout, message, Slider, TimePicker } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import handleErrorApi from "../../utils/handleErrorApi";
import { createSection, editSection, getSectionInfoTutor } from "../../api/section";

const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

const format = "YYYY-MM-DD HH:mm";

const mapSectionIntoForm = (section) => ({
    topic: section.topic,
    content: section.content,
    duration: section.duration,
    video: section.video,
    start_time: moment(section.start_time)
})

export default function CreateSection() {
    const { course_id, section_id } = useParams();
    const [form] = useForm();

    const onFinish = async values => {
        try {
            const payload = {
                topic: values.topic,
                duration: values.duration,
                start_time: values.start_time.toISOString(),
                video: values.video,
                content: values.content
            }
            // create section
            if (course_id) {
                payload.course_id = course_id;
                await createSection(payload);
                message.success("Section created successfully!");
                window.location.href = `/tutor/course/${course_id}/section`;
            }
            else if (section_id) {
                await editSection(section_id, payload);
                message.success("Section edited successfully!");
                window.location.href = `/tutor`;
            }
        }
        catch (err) {
            handleErrorApi(err);
        }
    }

    const appendEditData = async (section_id) => {
        try {
            const res = await getSectionInfoTutor(section_id);
            form.setFieldsValue(mapSectionIntoForm(res))
        }
        catch (err) {
            handleErrorApi(err);
        }
    }

    useEffect(() => {
        if (section_id) {
            appendEditData(section_id);
        }
    }, []);

    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{course_id ? "Create Section" : "Edit Section"}</Breadcrumb.Item>
            </Breadcrumb>
            <Content>
                <Form name="validate_other"
                    {...formItemLayout}
                    form={form}
                    initialValues={{
                        duration: 45
                    }}
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item name="topic" label="Topic"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter topic!'
                            },
                        ]}>
                        <Input placeholder="Please enter topic" />
                    </Form.Item>

                    <Form.Item name="duration" label="Duration" hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter section content!'
                            },
                        ]}>
                        <Slider min={30} max={90} />
                    </Form.Item>


                    <Form.Item name="start_time" label="Start Time"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter section content!'
                            },
                        ]}>
                        <DatePicker showTime format={format} placeholder="Select start time" />
                    </Form.Item>

                    <Form.Item name="video" label="Video">
                        <Input placeholder="Please enter video" type="url" />
                    </Form.Item>

                    <Form.Item name="content" label="Content"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter section content!'
                            },
                        ]}>
                        <MDEditor preview="live" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            span: 16,
                            offset: 4
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            {course_id ? "Create" : "Edit"}
                        </Button>
                    </Form.Item>
                </Form >
            </Content>
        </Layout >
    );
}