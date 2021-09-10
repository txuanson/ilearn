import ReactImageFallback from "react-image-fallback";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function CardComponent({ dataCard }) {
  const HOST = process.env.REACT_APP_BASE_HOST;
  return (
    <div>
      {dataCard ? (
        <Link to={"/course/" + dataCard._id}>
          <Card
            className="m-auto "
            hoverable
            cover={
              <ReactImageFallback
              style={{height:"140px", width:"100%"}}
              className="object-cover shadow"
                alt=""
                src={HOST + "/" + dataCard.cover}
                fallbackImage="/default-class-cover.png"
              />
            }
          >
            <Meta title={dataCard.name} />
            <h>{dataCard.tutor.name}</h>
            <br></br>
            <h>{dataCard.subscriber_count} {dataCard.subscriber_count > 1 ? 'subscribers' : 'subscriber'}</h>
            <br></br>
            <p className="mt-2 px-2 py-1 bg-red-700 rounded text-white w-min">{dataCard.public ? 'Public' : 'Private'}</p>

          </Card>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
