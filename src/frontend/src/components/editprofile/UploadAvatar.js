import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Upload, message, Button } from 'antd';
import ImgCrop from "antd-img-crop";

import { putAvatar } from '../../api/user';
import handleErrorApi from '../../utils/handleErrorApi';

function UploadAvatar() {

    const [image, setImage] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleAddImage = (file) => {
        setAvatar(file);
        return new Promise(async (res, rej) => {
            let src = file.url
            if (!src) {
                    src = await new Promise((resolve) => {
                    const reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = () => resolve(reader.result)
                })
            }
            if (src) {
                setImage(src)
            }
        })
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
        if (!isJpgOrPng) {
            message.error('Only accept JPG/PNG file!')
        }
        const isLt7M = file.size / 1024 / 1024 < 7
        if (!isLt7M) {
            message.error('Image file size must be < 7MB')
        }
        return isJpgOrPng && isLt7M
    }

    const onUpload = async (event) => {
        try {
            
            const formData = new FormData();
            (avatar);
            formData.append("avatar", avatar);
            
            const res = await putAvatar(formData);  
            message.success("Avatar changed successfully!");
            window.location.reload();

        } catch (error) {
            handleErrorApi(error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div>
                <ImgCrop aspect={1} quality={1}>
                    <Upload
                        showUploadList={false}
                        accept="image/png, image/jpeg"
                        action={handleAddImage}
                        multiple={false}
                        beforeUpload={beforeUpload}
                    >
                        <div
                            className="flex rounded border-dotted border-blue-300 border-2 items-center justify-center overflow-hidden"
                            style={{ width: 200, height: 200 }}>
                            {!image && (
                                <p className="text-lg color-blue">
                                    <UploadOutlined />
                                </p>
                            )}
                            { image && <img src={image} />}
                        </div>
                    </Upload>
                </ImgCrop>
            </div>

            <div>
                <Button type="link" onClick = {onUpload}> 
                    <UploadOutlined /> Upload Image
                </Button>
            </div>
            
        </div>
    )
}

export default UploadAvatar
