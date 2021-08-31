import React from 'react';
import {Breadcrumb, Layout} from "antd";
import {Link} from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Switch,
    DatePicker,
    InputNumber
  } from 'antd';

const { TextArea } = Input;
const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
export default function CreateNewSection() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Layout className="container mx-auto xl:px-40">
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>  
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>New section</Breadcrumb.Item>
            </Breadcrumb>
            
            <Form name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                scrollToFirstError>
                <Form.Item name="topic" label="Topic"
                   hasFeedback
                   rules={[
                   {
                       required: true,
                       message: 'Please enter topic!',
                   },
                   ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item name="id" label="Course ID: " 
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please enter course ID!',
                    },
                    ]}
                >    
                    <Input/>
                </Form.Item>

                <Form.Item label="Visible: " name="visible"
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please choose visibility!',
                },
                ]}
                >
                    <Switch />
                </Form.Item>

                <Form.Item label="Content: " name="content"
                    rules={[{ required: true, message: 'Content is required!' }]}
                >
                    <TextArea rows={5} />
                </Form.Item>
                <Form.Item label="Duration: " name="duration"
                    rules={[{ required: true, message: 'Duration is required!' }]}
                >    
                    <InputNumber min={1}/>
                </Form.Item>
                <Form.Item name="date-time-picker" label="Start date:" 
                rules={[{ required: true, message: 'Time is required!' }]}>
                    <DatePicker showTime format="DD-MM-YYYY HH:mm:ss" />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    span: 12,
                    offset: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={onFinish}
                    className="text-white py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg">
                    Create
                    </Button>
                </Form.Item>

            </Form>
        </Layout>
    )
}


