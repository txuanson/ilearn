import { Form, Input, Button, message } from 'antd';
import React, { useState } from 'react'
import { addCategory } from '../../api/admin';
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


export default function AddCategory({fetch, valuePagination}) {
    const [nameCategory, setNameCategory] = useState();
    const [visible, setVisible] = useState(false);

    const { width } = useWindowSize();

    const NameChangeHandler = (event) => {
        setNameCategory(event.target.value);
    };

    const onUpload = async () => {
      try {
        const res = await addCategory({name: nameCategory});
        setVisible(false);
        message.success("Category added successfully!");
        fetch("", valuePagination);
      } catch (error) {
        handleErrorApi(error)
      }

    };


    return (
     <>
    <Button className="ml-auto" style={{alignSelf: "center"}} type="primary" onClick={() => setVisible(true)}>
         Add new category
    </Button>
    <Modal
        title="Add new category"
        centered
        visible={visible}
        onOk={() => onUpload()}
        onCancel={() => setVisible(false)}
        width={500 < width * 1 ? 500 : width}
      >
        
        <Input placeholder="Category name" onChange={NameChangeHandler}/>
      </Modal>
    </>
      );
  }