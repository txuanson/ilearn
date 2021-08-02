import { Layout, List, Menu} from 'antd';
import React from "react";
import SplashRoute from '../../components/animation/SplashRoute';
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import SectionRecord from './SectionRecord';

import {
  DoubleRightOutlined
} from "@ant-design/icons";


const { Header, Content, Footer, Sider } = Layout;


const data = [];
for (let i = 1; i < 30; i++) {
  data.push({
    title: `Section ${i}`,
    section_id: i,
    video: "https://www.youtube.com/embed/bJzb-RuUcMU",
    
  });
}

export default function ViewSection() {
  return (
    <>
     <Header
        className="site-layout-sub-header-background flex items-center px-10"
      >
        <Link to="/homepage">
            <h2 className="text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
        </Link>
        <DoubleRightOutlined className="text-white mx-10 text-xl"/>
        <Link to="/course">
            <h2 className="text-white font-semibold text-2xl md:mx-2">
              Nhập môn lập trình
            </h2>
        </Link>
      </Header>
    <Layout className="min-h-screen ">
      <Sider theme="light" style={{overflow: 'auto', height: '540px', marginTop: 10}}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {data.map(item => (
            <Menu.Item item={item.title} key={item.section_id}>
              <Link to={`/view-section/${item.section_id}`}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 10, minHeight: 360 }}
          >
            <Switch>
              <Route path="/view-section/1">
                  <SplashRoute key="/view-section/1">
                     <SectionRecord 
                     video = {data[0].video}
                     />
                  </SplashRoute>   
              </Route>
              <Route path="/view-section/2">
                  <SplashRoute key="/view-section/2">
                    <SectionRecord 
                     video = {false}
                     />
                  </SplashRoute>
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer className="text-center">
          404 Not Found © 2021
        </Footer>
      </Layout>
    </Layout>
    </>
  );
}
