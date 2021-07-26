import React, { Component } from 'react'
import { Upload, Modal } from 'antd';
export class UploadAvatar extends Component { 
    render() {
        function getBase64(file) {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = error => reject(error);
            });
          }

        this.state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList:
            [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },],
            
        };
    
        this.handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
        };
    
        this.handleChange = ({ fileList }) => this.setState({ fileList }); 

        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
                const uploadButton = (
                  <div>
                    <div style={{ marginTop: 0 }}>Upload</div>
                  </div>
                );

        return (
            <div>
                
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    // onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }   
}

export default UploadAvatar
