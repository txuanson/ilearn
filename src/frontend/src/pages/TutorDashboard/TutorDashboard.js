import {Layout, Menu } from "antd";
import React from "react";
import SplashRoute from "../../components/animation/SplashRoute";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import ListCourse from "./ListCourse";
import ListSection from "./ListSection";
import CreateCourse from "./CreateCourse";
import CreateSection from "./CreateSection";
import {
  VideoCameraOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function TutorDashBoard() {

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
      >
        <div className="flex justify-center my-4">
          <Link to="/">
            <h2 className="text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
          </Link>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<ContactsOutlined />}>
            <Link to="/tutor">My Course</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/tutor/create-course">Create Course</Link>
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
              <Route path="/tutor/course/:course_id/section">
                  <SplashRoute key="/tutor/course/:course_id/section">
                     <ListSection />
                  </SplashRoute>   
              </Route>
              <Route path="/tutor/course/:course_id/edit">
                  <SplashRoute key="/tutor/course/:course_id/edit">
                     <CreateCourse />
                  </SplashRoute>   
              </Route>
              <Route path="/tutor/course/:course_id/create-section">
                  <SplashRoute key="/tutor/course/:course_id/create-section">
                     <CreateSection />
                  </SplashRoute>   
              </Route>
              <Route path="/tutor/create-course">
                  <SplashRoute key="/tutor/create-course">
                     <CreateCourse />
                  </SplashRoute>   
              </Route>
              <Route path="/tutor/section/:section_id/edit">
                  <SplashRoute key="/tutor/section/:section_id/edit">
                     <CreateSection />
                  </SplashRoute>   
              </Route>
              <Route path="/tutor">
                  <SplashRoute key="/tutor">
                     <ListCourse />
                  </SplashRoute>
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer className="text-center">
          404 Not Found ?? 2021
        </Footer>
      </Layout>
    </Layout>
  );
}

export default TutorDashBoard;