import { Form, Input, Button, Space } from 'antd';
import React, { useState } from 'react'

import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";
import { patchProfile } from '../../api/user';

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

function UploadProfile(chirdren) {
    console.log("children: ", chirdren)

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    // editorState: EditorState.createEmpty(),
    const NameChangeHandler = (event) => {
      setName(event.target.value);
    };
  
    const BioChangeHandler = (event) => {
      setBio(event.target.value);
    };

    const onUpload = async (event) => {

      try {
        const res = await patchProfile({name: name, bio: bio});

      } catch (error) {
        console.log("fail: ", error);
        // handleErrorApi(error);
      }

    };

    const onReset = () => {
      console.log(chirdren)
      // setName(children.name);
      // setBio(children.bio);
    };

    return (
      <Form {...layout} name="control-ref">
          <Form.Item
            name="Name"
            label="Name: "
          >
              <Input onChange={NameChangeHandler}/>
          </Form.Item>

          <Form.Item 
            name="Bio"
            label="Bio: "
          >
              <Editor onChange={BioChangeHandler}
                // editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
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
