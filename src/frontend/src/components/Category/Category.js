import { Pagination, Row, Col } from "antd";
import CardComponent from "../Card/CardComponent";
import { useState, useEffect } from "react";
import { getCategoryID } from "../../api/homePage";


export default function Category({ idCategory, nameCategory }) {
  const [data, setData] = useState([]);
  const [minValue, setMinValue] = useState([]);
  const [maxValue, setMaxValue] = useState([]);
  const pageSize = 20;
  useEffect(async () => {
    try {
      const res = await getCategoryID(idCategory);
      setData(res.items);
      setMinValue(0);
      setMaxValue(pageSize);
    } catch (err) {
      console.log(idCategory);
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
  return (
    <div className="relative">
      <div className="container mx-auto xl:px-40">
        <div className="p-4 pb-0 font-bold text-lg">Category / {nameCategory}</div>
        <Row>
          {data.slice(minValue, maxValue).map((item) => (
            <Col xl={6} md={6}>
              <div className="p-2">
                <CardComponent
                  dataCard={item}
                  bordered={false}
                ></CardComponent>
              </div>
            </Col>
          ))}
        </Row>
        <div className="p-3 grid justify-items-end">
            <Pagination defaultCurrent={1} total={data.length} onChange={handleChange} pageSize={pageSize}/>
          </div>
       
      </div>
    </div>
  );
}
