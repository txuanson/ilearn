import { Breadcrumb, Layout, Space, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "antd/lib/input/Search";
import { getUser } from "../../api/admin";
import handleErrorApi from "../../utils/handleErrorApi";
import BanAccount from "./BanAccount";

export default function AdminAccount(props) {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [valuePagination, setValuePagination] = useState(1);
  // const [minValue, setMinValue] = useState([]);
  // const [maxValue, setMaxValue] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const pageSize = 10;

  const onSearch = (value) => {
    setSearch(value);
    fetchUser(value, 1);
  };

  const fetchUser = async (key, page) => {
    try {
      const res = await getUser(key, page, pageSize);

      // setMinValue(0);
      setItemCount(res.items_count);
      res.items.map((items) => {
        if (items.role == 10) items.role = "Admin";
        else if (items.role == 5) items.role = "Tutor";
        else items.role = "User";

        return items;
      });

      setUser(res.items);

      // setMaxValue(pageSize);
    } catch (err) {
      handleErrorApi(err);
    }
  };

  useEffect(() => {
    fetchUser("", 1);
  }, []);

  const handleChange = (value) => {
    // if (value <= 1) {
    //   setMinValue(0);
    //   setMaxValue(pageSize);
    // } else {
    //   setMinValue((value - 1) * pageSize);
    //   setMaxValue(value * pageSize);
    // }
    setValuePagination(value);
    fetchUser(search, value);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "banned",
      width: 100,
      render: (child) => (
        <>
          <BanAccount
            id={child._id}
            fetch={fetchUser}
            valuePagination={valuePagination}
            Ban={child.banned}
          ></BanAccount>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <Breadcrumb style={{ margin: "10px 0" }}>
        <Breadcrumb.Item>
          <Link to="/">iLearn</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/admin">Admin</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Account</Breadcrumb.Item>
      </Breadcrumb>
      <Search
        className="py-2 md:w-1/5 w-full"
        placeholder="Search"
        enterButton="Search"
        allowClear
        onSearch={onSearch}
      />
      <Table
        dataSource={user}
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
