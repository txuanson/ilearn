import ReactImageFallback from "react-image-fallback";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function CardComponent({ dataCard }) {
  const HOST = process.env.REACT_APP_BASE_HOST;
  return (
    <div>
      {dataCard ? (
        <Link to={"/category/" + dataCard._id}>
          <Card
            className="m-auto"
            hoverable
            cover={
              <ReactImageFallback
              className="object-cover"
                style={{ }}
                alt=""
                src={HOST + "/" + dataCard.cover}
                fallbackImage="/default-class-cover.png"
              />
            }
          >
            <Meta title={dataCard.name} />
            <h>{dataCard.tutor.name}</h>
            <br></br>
            <h>{dataCard.subscriber_count} subscriber</h>
          </Card>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
