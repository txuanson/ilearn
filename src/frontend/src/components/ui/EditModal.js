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
                Edit
            </Button>

            <Modal 
                title="Basic Modal" 
                visible={isModalVisible} 
                onCancel={handleCancel}
                footer={null}
            >
                {props.children}
            </Modal>
        </div>
    )
}

export default EditModal
