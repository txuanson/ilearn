import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Upload, message, Button } from 'antd';
import ImgCrop from "antd-img-crop";

import { putCover } from '../../api/admin';
import handleErrorApi from '../../utils/handleErrorApi';

function AdminCover() {

    const [image, setImage] = useState('');
    const [cover, setCover] = useState('');

    const handleAddImage = (file) => {
        setCover(file);
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
            formData.append("cover", cover);
            
            const res = await putCover(formData);  
            message.success("Cover changed successfully!");
            window.location.reload();

        } catch (error) {
            handleErrorApi(error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div>
                <ImgCrop aspect={3.35} quality={1}>
                    <Upload
                        showUploadList={false}
                        accept="image/png, image/jpeg"
                        action={handleAddImage}
                        multiple={false}
                        beforeUpload={beforeUpload}
                    >
                        <div
                            className="flex rounded border-dotted border-blue-300 border-2 items-center justify-center overflow-hidden"
                            style={{ width: 670, height: 200 }}>
                            {!image && (
                                <img src="https://ilearn.yurineko.net/storage/cover.jpeg" />
                            )}
                            {image && (
                                <img src={image} />
                            )}
                        </div>
                    </Upload>
                </ImgCrop>
            </div>

            <div>
                <Button type="link" onClick = {onUpload}> 
                    <UploadOutlined /> Upload Cover
                </Button>
            </div>
            
        </div>
    )
}

export default AdminCover
