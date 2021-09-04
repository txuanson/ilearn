import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";

import { Layout, Button } from "antd";
import 'antd/dist/antd.css';

import { getProfileUser } from "../api/user";
import { getUserInfo } from "../api/user";

import { CameraOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';

import EditModal from '../components/ui/EditModal';
import ReadMore from '../components/ui/ReadMore';

import UploadAvatar from '../components/editprofile/UploadAvatar'
import UploadProfile from '../components/editprofile/UploadProfile'
import handleErrorApi from '../utils/handleErrorApi';
const { Header, Content, Footer } = Layout;

function Profile() {

    // Get ID
    const [me, setMe] = useState([]);

    useEffect(async () => {
        try {
            const res = await getProfileUser();
            setMe(res);
        } catch (err) {
            handleErrorApi(err);
        }
    }, []);

    const { user_id } = useParams();

    // Get USER INFO from ID
    const [profileUser, setProfileUser] = useState([]);

    // useEffect(async () => {
    const fetchUserInfo = async () => {
        try {
            // (user_id);
            const res = await getUserInfo(user_id);
            setProfileUser(res);
        } catch (error) {
            handleErrorApi(error);
        }
    }

    useEffect(() => {
        fetchUserInfo();
    }, []);
    ("profile: ", profileUser)

    return (
        <Layout className="container mx-auto xl:px-40">
            <Content className="p-10 container">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col items-center">
                        <ReactImageFallback className="w-40 h-40 block border-4 rounded-full border-white"
                            src={process.env.REACT_APP_BASE_HOST + "/" + profileUser.avatar}
                            alt="logo"
                            fallbackImage="/avata-default.jpg" />

                        {profileUser.user_data && <>
                            <div className=" flex flex-row md:flex-col">
                                <EditModal icon={<CameraOutlined style={{ fontSize: '16px' }} />}
                                    name="Edit Avatar"
                                    title="Upload Avatar"
                                    className="">
                                    <UploadAvatar />
                                </EditModal>
                                <EditModal icon={<EditOutlined style={{ fontSize: '16px' }} />}
                                    name="Edit Profile"
                                    title="Update Profile"
                                    className="pt-5">
                                    <UploadProfile name={profileUser.name} bio={profileUser.bio} />
                                </EditModal>
                            </div>

                            {profileUser.user_data.zoom === false && <div className="p-2">
                                <Button type="primary"
                                    href="https://zoom.us/oauth/authorize?response_type=code&client_id=iui08Y6kR8G5HvrZn9m9A&redirect_uri=https://ilearn-two.vercel.app/connect-zoom"
                                >Connect to Zoom </Button>
                            </div>}
                        </>}

                    </div>
                    <div>
                        <div className="px-0 md:px-10">
                            <div className="flex flex-col max-w-lg">
                                <p className="pb-4 text-center text-2xl md:text-4xl break-normal ">
                                    {profileUser.name}
                                </p>
                                <div className="site-layout-background container mx-auto my-2">
                                    <p className="break-normal" >
                                        <ReadMore children={profileUser.bio} />
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


