import { message, Button } from 'antd';
import React, { useState } from 'react'
import { deleteCategory } from '../../api/admin';
import { Modal } from 'antd';
import handleErrorApi from '../../utils/handleErrorApi';


export default function DeleteCategory({id, fetch}) {
    const [visible, setVisible] = useState(false);



    const onDelete = async () => {
      try {
        const res = await deleteCategory(id)
        setVisible(false)
        message.success("Category delete successfully!");
        fetch()
      } catch (error) {
        handleErrorApi(error)
      }

    };


    return (
    <>
    <Button type="primary" danger onClick={() => setVisible(true)}>
        Delete
    </Button>
    <Modal
        title="Delete"
        centered
        visible={visible}
        onOk={() => onDelete()}
        onCancel={() => setVisible(false)}
        okText = "Confirm"
        width={500}
      >
      <h1 className = "text-center ">Are you sure you want to delete?</h1>
      </Modal>
    </>
    );
  }