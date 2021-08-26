import {Layout, Menu } from "antd";
import React from "react";
import SplashRoute from "../../components/animation/SplashRoute";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import AdminDashBoard from "./AdminDashboard";
import AdminCourse from "./AdminCourse";
import AdminAccount from "./AdminAccount";
import {
  FieldTimeOutlined,
  BookOutlined,
  UserOutlined, 
  FolderOpenOutlined
} from "@ant-design/icons";
import AdminCategory from "./AdminCategory";

const { Header, Content, Footer, Sider } = Layout;

export default function Admin() {
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
          <Link to="/homepage">
            <h2 className="text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
          </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<BookOutlined />}>
            <Link to="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin/account">Account</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FieldTimeOutlined />}>
            <Link to="/admin/course">Course</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FolderOpenOutlined />}>
            <Link to="/admin/category">Category</Link>
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
            <Route path="/admin/category">
                  <SplashRoute key="/admin/category">
                     <AdminCategory />
                  </SplashRoute>   
              </Route>
              <Route path="/admin/course">
                  <SplashRoute key="/admin/course">
                     <AdminCourse />
                  </SplashRoute>   
              </Route>
              <Route path="/admin/account">
                  <SplashRoute key="/admin/account">
                      <AdminAccount />
                  </SplashRoute>   
              </Route>
              <Route path="/admin">
                  <SplashRoute key="/admin">
                    <AdminDashBoard />
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
