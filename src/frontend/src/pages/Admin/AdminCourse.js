import { Breadcrumb, Layout, Pagination, Space, Switch, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/input/Search";
import { getCourseAdmin } from "../../api/admin";
import handleErrorApi from "../../utils/handleErrorApi";

export default function AdminCourse(props) {
  const [course, setCourse] = useState([]);
  const [search, setSearch] = useState("");
  // const [minValue, setMinValue] = useState([]);
  // const [maxValue, setMaxValue] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const pageSize = 10;

  const onSearch = (value) => {
    setSearch(value);
    fetchCourse(value, 1);
  };

  const fetchCourse = async (key, page) => {
    try {
      const res = await getCourseAdmin(key, page, pageSize);
      //setMinValue(0);
      setItemCount(res.items_count);
      res.items.map((items) => {
        if (items.public == false) items.public = "Private";
        else items.public = "Public";

        return items;
      });

      setCourse(res.items);

      //setMaxValue(pageSize);
    } catch (err) {
      handleErrorApi(err);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Subscribers",
      dataIndex: "subscriber_count",
      key: "subscriber_count",
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
    },
    {
      title: "Status",
      dataIndex: "public",
      key: "public",
    },
  ];

  const handleChange = (value) => {
    // if (value <= 1) {
    //   setMinValue(0);
    //   setMaxValue(pageSize);
    // } else {
    //   setMinValue((value - 1) * pageSize);
    //   setMaxValue(value * pageSize);
    // }
    fetchCourse(search, value);
  };

  useEffect(() => {
    fetchCourse("", 1);
  }, []);
  return (
    <Layout>
      <Breadcrumb style={{ margin: "10px 0" }}>
        <Breadcrumb.Item>
          <Link to="/">iLearn</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/admin">Admin</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Course</Breadcrumb.Item>
      </Breadcrumb>
      <Search
        className="py-2 md:w-1/5 w-full"
        placeholder="Search"
        enterButton="Search"
        allowClear
        onSearch={onSearch}
      />
      <Table
        dataSource={course}
        pagination={false}
        scroll={{ x: "fit-content" }}
        columns={columns}
      ></Table>
      <div className="p-3 grid justify-items-end">
        <Pagination
          defaultCurrent={1}
          total={itemCount}
          onChange={handleChange}
          pageSize={pageSize}
        />
      </div>
    </Layout>
  );
}
