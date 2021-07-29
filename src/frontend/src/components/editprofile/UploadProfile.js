import { Form, Input, Button } from 'antd';
import React, {Component} from 'react'

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
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
    
    onFinish = (values) => {
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
              <Button type="primary" htmlType="submit" onClick={this.onFinish}>
                  Submit
              </Button>

              <Button htmlType="button" onClick={this.onReset}>
                  Reset
              </Button>
          </Form.Item>
      </Form>
      );
  }
}

export default UploadProfile
