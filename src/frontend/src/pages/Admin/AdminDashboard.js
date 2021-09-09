import { Breadcrumb, Layout, Table, Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/input/Search";
import { getDashboard } from "../../api/admin";
import handleErrorApi from "../../utils/handleErrorApi";
import moment from "moment";
// const new_courses = [
//     {
//       course_name: 'Introduction',
//       create_at: '1st Jan 2022',
//       category: 'C++',
//       subscribers: '100',
//     },
//     {
//     course_name: 'Introduction 2',
//     create_at: '3rd Jan 2022',
//     category: 'C++',
//     subscribers: '100',
//     },
//     {
//     course_name: 'Introduction 3',
//     create_at: '5th Jan 2022',
//     category: 'C++',
//     subscribers: '100',
//     },
//   ];

export default function AdminDashBoard(props) {
  const [accountCount, setAccountCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [newAccountCount, setNewAccountCount] = useState(0);
  const [newCourses, setNewCourses] = useState([]);
  const [newCoursesCount, setNewCoursesCount] = useState(0);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category.name,
    },
    {
      title: "Create at",
      dataIndex: "create_at",
      key: "create_at",
      render: (create_at) => moment(create_at).fromNow(),
    },
    {
      title: "Subscribers",
      dataIndex: "subscriber",
      key: "subscriber",
    },
  ];

  const fetchDashboard = async () => {
    try {
      const res = await getDashboard();
      //const {account_count, course_count, new_account_count, new_courses, new_courses_count} = res;
      setAccountCount(res.account_count);
      setCourseCount(res.course_count);
      setNewAccountCount(res.new_account_count);
      setNewCourses(res.new_course);
      setNewCoursesCount(res.new_course_count);

      newCourses.map((items) => {
        items["nameCategory"] = items.category.name;
        //items.category = items.category.name;
        return items;
      });
      console(newCourses);
    } catch (err) {
      handleErrorApi(err);
    }
  };
  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <Layout>
      <Breadcrumb style={{ margin: "10px 0" }}>
        <div >
          <Breadcrumb.Item>
            <Link to="/">iLearn</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/admin">Admin</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="site-card-wrapper my-5 flex md:flex-row flex-col" style={{ alignSelf: "center" }}>
        <Card
          title="Accounts"
          bordered={false}
          style={{ backgroundColor: "#FA306C", color: "#fff" }}
          className="text-center md:p-5 md:mx-2 mb-2"
        >
          <span className="text-3xl font-bold">{accountCount}</span>
          <p>Total number of accounts</p>
        </Card>
        <Card
          title="Accounts"
          bordered={false}
          style={{ backgroundColor: "#A25DFB", color: "#fff" }}
          className="text-center md:p-5 md:mx-2 mb-2"
        >
          <span className="text-3xl font-bold">{newAccountCount}</span>
          <p>New accounts this month</p>
        </Card>
        <Card
          title="Courses"
          bordered={false}
          style={{ backgroundColor: "#51AD97", color: "#fff" }}
          className="text-center md:p-5 md:mx-2 mb-2"
        >
          <span className="text-3xl font-bold">{courseCount}</span>
          <p>Total number of courses</p>
        </Card>
        <Card
          title="Courses"
          bordered={false}
          style={{ backgroundColor: "#047D8D", color: "#fff" }}
          className="text-center md:p-5 md:mx-2 mb-2"
        >
          <span className="text-3xl font-bold">{newCoursesCount}</span>
          <p>New courses this month</p>
        </Card>
      </div>
      {/* <Table dataSource={newCourses} pagination={false} scroll={{ x: 'fit-content' }}>
                <Column title="Course name" dataIndex={"name"} key="name" />
                <Column title="Category" dataIndex="nameCategory" key="nameCategory" />
                <Column title="Create at" dataIndex={"create_at"} key="create_at" />
                <Column title="Subscribers" dataIndex={"subscriber"} key="subscriber" />
            </Table> */}

      <Table
        dataSource={newCourses}
        pagination={false}
        scroll={{ x: "fit-content" }}
        columns={columns}
      ></Table>
    </Layout>
  );
}
