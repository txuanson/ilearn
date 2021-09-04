import { Breadcrumb, Layout, Space, Pagination, Table, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "antd/lib/input/Search";
import { getSearchCategoryAdmin } from "../../api/admin";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import AddCategory from "./AddCategory";
import handleErrorApi from "../../utils/handleErrorApi";

export default function AdminCategory(props) {
  const [category, setCategory] = useState([]);
  const [minValue, setMinValue] = useState([]);
  const [maxValue, setMaxValue] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const pageSize = 10;

  const onSearch = (value) => {
    fetchSearchCategory(value);
  }

  const fetchSearchCategory = async (key) => {
    try {
      const res = await getSearchCategoryAdmin(key)
      setCategory(res.items);
      setItemCount(res.items_count);
      setMinValue(0);
      setMaxValue(pageSize);
    } catch (err) {
      handleErrorApi(err);
    }
  };

  useEffect(() => {
    fetchSearchCategory("");
  }, []);

  const handleChange = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(pageSize);
    } else {
      setMinValue((value - 1) * pageSize);
      setMaxValue(value * pageSize);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Course",
      dataIndex: "courses_count",
      key: "courses_count",
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (child) => (
        <Space size="middle">
          <EditCategory
            id={child._id}
            name={child.name}
            fetch={fetchSearchCategory}
          ></EditCategory>
          <DeleteCategory id={child._id} fetch={fetchSearchCategory}></DeleteCategory>
        </Space>
      ),
    },
  ];
  return (
    <Layout>
      <Breadcrumb style={{ margin: "10px 0" }}>
        <Breadcrumb.Item>
          <Link to="/homepage">iLearn</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/admin">Admin</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Category</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Search
          className="py-2 md:w-1/5 w-full"
          placeholder="Search"
          enterButton="Search"
          allowClear
          onSearch={onSearch}
        />
        <AddCategory fetch={fetchSearchCategory}></AddCategory>
      </Row>
      <Table
        dataSource={category.slice(minValue, maxValue)}
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
