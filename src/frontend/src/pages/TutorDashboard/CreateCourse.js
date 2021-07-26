import { Breadcrumb, Layout} from "antd";
import React from "react";
import { Link} from "react-router-dom";
import {Form, Select, Switch, Button, Upload, Input} from 'antd';
import { UploadOutlined} from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };
export default function CreateCourse(data){
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>  
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Create class</Breadcrumb.Item>
            </Breadcrumb>
            <Form name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item name="Name" label="Course name"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please enter course name!',
                },
                ]}>
                    <Input placeholder="Please enter course name"/>
                </Form.Item>
                <Form.Item
                    name="Category"
                    label="Category"
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please select course category!',
                    },
                    ]}
                >
                    <Select placeholder="Please select course category">
                        <Option value="Programming">Programming</Option>
                        <Option value="Social skills">Social skills</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item name="Public" label="Public"
                rules={[
                {
                    required: true,
                    message: 'Please set public!',
                },
                ]}>
                    <Switch onChange={onChange}/>                
                </Form.Item>             

                <Form.Item label="Cover">
                    <Form.Item name="Cover" valuePropName="fileList" getValueFromEvent={normFile} noStyle
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please upload course cover!',
                    },
                    ]}>
                    <Upload.Dragger name="picture" action="/upload.do" listType="picture">
                        <p className="ant-upload-drag-icon">
                        <UploadOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item name="Content" label="Content"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please enter course content!',
                },
                ]}>
                    <TextArea rows={5} placeholder="Please enter course content"/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    span: 12,
                    offset: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={onFinish}
                    class="text-white py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg">
                    Create
                    </Button>
                </Form.Item>
            </Form>
            
        </Layout>
    );
}