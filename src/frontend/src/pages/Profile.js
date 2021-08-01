import React from 'react';
import {Breadcrumb, Layout, Button} from "antd";
import ReactMarkdown from 'react-markdown'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import gfm from "remark-gfm";

import { CameraFilled } from '@ant-design/icons';
import { EditFilled } from '@ant-design/icons';

import EditModal from '../components/ui/EditModal';
import UploadAvatar from '../components/editprofile/UploadAvatar'
import UploadProfile from '../components/editprofile/UploadProfile'

const { Header, Content, Footer } = Layout;

function Profile() {
    let name = 'user name here'
    let markdown = `
    📖 About this class
    - 🖥 Wellcome and prepair
    - 💼 About Javascript
    - 🎓 Javascript Fundamentals
    - 🌐 Callback function
    - 🔭 Arrow function

    🌟 Content`  

    return (
        <Layout className = "m-2 p-10">
            <Content style={{ margin: "10px 10px 0"}} className="p-0 md:px-70">
                <Breadcrumb style={{ margin: '10px 0' }}>
                    <Breadcrumb.Item>  
                        <Link to="/homepage">iLearn</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>My profile</Breadcrumb.Item>
                </Breadcrumb>

                {/* Profile - main content */}
                <div className = "max-w-7xl mx-auto shadow-lg bg-white-500 rounded-md relative"> {/*px-2 sm:px-6 lg:px-8 */} 
                    <div className = "relative h-60 rounded-t-md bg-gradient-to-r from-blue-400 to-green-500">
                    </div>
                    
                    <div className = "transform -translate-y-1/4">
                        <div className = "relative flex items-center" >
                            <div className = "absolute bottom-0 right-1/3">
                                <EditModal  
                                    name = {<CameraFilled style={{ fontSize: '20px'}}/>} 
                                    title = "Upload Avatar">
                                    <UploadAvatar />
                                </EditModal>
                            </div>
                            <img className = "rounded-full w-40 h-40 border-4 border-white mx-auto"
                                src = "https://www.researchgate.net/profile/Michel-Steuwer/publication/235673010/figure/fig1/AS:393555295129606@1470842302271/The-famous-Lena-image-often-used-as-an-example-in-image-processing.png" />
                            
                        </div>

                        <div className = "font-bold text-xl text-center p-5"
                            children={name}/>

                        <div className = "font-light text-md text-center ">
                            <ReactMarkdown 
                                remarkPlugins={[gfm]} 
                                children={markdown} />
                        </div>
                    </div>
                    
                    <div className = "p-2 absolute bottom-0 right-0">
                        <EditModal name = {<EditFilled style={{ fontSize: '20px'}} />}
                            title = "Update Profile">
                            <UploadProfile />
                        </EditModal>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default Profile


