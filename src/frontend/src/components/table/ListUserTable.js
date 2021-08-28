import { Space, Table } from "antd";
import Column from "antd/lib/table/Column";

export default function ListUserTable({
    data,
    action,
    handleAction
}) {

    return (
        <Table dataSource={data}>
            <Column title="User" key="user" render={((text, record) => (
                <Space size="middle">
                    <img src={`${process.env.REACT_APP_BASE_HOST}/${record.avatar}`} alt={record.name} style={{ height: 40, width: 40 }} />
                    {record.name}
                </Space>
            ))} />
            <Column title="Action" key="action" render={((text, record) => (
                <Space size="small">
                    <a onClick={() => handleAction(record._id)}>{action}</a>
                </Space>
            ))} />
        </Table>
    )
}