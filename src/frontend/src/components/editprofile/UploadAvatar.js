// import React, { Component } from 'react';
// import { Upload, message, Button } from 'antd';
// import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
// import { putAvatar } from '../../api/user';
// import { image } from '@uiw/react-md-editor';

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// }
  
// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// }
// export class UploadAvatar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: "",
//             loading: false,
//         };
//     }
//     render() {
//         const { loading, imageUrl } = this.state;
//         const uploadButton = (
//         <div>
//             {loading ? <LoadingOutlined /> : <PlusOutlined />}
//             <div style={{ marginTop: 8 }}>Upload</div>
//         </div>
//         );

//         this.handleChange = info => {
//             if (info.file.status === 'uploading') {
//               this.setState({ loading: true });
//               return;
//             }
//             if (info.file.status === 'done') {
//               // Get this url from response in real world.
//               getBase64(info.file.originFileObj, imageUrl =>
//                 this.setState({
//                   image: imageUrl,
//                   loading: false,
//                 }),
//                 console.log(this.state)
//               );
//             }
//         };

    // this.onUpload = async (event) => {
    //   try {
    //     const res = await putAvatar({avatar: this.state.image});
    //   } catch (error) {
    //     console.log("fail: ", error);
    //   }

//     };

//         return (
//             <div className="flex flex-col items-center">
//                 <div>
//                     <Upload
//                         name="avatar"
//                         listType="picture-card"
//                         className="avatar-uploader"
//                         showUploadList={false}
//                         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//                         beforeUpload={beforeUpload}
//                         onChange={this.handleChange}
//                     >
//                         {imageUrl ? <img src={this.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//                     </Upload>
            //     </div>

            //     <Button type="link" onUpload = {this.onUpload}> 
            //         <UploadOutlined /> Upload Image
            //     </Button>
            // </div>
//         )
//     }
// }

// export default UploadAvatar


import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Upload, message, Button } from 'antd';
import ImgCrop from "antd-img-crop";

import { putAvatar } from '../../api/user';

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
            const res = await putAvatar({avatar: avatar});           
        } catch (error) {
            console.log("fail: ", error);
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
