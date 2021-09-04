import { Pagination, Row, Col } from "antd";
import { useState, useEffect } from "react";
import { getHistory } from "../api/user";
import CardHistory from "../components/Card/CardHistory";
import handleErrorApi from "../utils/handleErrorApi";

export default function MyLearn() {
  const [data, setData] = useState([]);
  const [minValue, setMinValue] = useState([]);
  const [maxValue, setMaxValue] = useState([]);
  const [itemCount, setItemCount] = useState(10);
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
      setData(res.items.history);
      setItemCount(res.items_count);
      setMinValue(0);
      setMaxValue(pageSize);
    } catch (err) {
      handleErrorApi(err);
    }
  }, []);
  return (
    <div className="relative">
      <div className="container mx-auto xl:px-40">
        <div className="p-4 pb-0 font-bold text-lg">History</div>
        <Row>
          {data.slice(minValue, maxValue).map((item) => (
            <Col xl={6} lg={6} md={8} xs={12} sm={12}>
              <div className="p-2">
                <CardHistory dataCard={item} bordered={false}></CardHistory>
              </div>
            </Col>
          ))}
        </Row>
        <div className="p-3 grid justify-items-end">
          <Pagination
            defaultCurrent={1}
            total={itemCount}
            onChange={handleChange}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}
