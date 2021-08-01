import { Form, Input, Button, Space } from 'antd';
import React, {Component} from 'react'

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

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

export class UploadProfile extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };


    formRef = React.createRef();
    
    onUpload = (values) => {
        console.log(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };

    render() {
      const { editorState } = this.state;

      return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
          <Form.Item
            name="Name"
            label="Name: "
          >
              <Input />
          </Form.Item>

          <Form.Item 
            name="Bio"
            label="Bio: "
          >
              <Editor 
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                  options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                }}
              />
          
          </Form.Item>

          <Form.Item {...tailLayout}>
              <Space>
                <Button type="link" htmlType="submit" onClick={this.onUpload}>
                    Upload
                </Button>

                <Button htmlType="button" onClick={this.onReset}>
                    Reset
                </Button>
              </Space>
          </Form.Item>
      </Form>
      );
  }
}

export default UploadProfile
