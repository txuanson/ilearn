import React, { useState, useEffect } from "react";
import { getCategoryID } from "../../api/homePage";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./CardComponent";
import { BookmarkAltOutline } from "heroicons-react";

export default function CarouselComponent({ idCategory, nameCategory }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
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
    <div>
      <div className="text-xl font-bold pl-2 pt-8 pb-0">
        <div className = "flex"><BookmarkAltOutline></BookmarkAltOutline><Link to="#" className = "pl-1">{nameCategory}</Link></div>
        
      </div>
      <Slider {...settings}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="p-2">
            <CardComponent dataCard={data[item]}></CardComponent>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//   <div
//     className={className}
//     style={{
//       ...style,
//       color: "black"
//     }}
//     onClick={onClick}
//   ><ChevronRightIcon className = "bg-gray-300 h-10 rounded-full p-2 z-10 border-solid" style={{ position: "absolute", right: "0.5rem" }}></ChevronRightIcon></div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//       <div
//       className={className}
//       style={{
//         ...style,
//         color: "black"
//       }}
//       onClick={onClick}
//     ><ChevronLeftIcon className = "bg-gray-300 h-10 rounded-full p-2 z-10 border-solid" style={{ position: "absolute", left: "0.5rem" }}></ChevronLeftIcon></div>
//   );
// };

// const settings = {
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
// };
// export default function CarouselComponent({ idCategory, nameCategory }) {
//   const [data, setData] = useState([]);

//   useEffect(async () => {
//     try {
//       const res = await getCategoryID(idCategory);
//       setData(res.items);
//     } catch (err) {
//       console.log(idCategory);
//     }
//   }, []);
//   return (
//     <>
//       {data[0] ? (
//         <div className="pt-4 my-3">
//           <div className="text-xl font-bold">
//             <Link to="#">
//             {nameCategory}
//             </Link>
//           </div>
//           <div className="grid grid-cols-12 mb-3">
//             <div className="col-span-12">
//               <Carousel arrows {...settings}>
//                 <div className="site-card-wrapper pb-5">
//                   <Row>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[0]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[1]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[2]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[2]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                   </Row>
//                 </div>
//                 {data.length > 4?(<div className="site-card-wrapper pb-5">
//                   <Row>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[5]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[6]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[7]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[8]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                   </Row>
//                 </div>
//                 ):(<></>)}

//                 {data.length > 8?(<div className="site-card-wrapper pb-5">
//                   <Row>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[9]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[10]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[11]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                     <Col xl={6} md={8} xs={12} className = "p-1">
//                       <CardComponent dataCard={data[12]} >
//                         Card content
//                       </CardComponent>
//                     </Col>
//                   </Row>
//                 </div>
//                 ):(<></>)}

//               </Carousel>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }
