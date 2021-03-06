import { Pagination, Row, Col } from "antd";
import CardComponent from "../Card/CardComponent";
import { useState, useEffect } from "react";
import { searchCourse } from "../../api/search";
import handleErrorApi from "../../utils/handleErrorApi";
import useQuery from "../../utils/query";

export default function Search() {
    const query = useQuery();

  const [data, setData] = useState([]);
  // const [minValue, setMinValue] = useState([]);
  // const [maxValue, setMaxValue] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const pageSize = 16;
  
  const fetch = async (page) => {
    try {
      const res = await searchCourse(encodeURIComponent(query.get("query")), page, pageSize)
      const { items, items_count } = res;
      setData(items);
      setItemCount(items_count);
      // setMinValue(0);
      // setMaxValue(pageSize);
    } catch (err) {
      handleErrorApi(err)
    }
  }
  
  const handleChange = (value) => {
    // if (value <= 1) {
    //   setMinValue(0);
    //   setMaxValue(pageSize);
    // } else {
    //   setMinValue((value - 1) * pageSize);
    //   setMaxValue(value * pageSize);
    // }
    fetch(value);
  };
  useEffect(() => {
    fetch(1);
  }, []);
  return (
    <div className="relative">
      <div className="container mx-auto xl:px-40">
        <div className="p-4 pb-0 font-bold text-lg">Search: {query.get("query")}</div>
        <Row>
          {data.map((item) => (
            <Col xl={6} lg={6} md={8} xs={12} sm={12}>
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
            <Pagination defaultCurrent={1} total={itemCount} onChange={handleChange} pageSize={pageSize}/>
          </div>
       
      </div>
    </div>
  );
}
