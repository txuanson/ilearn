import { Pagination, Row, Col } from "antd";
import CardComponent from "../Card/CardComponent";
import { useState, useEffect } from "react";
import { getCategoryID } from "../../api/homePage";


export default function Category({ idCategory, nameCategory }) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await getCategoryID(idCategory);
      setData(res.items);
    } catch (err) {
      console.log(idCategory);
    }
  }, []);
  return (
    <div className="relative">
      <div class="container mx-auto xl:px-40">
        <div className="p-4 pb-0 font-bold text-lg">Category / {nameCategory}</div>
        <Row>
          {data.map((item) => (
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
            <Pagination defaultCurrent={1} total={50} />
          </div>
       
      </div>
    </div>
  );
}
