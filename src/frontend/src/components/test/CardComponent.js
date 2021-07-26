import { Card } from 'antd';

const { Meta } = Card;

export default function CardComponent({src, title, description}) {

    return (
    <Card className = "m-auto"
        hoverable
        style={{ width: 'auto'}}
        cover={<img alt="" src="https://img-c.udemycdn.com/course/480x270/1409142_1879_8.jpg" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    )
}