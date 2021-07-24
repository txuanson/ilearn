import React from 'react';
import {Breadcrumb, Layout} from "antd";
import ReactMarkdown from 'react-markdown'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import gfm from "remark-gfm";
import { Image } from 'antd';
import EditModal from '../layout/EditModal';
import UploadAvatar from '../components/editprofile/UploadAvatar'
import UploadProfile from '../components/editprofile/UploadProfile'

function Profile() {
    let markdown = `
    ## 📖 About this class

    - 🖥 Wellcome and prepair
    - 💼 About Javascript
    - 🎓 Javascript Fundamentals
    - 🌐 Callback function
    - 🔭 Arrow function

    ## 🌟 Content`  

    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>  
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>My profile</Breadcrumb.Item>
            </Breadcrumb>

            <div>
                <div className="bg-gray-600 h-screen flex justify-center items-center">
                    <div className="container-fluid p-3 md:p-32">
                        <figure className="md:flex bg-white rounded-xl p-8 md:p-0 overflow-hidden"> 
                            <Image
                                className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-none"
                                width={350}
                                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvf9wn1WvKWCp2eCV0atTl56ONzL6TyTPh702UMXqeHag2ZUG0YPch6-XWd2o4S_dK1J4&usqp=CAU"
                            />

                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <figcaption className="font-lg">
                                    <div className="text-lg font-bold"> Timona Siyali </div>
                                </figcaption>

                                <blockquote>
                                    <ReactMarkdown 
                                        className="text-lg font-light"
                                        remarkPlugins={[gfm]} 
                                        children={markdown} />
                                </blockquote>
                            </div>

                        </figure>
                        <div>
                            <EditModal>
                                <UploadProfile>

                                </UploadProfile>
                            </EditModal>
                            <EditModal>
                                <UploadAvatar>

                                </UploadAvatar>
                            </EditModal>
                
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile
