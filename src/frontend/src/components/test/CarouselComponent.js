import React, { Children, Component} from "react";
import { Carousel, Col, Row } from "antd";
import { ArrowRightIcon, ArrowLeftIcon} from "@heroicons/react/outline";
import CardComponent from "./CardComponent";


export default class CarouselComponent extends Component{
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className = "bg-gray-100 py-5 my-3">
        <div className = "text-xl text-center text-blue-700 py-3 mt-3 font-bold">{this.props.name}</div>
        <div className = "grid grid-cols-12 mb-3">
            <ArrowLeftIcon className=" block h-10 w-6" onClick={this.previous} style = {{alignSelf:'center', justifySelf: 'center'}}></ArrowLeftIcon>
            <div className="col-span-10" >
                <Carousel ref={node => (this.carousel = node)} {...props}>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                        <Col span={8}>
                                <CardComponent title="Card title" bordered={false}>
                                Card content
                                </CardComponent>
                        </Col>
                    </Row>
                </div>

                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                    </Row>
                </div>

                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                        <Col span={8}>
                            <CardComponent title="Card title" bordered={false}>
                            Card content
                            </CardComponent>
                        </Col>
                    </Row>
                </div>

                </Carousel>
            </div>
            <ArrowRightIcon className="block h-6 w-6" onClick={this.next} style = {{alignSelf:'center', justifySelf: 'center'}}></ArrowRightIcon>
        </div>
      </div>
    );
  }
}