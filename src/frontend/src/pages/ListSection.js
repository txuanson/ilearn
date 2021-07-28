import { Breadcrumb, Layout} from "antd";
import React, {useState} from "react";
import { Link} from "react-router-dom";
import {SearchOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Table, Input, Button, Space, Switch } from 'antd';
import Highlighter from 'react-highlight-words';

const { Content} = Layout;
const data = [
    {
      topic: 'Introduction',
      content: 'First introduction to SE',
      duration: 60,
      start_time: '1st Jan 2022',
      visible: false,
      section_id: '001'
    },
    {
    topic: 'Introduction 2',
    content: 'Introduction to SE',
    duration: 60,
    start_time: '3rd Jan 2022',
    visible: false,
    section_id: '002'
    },
    {
    topic: 'Introduction 3',
    content: 'Introduction to SE',
    duration: 60,
    start_time: '5th Jan 2022',
    visible: true,
    section_id: '003'
    },
  ];

export default function ListSection() {
    const [searchText, setsearchText] = useState('');
    const [searchedColumn, setsearchedColumn] = useState('');
    const onChange = (checked, index) => {
        console.log('data', index)
        console.log(`switch to ${checked}`);
    };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            const searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setsearchText(selectedKeys[0]);
    setsearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setsearchText('');
  };
  const columns = [
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
      width: '30%',
      ...getColumnSearchProps('topic'),
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: '20%',
      ...getColumnSearchProps('content'),
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      ...getColumnSearchProps('duration'),
    },
    {
        title: 'Start time',
        dataIndex: 'start_time',
        key: 'start_time',
        ...getColumnSearchProps('start_time'),
    },
    {
        title: 'Visible',
        dataIndex: 'visible',
        key: 'visible',
        render: ()=>(
            <Switch onChange={onChange} defaultChecked={data.visible}  /> 
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Link to={`tutors/course/section/edit`}>Edit</Link>
                <Link to={`tutors/course/section/delete`}>Delete</Link>
            </Space>
        ),
      }
  ];
    return (
        <Layout className="container mx-auto xl:px-40">
            <Breadcrumb style={{ margin: '0 0 10px' }}>
                <Breadcrumb.Item>  
                    <Link to="/homepage">iLearn</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Sections</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="my-10">
                <Table dataSource={data} pagination={false} scroll={{ x: 'fit-content' }} columns={columns}>   
                </Table>
            </Content>
        </Layout>
    );
}
