import React, { useState } from 'react';
import { Modal, Button } from 'antd';


function EditModal(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                {props.title}
            </Button>

            <Modal 
                title={props.title}
                visible={isModalVisible} 
                onCancel={handleCancel}
                footer={null}
                width={1000}
                height={700}
            >
                {props.children}
            </Modal>
        </div>
    )
}

export default EditModal
