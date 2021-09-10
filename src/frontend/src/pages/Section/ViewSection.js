import { Button, Layout, Menu, Tag} from 'antd';
import React, {useState, useEffect} from "react";
import { Link, useParams, Switch } from "react-router-dom";
import SplashRoute from "../../components/animation/SplashRoute";
import { Route } from "react-router";
import SectionRecord from './SectionRecord';
import { getSectionInfo } from '../../api/user';
import handleErrorApi from '../../utils/handleErrorApi';

import {
  DoubleRightOutlined,
  DoubleLeftOutlined
} from "@ant-design/icons";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function ViewSection() {
  const { course_id, section_id} = useParams();
  const [section, setSection] = useState(section_id);
  const [activeKeys, setActiveKeys] = useState([])
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  
  const fetchCourse = async (section_id) => {
      try {
          setLoading(true);
          const res = await getSectionInfo(course_id, section_id);
          setData(res);
          setLoading(false);
      } catch (err) {
          handleErrorApi(err);
      }
  }
  useEffect(() => {
      fetchCourse(section);
  }, []);

  function handleClick({ key }) {
    setActiveKeys([]) // close the menu on click
  }
  function onOpenChange(openKeys) {
    setActiveKeys(openKeys)
  }
  return (
  <>
    { loading && <></>} 
    {!loading && <>
     <Header
        className="site-layout-sub-header-background flex items-center md:px-10 px-0"
        style={{position:'fixed', width:'100vw', top:0, zIndex:20}}
      >
        <Link to="/">
            <h2 className="hidden md:block text-white font-semibold text-3xl md:mx-2">
              <span className="text-blue-500">i</span>Learn
            </h2>
        </Link>
        <Link to="/">
            <DoubleLeftOutlined className="block md:hidden text-white mx-5 text-xl"/>
        </Link>
        <DoubleRightOutlined className="hidden md:block text-white mx-10 text-xl"/>
        
        <Link to={`/course/${course_id}`} className="w-full">
            <h2 className="text-white font-semibold md:text-2xl md:mx-2 text-xl">
            {data.course.name} 
            </h2>

        </Link>
      </Header>


          {/* Menu on mobile */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={section_id} className="block md:hidden mt-16"
      onClick={handleClick}
      onOpenChange={onOpenChange}
      openKeys={activeKeys}>
          <SubMenu key="sub1" title="Course Section">
            {data.course.sections.map(item => (
              <Menu.Item item={item.section.topic} key={item.section._id}>
              <Link to={`/section/${course_id}/${item.section._id}`} onClick={()=> setSection(item.section._id)}>{item.section.topic}</Link>
            </Menu.Item>
            ))}
          </SubMenu>
      </Menu>
    <Layout className="min-h-screen">
      <Sider theme="dark" style={{overflow: 'auto', height: '100vh', position:'fixed', zIndex:10, top:64, left: 0}} className="hidden md:block">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={section_id}>
          {data.course.sections.map(item => (
            <Menu.Item item={item.section.topic} key={item.section._id}>
            <Link to={`/section/${course_id}/${item.section._id}`} onClick={()=> setSection(item.section._id)}>{item.section.topic}</Link>
          </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="md:ml-20">
      

        <Content>
          <div
            className="site-layout-background"
            style={{minHeight: 360, paddingLeft:10, paddingRight:10}}
          >        
            <Switch>
              <Route path={`/section/${course_id}/${section}`}>
                  <SplashRoute key={`/section/${course_id}/${section}`}>
                  <SectionRecord 
                    section_id = {section}
                    course_id = {course_id}
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
    </>}
  </>
  );
}
