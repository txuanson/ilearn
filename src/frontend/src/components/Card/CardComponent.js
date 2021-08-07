import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function CardComponent({ dataCard }) {
  return (
    <div>
      {dataCard ? (
        <Link to={"/category/" + dataCard._id}>
          <Card
            className="m-auto"
            hoverable
            style={{ width: "auto" }}
            cover={
              <img
                alt=""
                //   src={dataCard.cover}
                src="https://img-c.udemycdn.com/course/480x270/1409142_1879_8.jpg"
                fallbackImage="https://img-c.udemycdn.com/course/480x270/1409142_1879_8.jpg"
              />
            }
          >
            <Meta className="text-center" title={dataCard.name} />
          </Card>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
