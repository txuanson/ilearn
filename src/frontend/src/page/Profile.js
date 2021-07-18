import React from 'react';
import Avatar from '../components/user_profile/Avatar';
import Info from '../components/user_profile/Info';
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout;

// import { classes } from 'istanbul-lib-coverage';

// import 'antd/dist/antd.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {

    return (
        <Layout>
            <Header></Header>

            <Content>
                <Avatar/>
                <Info/>
            </Content>

            <Footer></Footer>
        </Layout>
    )
    }


export default Profile
