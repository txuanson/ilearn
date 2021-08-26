import { Breadcrumb, Layout, message, notification } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Select, Switch, Button, Upload, Input } from 'antd';
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from '@ant-design/icons';
import handleErrorApi from "../../utils/handleErrorApi";
import { getAllCategory } from "../../api/category";
import MDEditor from "@uiw/react-md-editor";
import { Content } from "antd/lib/layout/layout";
import { useForm } from 'antd/lib/form/Form';
import { createCourse, editCourse } from "../../api/tutorDashboard";
import { getCourseInfo } from "../../api/course";
import TextArea from "antd/lib/input/TextArea";

const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

const mapCategoryToOption = (category) =>
    category.map(e => ({
        label: e.name,
        value: e._id
    }))


const mapCourseInfoToForm = (course) =>
({
    name: course.name,
    content: course.content,
    public: course.public,
    category: course.category._id,
    description: course.description
})
export default function CreateCourse() {
    const { course_id } = useParams();
    const [form] = useForm();
    const [category, setCategory] = useState([]);
    const [cover, setCover] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');

    const onFinish = async (values) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('public', values.public ?? true);
            formData.append('category', values.category);
            formData.append('content', content);
            formData.append('description', values.description);
            if (course_id) {
                if (cover) {
                    formData.append('cover', cover);
                }
                await editCourse(course_id, formData);
                message.success("Course edited successfully!");
            }
            else {
                formData.append('cover', cover);
                await createCourse(formData);
                message.success("Course created successfully!");
            }
            form.resetFields();
            setCover('');
            setImage('');
            setContent('');
            window.location.href = '/tutor';
        }
        catch (err) {
            handleErrorApi(err);
        }
    };

    const handleAddImage = (file) => {
        setCover(file);
        return new Promise(async (res, rej) => {
            let src = file.url
            if (!src) {
                src = await new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = () => resolve(reader.result)
                })
            }
            if (src) {
                setImage(src)
            }
        })
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
        if (!isJpgOrPng) {
            message.error('Only accept JPG/PNG file!')
        }
        const isLt7M = file.size / 1024 / 1024 < 7
        if (!isLt7M) {
            message.error('Image file size must be < 7MB')
        }
        return isJpgOrPng && isLt7M
    }

    const fetchCategory = async () => {
        try {
            const response = await getAllCategory();
            setCategory(response);
        }
        catch (err) {
            handleErrorApi(err);
        }
    }

    const appendEditData = async (course_id) => {
        try {
            const res = await getCourseInfo(course_id);
            setImage(`${process.env.REACT_APP_BASE_HOST}/${res.cover}`);
            setContent(res.content);
            form.setFieldsValue(mapCourseInfoToForm(res));
        } catch (err) {
            handleErrorApi(err);
        }
    }

    useEffect(() => {
        console.log(course_id);
        if (course_id) {
            appendEditData(course_id);
        }
        fetchCategory();
    }, [])

    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{course_id ? "Edit Course" : "Create Course"}</Breadcrumb.Item>
            </Breadcrumb>
            <Content >
                <Form name="validate_other"
                    {...formItemLayout}
                    form={form}
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item name="name" label="Course name"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter course name!',
                            },
                        ]}>
                        <Input placeholder="Please enter course name" />
                    </Form.Item>
                    <Form.Item
                        name="category"
                        label="Category"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please select course category!',
                            },
                        ]}
                    >
                        <Select placeholder="Please select course category" options={mapCategoryToOption(category)}>
                        </Select>
                    </Form.Item>

                    <Form.Item name="public" label="Public" valuePropName="checked">
                        <Switch defaultChecked={true} />
                    </Form.Item>

                    <Form.Item name="cover" label="Cover" rules={!course_id ? [
                        {
                            required: true,
                            message: 'Cover required!',
                        },
                    ] : []}>
                        <div className="flex flex-col overflow-hidden">
                            <ImgCrop aspect={1.6} quality={1}>
                                <Upload
                                    showUploadList={false}
                                    accept="image/png, image/jpeg"
                                    action={handleAddImage}
                                    multiple={false}
                                    beforeUpload={beforeUpload}
                                >
                                    <div
                                        className="flex rounded border-dotted border-blue-300 border-2 items-center justify-center overflow-hidden"
                                        style={{ width: 200, height: 125 }}>
                                        {!image && (
                                            <p className="text-lg color-blue">
                                                <UploadOutlined />
                                            </p>
                                        )}
                                        {image && <img src={image} />}
                                    </div>
                                </Upload>
                            </ImgCrop>
                        </div>
                    </Form.Item>
                    <Form.Item name="description" label="Description"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter course description!',
                            },
                        ]}>
                        <TextArea placeholder="Please enter course description"></TextArea>
                    </Form.Item>
                    <Form.Item name="content" label="Content"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please enter course content!',
                            },
                        ]}>
                        <MDEditor value={content} onChange={setContent} preview="live"></MDEditor>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            span: 16,
                            offset: 4
                        }}
                    >
                        <Button type="primary" htmlType="submit"
                            class="text-white py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg">
                            {course_id ? "Edit" : "Create"}
                        </Button>
                    </Form.Item>
                </Form >
            </Content>
        </Layout >
    );
}