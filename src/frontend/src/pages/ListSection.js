import { Breadcrumb, Layout} from "antd";
import React, {useState} from "react";
import { Link} from "react-router-dom";
import {SearchOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Button, Space, Switch, Popconfirm, Form, Typography } from 'antd';
import Highlighter from 'react-highlight-words';

const { Content} = Layout;
const section_data = [
    {
      topic: 'Introduction',
      content: 'First introduction to SE',
      duration: 60,
      start_time: '1st Jan 2022',
      visible: true,
      section_id: '001',
      key: 0,
    },
    {
    topic: 'Introduction 2',
    content: 'Introduction to SE',
    duration: 60,
    start_time: '3rd Jan 2022',
    visible: true,
    section_id: '002',
    key: 1,
    },
    {
    topic: 'Introduction 3',
    content: 'Introduction to AI',
    duration: 60,
    start_time: '5th Jan 2022',
    visible: true,
    section_id: '003',
    key: 2,
    },
  ];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};



export default function ListSection() {
    const [searchText, setsearchText] = useState('');
    const [searchedColumn, setsearchedColumn] = useState('');
    const onChange = (checked, index) => {
        console.log('data', index)
        console.log(`switch to ${checked}`);
    };
    const [form] = Form.useForm();
    const [data, setData] = useState(section_data);
    const [editingKey, setEditingKey] = useState('');
  
    const isEditing = (record) => record.key === editingKey;
  
    const edit = (record) => {
      form.setFieldsValue({
        topic: '',
        content: '',
        duration: '',
        start_time:'',
        visible:'',
        section_id:'',
        ...record,
      });
      setEditingKey(record.key);
    };
  
    const cancel = () => {
      setEditingKey('');
    };
  
    const save = async(key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        console.log('index = ', index);
        console.log(newData)
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
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
      editable: true,
      ...getColumnSearchProps('topic'),
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: '20%',
      editable: true,
      ...getColumnSearchProps('content'),
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      editable: true,
      ...getColumnSearchProps('duration'),
    },
    {
        title: 'Start time',
        dataIndex: 'start_time',
        key: 'start_time',
        editable: true,
        ...getColumnSearchProps('start_time'),
    },
    {
        title: 'Visible',
        dataIndex: 'visible',
        key: 'visible',
        editable: true,
        render: ()=>(
            <Switch onChange={onChange}/> 
        )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button onClick={() => save(record.key)}
              type="link"> Save 
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button type="link">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'duration' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
      <Layout className="container mx-auto xl:px-40">
          <Breadcrumb style={{ margin: '0 0 10px' }}>
              <Breadcrumb.Item>  
                  <Link to="/homepage">iLearn</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Sections</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="my-10">
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                  onChange: cancel,
                }}
                scroll={{ x: 'fit-content' }}
              />
            </Form>
          </Content>
      </Layout>
  );
}
