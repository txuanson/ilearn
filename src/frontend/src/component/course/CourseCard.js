import { Col, Card, CardImg, CardText, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import generateLink from "../../util/generateLink";

export default function CourseCard({ data }) {
  console.log(data);
  return (
    <Col xs={12} md={4}>
      <Card>
        <CardImg top width="100%" src={data?.cover ? data.cover : "/img/default-class-cover.png"} alt={data?.name ?? "Course Card Cover"} />
        <CardBody>
          <CardTitle tag="h5">{data.name}</CardTitle>
          {/* <Link to={`/profile/${data.tutor._id}`}>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{data.tutor.name}</CardSubtitle>
          </Link> */}

          <Link to={`/course/${data._id}`}>
            <Button className="float-right">Detail</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
}
