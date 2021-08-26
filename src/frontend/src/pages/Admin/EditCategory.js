import { Input, Button, message } from 'antd';
import React, { useState } from 'react'
import { editCategory } from '../../api/admin';
import { Modal } from 'antd';
import useWindowSize from "../../hooks/useWindowSize";
import handleErrorApi from '../../utils/handleErrorApi';


const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 0,
  },
};


export default function EditCategory({id, name, fetch}) {
  const { width } = useWindowSize();

    const [nameCategory, setNameCategory] = useState(name);
    const [visible, setVisible] = useState(false);

    const NameChangeHandler = (event) => {
        setNameCategory(event.target.value);
    };

    const onUpload = async () => {
      try {
        const res = await editCategory(id, {name: nameCategory});
        setVisible(false);
        message.success("Category edit successfully!");
        fetch("");
      } catch (error) {
        handleErrorApi(error)
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
        width={500 < width * 1 ? 500 : width}
      >
         <Input placeholder="Category name" value={nameCategory} onChange={NameChangeHandler}/>
      </Modal>
    </>
      );
  }