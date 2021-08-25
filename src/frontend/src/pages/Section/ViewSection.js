import { Button, Layout, Menu} from 'antd';
import React, {useState, useEffect} from "react";
import SplashRoute from '../../components/animation/SplashRoute';
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import SectionRecord from './SectionRecord';
import { getSectionInfo } from '../../api/user';
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  VideoCameraFilled
} from "@ant-design/icons";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const markdown = `## 📖 About this class

- 🖥 Wellcome and prepair
- 💼 About Javascript
- 🎓 Javascript Fundamentals
- 🌐 Callback function
- 🔭 Arrow function

## 🌟 Content

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

  Markdown is a lightweight markup language based on the formatting conventions
  that people naturally use in email.
  As [John Gruber] writes on the [Markdown site][df1]

  > The overriding design goal for Markdown's
  > formatting syntax is to make it as readable
  > as possible. The idea is that a
  > Markdown-formatted document should be
  > publishable as-is, as plain text, without
  > looking like it's been marked up with tags
  > or formatting instructions.

  This text you see here is actually-written in Markdown! To get a feel
  for Markdown's syntax, type some text into the left window and
  watch the results in the right.
  `

const value = [];
for (let i = 1; i < 30; i++) {
  value.push({
    topic: `Section ${i}`,
    section_id: i,
    video: "https://www.youtube.com/embed/bJzb-RuUcMU",
    content: markdown,
  });
}

export default function ViewSection({course_id, section_id}) {
  const [activeKeys, setActiveKeys] = useState([])
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchCourse = async () => {
      try {
          setLoading(true);
          const res = await getSectionInfo(course_id, section_id);
          setData(res);
          setLoading(false);
      } catch (err) {
          console.log('Failed!!');
      }
  }
  useEffect(() => {
      fetchCourse();
  }, []);
  console.log(data);
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
        <DoubleLeftOutlined className="block md:hidden text-white mx-10 text-xl"/>
        </Link>
        <DoubleRightOutlined className="hidden md:block text-white mx-10 text-xl"/>
        <Link to={`/course/${course_id}`}>
            <h2 className="text-white font-semibold md:text-2xl md:mx-2 text-l">
            {data.course.name}
            </h2>
        </Link>
        <Button htmlType="submit" type="primary" className="hidden md:block" style={{marginLeft: 760}}>
          <Link to="/zoom-connection">Join Zoom Meeting</Link>
        </Button>
        <Link to="/zoom-connection">
        <VideoCameraFilled style={{color:"#2db7f5"}} className="block md:hidden text-2xl mx-2"/>
        </Link>
      </Header>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} className="block md:hidden mt-16"
      onClick={handleClick}
      onOpenChange={onOpenChange}
      openKeys={activeKeys}>
          <SubMenu key="sub1" title="Course Section">
          {/* {value.map(item => (
            <Menu.Item item={item.topic} key={item.section_id}>
              <Link to={`/view-section/${item.section_id}`}>{item.topic}</Link>
            </Menu.Item>
          ))} */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {data.course.sections.map(item => (
            <Menu.Item item={item.section.topic} key={item.section._id}>
            <Link to={`/section/${course_id}/${item.section._id}`}>{item.section.topic}</Link>
          </Menu.Item>
          ))}
        </Menu>
          </SubMenu>
      </Menu>
    <Layout className="min-h-screen">
      <Sider theme="light" style={{overflow: 'auto', height: '100vh', position:'fixed', zIndex:10, top:64, left: 0}} className="hidden md:block">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {data.course.sections.map(item => (
            <Menu.Item item={item.section.topic} key={item.section._id}>
            <Link to={`/section/${course_id}/${item.section._id}`}>{item.section.topic}</Link>
          </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="md:mt-16 md:ml-20">
        <Content>
          <div
            className="site-layout-background"
            style={{minHeight: 360, paddingLeft:10, paddingRight:10}}
          >
            <Switch>
              {data.course.sections.map((item) => (
                <Route path={`/section/${course_id}/${item.section._id}`}>
                <SplashRoute key={`/section/${course_id}/${item.section._id}`}>
                    {/* <Category idCategory = {item._id} nameCategory = {item.name}></Category> */}
                    <SectionRecord 
                     {...value[0]}
                     />
                </SplashRoute>
                </Route>
              ))}
              <Route path="/view-section/1">
                  <SplashRoute key="/view-section/1">
                     <SectionRecord 
                     {...value[0]}
                     />
                  </SplashRoute>   
              </Route>
              <Route path="/view-section/2">
                  <SplashRoute key="/view-section/2">
                    <SectionRecord 
                     video = {false}
                     content = {value[1].content}
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
