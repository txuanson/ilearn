import CarouselComponent from "../components/Card/CarouselComponent";
import React from "react";

export default function HomePage() {
  return (
    <div className="relative">
      <div class="container mx-auto xl:px-40 bg-gray-10 pb-5">
        <div
          className="flex item-center justify-center h-96 w-auto hidden md:block"
          style={{ backgroundImage: 'url("/backgroundHeader.jpg")' }}
        >
          <div
            class="flex items-center justify-center w-full h-full"
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
      </div>
    </div>
  );
}
