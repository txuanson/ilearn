import React, { useState, useEffect } from "react";
import { getCategoryID, getCategoryPage } from "../../api/homePage";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./CardComponent";
import { BookmarkAltOutline } from "heroicons-react";
import handleErrorApi from "../../utils/handleErrorApi";

export default function CarouselComponent({ idCategory, nameCategory }) {
  var settings = {
    dots: false,
    arrows: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = await getCategoryPage(idCategory, 1, 8);
      setData(res.items);
    } catch (err) {
      handleErrorApi(err);
    }
  }, []);
  return (
    <div>
      <div className="text-xl font-bold pl-2 pt-8 pb-0">
        <div className="flex">
          <BookmarkAltOutline></BookmarkAltOutline>
          <Link to={"/category/" + idCategory} className="pl-1">
            {nameCategory}
          </Link>
        </div>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div className="p-2">
            <CardComponent dataCard={item}></CardComponent>
          </div>
        ))}
      </Slider>
    </div>
  );
}
