import React, { Component } from 'react';
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
export class UploadAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            loading: false,
        };
    }
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
        );

        this.handleChange = info => {
            if (info.file.status === 'uploading') {
              this.setState({ loading: true });
              return;
            }
            if (info.file.status === 'done') {
              // Get this url from response in real world.
              getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                  image: "",
                  loading: false,
                }),
              );
            }
        };

        this.onUpload = () => {

        }

        return (
            <div className="flex flex-col items-center">
                <div>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={this.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                </div>

                <Button type="link" onUpload = {this.onUpload}> 
                    <UploadOutlined /> Upload Image
                </Button>
            </div>
        )
    }
}

export default UploadAvatar
