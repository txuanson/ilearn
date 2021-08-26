import { Breadcrumb, Layout, Space, Switch, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Column from "antd/lib/table/Column";
import Search from "antd/lib/input/Search";
import { getAllCategoryAdmin } from "../../api/admin";
import EditModal from "../../components/ui/EditModal";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import AddCategory from "./AddCategory";



export default function AdminCategory(props) {
    
    const [category, setCategory] = useState([]);
  
    useEffect(async () => {
      try {
        const res = await getAllCategoryAdmin();
        setCategory(res.items);
        console.log(res);
      } catch (err) {
        console.log("fail");
      }
    }, []);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'id',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: 'Action',
          key: 'action',
          width: 100,
          render: child =>
          <Space size="middle">
            {/* <EditModal
              name = "Edit"
              title = "Edit category">
                <EditCategory id = {child._id} name = {child.name}></EditCategory>
            </EditModal> */}

            {/* <EditModal
            name = "Delete"
            title = "Delete category">
          </EditModal> */}
          <EditCategory id = {child._id} name = {child.name}></EditCategory>
          <DeleteCategory  id = {child._id}></DeleteCategory>
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
                <Breadcrumb.Item>Category</Breadcrumb.Item>
            </Breadcrumb>
            <Search className="py-2 md:w-1/5 w-full" placeholder="Search" enterButton="Search" allowClear />
            {/* <Table dataSource={category} pagination={false} scroll={{ x: 'fit-content' }}>
                <Column title="Name Category" dataIndex={"name"} key="name" />
                <Column title="ID" dataIndex={"_id"} key="_id" />
                <Column title="Action"  key="action">
                </Column>
            </Table> */}
            <Table dataSource={category} pagination={false} scroll={{ x: 'fit-content' }} columns={columns}></Table>
            <AddCategory></AddCategory>
            
        </Layout>
    );
}