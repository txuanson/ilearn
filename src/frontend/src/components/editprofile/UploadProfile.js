import { Form, Input, Button, Space, message } from 'antd';
import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { patchProfile } from '../../api/user';
import handleErrorApi from '../../utils/handleErrorApi';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 0,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 16,
  },
};

function UploadProfile(props) {
    const [name, setName] = useState(props.name);
    const [bio, setBio] = useState(props.bio);
    const [form] = Form.useForm();

    const NameChangeHandler = (event) => {
      setName(event.target.value);
    };
  
    const BioChangeHandler = (editorState) => {
      setBio(editorState);
    };

    const onUpload = async (event) => {

      try {
        const res = await patchProfile({name: name, bio: bio});
        message.success("Profile changed successfully!");
        window.location.reload();

      } catch (error) {
        handleErrorApi(error);
      }

    };

    const onReset = () => {
      form.resetFields();
    };

    return (
      <Form {...layout} name="control-ref" form={form} initialValues = { {Name : props.name, Bio : props.bio} } >
          <Form.Item
            name="Name"
            label="Name: "
          >
            <Input 
                value={name}
                onChange={NameChangeHandler}/>
          </Form.Item>

          <Form.Item 
            name="Bio"
            label="Bio: "
          >
            <MDEditor
                value={bio}
                onChange={BioChangeHandler}
            />
              {/* <MDEditor.Markdown source={bio} /> */}
          
          </Form.Item>

          <Form.Item {...tailLayout}>
              <Space>
                <Button type="link" htmlType="submit" onClick={onUpload}>
                    Upload
                </Button>

                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
              </Space>
          </Form.Item>
      </Form>
      );
  }


export default UploadProfile
