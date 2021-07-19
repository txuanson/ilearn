import {Layout, Menu } from "antd";
import React from "react";
import SplashRoute from "../components/animation/SplashRoute";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import ListCourse from "./ListCourse";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="flex justify-center my-4">
          <Link to="/">
            <h2 className="text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
          </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<ContactsOutlined />}>
            <Link to="/dashboard">My class</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/dashboard/create-course">Create class</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >

        </Header>
        <Content style={{ margin: "10px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 10, minHeight: 360 }}
          >
            <Switch>
              <Route path="/dashboard/create-course">
               1
              </Route>
              <Route path="/dashboard">
                  <SplashRoute key="/listcourse">
                     <ListCourse />
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
  );
}

export default Dashboard;