import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {Layout, Button, Divider} from "antd";
import 'antd/dist/antd.css';

import { getProfileUser } from "../api/user";
import { getUserInfo } from "../api/user";

import { CameraOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import EditModal from '../components/ui/EditModal';
import ReadMore from '../components/ui/ReadMore';

import UploadAvatar from '../components/editprofile/UploadAvatar'
import UploadProfile from '../components/editprofile/UploadProfile'
const { Header, Content, Footer } = Layout;

function Profile() {

    // let name = 'Import a HTML file and watch'
    let markdown = `    ## 📖 About this class
- 🖥 Wellcome and prepair
- 💼 About Javascript
- 🎓 Javascript Fundamentals
- 🌐 Callback function
- 🔭 Arrow function

## 🌟 Content

`

// Get ID
const [user, setUser] = useState([]);

useEffect(async () => {
    try {
      const res = await getProfileUser();
      setUser(res);
      console.log("user._id: ", user._id)
    } catch (err) {
      console.log("fail: ", err);
    }
  }, []);

// Get USER INFO from ID
const [profileUser, setProfileUser] = useState([]);

useEffect(async () => {
    try {
      console.log(user._id);
      const res = await getUserInfo(user._id);
      setProfileUser(res);
      console.log("profile: ")
    } catch (err) {
      console.log("fail: ", err);
    }
  }, []);

    return (
        <Layout className = "container mx-auto xl:px-40">
            <Content className = "p-10 container">
                <div className = "flex flex-col md:flex-row"> 
                    <div className = "flex flex-col items-center">
                        <img className = "w-40 h-40 border-4 rounded-full border-white"
                            src = {"https://ilearn-19clc3.herokuapp.com/" + profileUser.avatar} />

                        <div className = " flex flex-row md:flex-col">
                            <EditModal icon = {<CameraOutlined style={{ fontSize: '16px'}} /> }
                                name = "Edit Avatar"
                                title = "Upload Avatar"
                                className = "">
                                <UploadAvatar />
                            </EditModal>
                            <EditModal icon = {<EditOutlined style={{ fontSize: '16px'}} /> }
                                name = "Edit Profile" 
                                title = "Update Profile"
                                className = "pt-5">
                                <UploadProfile name = {profileUser.name} bio = {profileUser.bio}/>
                            </EditModal>
                        </div>

                        <div className = "p-2">
                        <Link to = "https://zoom.us/oauth/authorize?response_type=code&client_id=iui08Y6kR8G5HvrZn9m9A&redirect_uri=https://ilearn-two.vercel.app/connect-zoom" />
                            <Button type = "primary" >Connect to Zoom </Button>
                        </div>

                    </div>
                    <div>
                        <div className = "px-0 md:px-10">
                            <div className = "flex flex-col max-w-lg">
                                <p className = "pb-4 text-2xl md:text-4xl text-center break-normal ">
                                    {profileUser.name}
                                </p> 
                                <div className="site-layout-background container mx-auto my-2">
                                    <p className="break-normal" >
                                        {typeof profileUser.bio == "undefined" || (profileUser.bio).length< 500
                                            ? <p> {profileUser.bio} </p> : <ReadMore children = {profileUser.bio}/> }
                                            {/* {profileUser.bio} */}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default Profile


