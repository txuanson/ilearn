import { Form, Input, Button } from 'antd';
import React, { useState } from 'react'
import { editCategory } from '../../api/admin';
import { Modal } from 'antd';


const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 0,
  },
};


export default function EditCategory({id, name}) {
    const [nameCategory, setNameCategory] = useState(name);
    const [visible, setVisible] = useState(false);

    const NameChangeHandler = (event) => {
        setNameCategory(event.target.value);
    };

    const onUpload = async () => {
      try {
        const res = await editCategory(id, {name: nameCategory});
        setVisible(false)
      } catch (error) {
        console.log("fail: ", error);
      }

    };


    return (
    <>
    <Button type="primary" onClick={() => setVisible(true)}>
        Edit
      </Button>
    <Modal
        title="Edit Catgory"
        centered
        visible={visible}
        onOk={() => onUpload()}
        onCancel={() => setVisible(false)}
        width={1000}
      >
         <Input onChange={NameChangeHandler}/>
      </Modal>
    </>
      );
  }