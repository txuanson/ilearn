import { Breadcrumb, Layout, Space, Pagination, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "antd/lib/input/Search";
import { getAllUser } from "../../api/admin";


export default function AdminAccount(props) {

    const [user, setUser] = useState([]);
    const [minValue, setMinValue] = useState([]);
    const [maxValue, setMaxValue] = useState([]);
    const pageSize = 20;
  
    useEffect(async () => {
      try {
        const res = await getAllUser()
        setMinValue(0);

        res.items.map((items) => {
          if(items.role == 10)
            items.role= "Admin";
          else if(items.role == 5)
            items.role = "Tutor";
          else 
            items.role = "User";
          
          return items;
        }
        )

        setUser(res.items);

        

      setMaxValue(pageSize);
      } catch (err) {
        console.log("fail");
      }
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
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
          title: 'Action',
          key: 'action',
          width: 100,
          render: child =>
          <Space size="middle">
              Ban
          </ Space>
            
        }
    ]
    
    return (
        <Layout>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/admin">Admin</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Account</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search" enterButton="Search" allowClear />
            <Table dataSource={user.slice(minValue, maxValue)} pagination={false} scroll={{ x: 'fit-content' }} columns={columns}></Table>
            <div className="p-3 grid justify-items-end">
            <Pagination defaultCurrent={1} total={user.length} onChange={handleChange} pageSize={pageSize}/>
          </div>
        </Layout>
    );
}