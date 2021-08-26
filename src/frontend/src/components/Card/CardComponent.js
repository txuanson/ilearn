import ReactImageFallback from "react-image-fallback";
import { Card } from "antd";
import SplashRoute from '../../components/animation/SplashRoute';
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import CourseDescription from "../../pages/CourseDescription";

const { Meta } = Card;

export default function CardComponent({ dataCard }) {
  const HOST = process.env.REACT_APP_BASE_HOST;
  return (
    <div>
      {dataCard ? (
        <Link to={"/course/" + dataCard._id}>
          <Switch>
            <Route exact path={`/course/${dataCard._id}`}>
                <SplashRoute key={`/course/${dataCard._id}`}>
                    <CourseDescription
                        course_id={dataCard._id}>
                    </CourseDescription>
                </SplashRoute>
            </Route>
          </Switch>
          <Card
            className="m-auto"
            hoverable
            cover={
              <ReactImageFallback
              style={{height:"140px", width:"100%"}}
              className="object-fit shadow"
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
