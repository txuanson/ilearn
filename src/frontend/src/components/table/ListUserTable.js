import { Space, Table } from "antd";
import Column from "antd/lib/table/Column";

const sampleData = [
    {
        _id: 1,
        name: "Tran Xuan A",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
    },
    {
        _id: 2,
        name: "Tran Xuan B",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
    },
    {
        _id: 3,
        name: "Tran Xuan C",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG"
    },
]
export default function ListUserTable({
    data,
    action,
    handleAction = (user_id) => {console.log(user_id)}
}) {

    return (
        <Table dataSource={sampleData}>
            <Column title="User" key="user" render={((text, record) => (
                <Space size="middle">
                    <img src={`${record.avatar}`} alt={record.name} style={{ height: 30, width: 30 }} />
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