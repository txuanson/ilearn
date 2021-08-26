import { Form, Input, Button } from 'antd';
import React, { useState } from 'react'
import { addCategory } from '../../api/admin';
import { Modal } from 'antd';


const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 0,
  },
};


export default function AddCategory({id}) {
    const [nameCategory, setNameCategory] = useState();
    const [visible, setVisible] = useState(false);

    const NameChangeHandler = (event) => {
        setNameCategory(event.target.value);
    };

    const onUpload = async () => {
      try {
        const res = await addCategory({name: nameCategory});
        setVisible(false)
      } catch (error) {
        console.log("fail: ", error);
      }

    };


    return (
     <>
    <Button type="primary" onClick={() => setVisible(true)}>
         Add new category
    </Button>
    <Modal
        title="Add new category"
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