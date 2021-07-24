import React from 'react';
import {Breadcrumb, Layout} from "antd";
import {Link} from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Select,
    Switch,
  } from 'antd';

const { TextArea } = Input;

export default function CreateNewCourse() {
    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>  
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>New course</Breadcrumb.Item>
            </Breadcrumb>
            
            <Form>
                <Form.Item 
                    label="Course name: "
                    rules={[{ required: true, message: 'Course name is required!' }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item 
                    label="Category: "
                    rules={[{ required: true, message: 'Category is required!' }]}
                >    
                    <Select required>
                        <Select.Option value="Design">Design</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item 
                    label="Public: "
                >
                    <Switch />
                </Form.Item>

                <Form.Item 
                    label="Content: "
                    rules={[{ required: true, message: 'Content is required!' }]}
                >
                    <TextArea rows={5} />
                </Form.Item>

                <Form.Item>
                    <Button>Create</Button>
                </Form.Item>

            </Form>
        </Layout>
    )
}


