import ReactImageFallback from "react-image-fallback";
import { Card } from "antd";
import SplashRoute from "../../components/animation/SplashRoute";
import { Route } from "react-router";
import { Link, Switch } from "react-router-dom";
import CourseDescription from "../../pages/CourseDescription";

const { Meta } = Card;

export default function CardHistory({ dataCard }) {
  const HOST = process.env.REACT_APP_BASE_HOST;
  console.log(dataCard);
  return (
    <div>
      {dataCard ? (
        <Link
          to={
            "/section/" + dataCard.course_id._id + "/" + dataCard.section_id._id
          }
        >
          {/* <Switch>
            <Route
              exact
              path={`/section/${dataCard.course_id._id}/${dataCard.section_id._id}`}
            >
              <SplashRoute
                key={`/section/${dataCard.course_id._id}/${dataCard.section_id._id}`}
              >
                <CourseDescription
                  course_id={dataCard.course_id._id}
                ></CourseDescription>
              </SplashRoute>
            </Route>
          </Switch> */}
          <Card
            className="m-auto"
            hoverable
            cover={
              <ReactImageFallback
                style={{ height: "140px", width: "100%" }}
                className="object-fit shadow"
                alt=""
                src={HOST + "/" + dataCard.course_id.cover}
                fallbackImage="/default-class-cover.png"
              />
            }
          >
            <Meta title={dataCard.course_id.name} />
            {/* <h>{dataCard.tutor.name}</h> */}
            <br></br>
            <h>{dataCard.section_id.topic}</h>
          </Card>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
