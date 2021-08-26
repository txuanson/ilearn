import { Form, Input, Button } from 'antd';
import React, { useState } from 'react'
import { deleteCategory } from '../../api/admin';
import { Modal } from 'antd';


export default function DeleteCategory({id}) {
    const [visible, setVisible] = useState(false);



    const onDelete = async () => {
      try {
        const res = await deleteCategory(id)
        setVisible(false)
      } catch (error) {
        console.log("fail: ", error);
      }

    };


    return (
    <>
    <Button type="primary" danger onClick={() => setVisible(true)}>
        Delete
    </Button>
    <Modal
        title="Are you sure you want to delete?"
        centered
        visible={visible}
        onOk={() => onDelete()}
        onCancel={() => setVisible(false)}
        okText = "Confirm"
        width={1000}
      >
      <h1>Are you sure you want to delete?</h1>
      </Modal>
    </>
    );
  }