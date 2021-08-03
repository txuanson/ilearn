import { Carousel, Col, Row } from "antd";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import CardComponent from "./CardComponent";
import { useState, useEffect } from "react";
import { getCategoryID } from "../../api/homePage";

// export default class CarouselComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//     this.carousel = React.createRef();
//   }
//   next() {
//     this.carousel.next();
//   }
//   previous() {
//     this.carousel.prev();
//   }

//   render() {
//     const props = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div className="bg-gray-100 py-5 my-3">
//         <div className="text-xl text-center text-blue-700 py-3 mt-3 font-bold">
//           {this.props.item.name}
//         </div>
//         <div className="grid grid-cols-12 mb-3">
//           <ArrowLeftIcon
//             className=" block h-10 w-6"
//             onClick={this.previous}
//             style={{ alignSelf: "center", justifySelf: "center" }}
//           ></ArrowLeftIcon>
//           <div className="col-span-10">
//             <Carousel ref={(node) => (this.carousel = node)} {...props}>
//               <div className="site-card-wrapper">
//                 <Row gutter={16}>
//                   <Col xl={8} md={8} xs={12}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                   <Col xl={8} md={8} xs={12}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                   <Col xl={8} md={8} xs={0}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                 </Row>
//               </div>

//               <div className="site-card-wrapper">
//                 <Row gutter={16}>
//                   <Col xl={8} md={8} xs={12}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                   <Col xl={8} md={8} xs={12}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                   <Col xl={8} md={8} xs={0}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                 </Row>
//               </div>

//               <div className="site-card-wrapper">
//                 <Row gutter={16}>
//                   <Col xl={8} md={8} xs={12}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                   <Col xl={8} md={8} xs={12}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                   <Col xl={8} md={8} xs={0}>
//                     <CardComponent title="Card title" bordered={false}>
//                       Card content
//                     </CardComponent>
//                   </Col>
//                 </Row>
//               </div>
//             </Carousel>
//           </div>
//           <ArrowRightIcon
//             className="block h-6 w-6"
//             onClick={this.next}
//             style={{ alignSelf: "center", justifySelf: "center" }}
//           ></ArrowRightIcon>
//         </div>
//       </div>
//     );
//   }
// }

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
      }}
      onClick={onClick}
    ></div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
export default function CarouselComponent({idCategory, nameCategory}) {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = await getCategoryID(idCategory);
      setData(res.items);
    } catch (err) {
      console.log(idCategory);
    }
  }, []);
  return (
    <>
      {data[0] ? (
        <div className="bg-gray-100 py-5 my-3">
          <div className="text-xl text-center text-blue-700 py-3 mt-3 font-bold">
            {nameCategory}
          </div>
          <div className="grid grid-cols-12 mb-3">
            <div></div>
            <div className="col-span-10">
              <Carousel arrows {...settings}>
                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col xl={8} md={8} xs={12}>
                      <CardComponent dataCard={data[0]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                    <Col xl={8} md={8} xs={12}>
                      <CardComponent dataCard={data[1]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                    <Col xl={8} md={8} xs={0}>
                      <CardComponent dataCard={data[2]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                  </Row>
                </div>

                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col xl={8} md={8} xs={12}>
                      <CardComponent dataCard={data[3]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                    <Col xl={8} md={8} xs={12}>
                      <CardComponent dataCard={data[4]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                    <Col xl={8} md={8} xs={0}>
                      <CardComponent dataCard={data[5]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                  </Row>
                </div>

                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col xl={8} md={8} xs={12}>
                      <CardComponent dataCard={data[6]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                    <Col xl={8} md={8} xs={12}>
                      <CardComponent dataCard={data[7]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                    <Col xl={8} md={8} xs={0}>
                      <CardComponent dataCard={data[8]} bordered={false}>
                        Card content
                      </CardComponent>
                    </Col>
                  </Row>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
