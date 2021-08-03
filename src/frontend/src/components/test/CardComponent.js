import { Card } from "antd";
const { Meta } = Card;

export default function CardComponent({ dataCard }) {
  return (
    <div>
      {dataCard ? (
        <Card
          className="m-auto"
          hoverable
          style={{ width: "auto" }}
          cover={
            <img
              alt=""
            //   src={dataCard.cover}
            src = "https://img-c.udemycdn.com/course/480x270/1409142_1879_8.jpg"
              fallbackImage="https://img-c.udemycdn.com/course/480x270/1409142_1879_8.jpg"
            />
          }
        >
          <Meta className="text-center" title={dataCard.name}/>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}
