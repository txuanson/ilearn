import { Pagination, Row, Col } from "antd";
import { useState, useEffect } from "react";
import { getHistory } from "../api/user";
import CardHistory from "../components/Card/CardHistory";


export default function MyLearn() {
  const [data, setData] = useState([]);
  const [minValue, setMinValue] = useState([]);
  const [maxValue, setMaxValue] = useState([]);
  const pageSize = 20;
  
  
  const handleChange = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(pageSize);
    } else {
      setMinValue((value - 1) * pageSize);
      setMaxValue(value * pageSize);
    }
  };

  useEffect(async () => {
    try {
      const res = await getHistory();
      console.log(res.items.history)
      setData(res.items.history);
      setMinValue(0);
      setMaxValue(pageSize);
    } catch (err) {
      // handleErrorApi(err);
    }
  }, []);
  return (
    <div className="relative">
      <div class="container mx-auto xl:px-40 min-h-screen">
        <div className="p-4 pb-0 font-bold text-lg">History</div>
        <Row>
          {data.slice(minValue, maxValue).map((item) => (
            <Col xl={6} md={6}>
              <div className="p-2">
                <CardHistory
                  dataCard={item}
                  bordered={false}
                ></CardHistory>
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
