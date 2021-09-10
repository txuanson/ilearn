import CarouselComponent from "../components/Card/CarouselComponent";
import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="container mx-auto xl:px-40 bg-gray-10 pb-5">
        <div
          className="flex item-center justify-center h-96 w-auto hidden md:block bg-auto bg-no-repeat bg-center"
          style={{ backgroundImage: 'url("https://ilearn.yurineko.net/storage/cover.jpeg")' }}
        >
          <div
            className="flex items-center justify-center w-full h-full"
            style={{ position: "relative" }}
          ></div>
        </div>

        <CarouselComponent
          idCategory="60d339d6089c6c40a4a6ecb1"
          nameCategory="Javascript"
        ></CarouselComponent>
        <CarouselComponent
          idCategory="60d339db089c6c40a4a6ecb2"
          nameCategory="C++"
        ></CarouselComponent>
        <CarouselComponent
          idCategory="60d339e8089c6c40a4a6ecb5"
          nameCategory="Ruby"
        ></CarouselComponent>
        <CarouselComponent
          idCategory="613b20db2ef95d989782836a"
          nameCategory="Java"
        ></CarouselComponent>
        <CarouselComponent
          idCategory="612ed2e58e9dc60c20d37134"
          nameCategory="Python"
        ></CarouselComponent>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
}
