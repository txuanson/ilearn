import { useEffect, useState } from 'react';
import { getCourseByCategory } from '../api/course';
import CourseCard from '../component/course/CourseCard';
import handleErrorApi from '../util/handleErrorApi';
import { Row } from 'reactstrap';
//import { Header } from 'antd/lib/layout/layout';
import Header from '../component/header/Header';

export default function HomePage() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const res = await getCourseByCategory('60c8abc7d71d21dc9447b43e');
            console.log(res);
            const { items } = res;
            setData(items);
        }
        catch (err) {
            handleErrorApi(err);
        }
    }, []);

    return (
        <div
        className="container p-3 mx-auto"
        >


            <Row>
                {data.map((item) => (
                    <CourseCard data={item} />
                ))}
            </Row>
        </div>
    )
}