import React from "react";
import bg from "../assets/bg.png";
import img1 from "../assets/listImg.png";
import img2 from "../assets/listImg2.png";

const Listing = () => {
  return (
    <div className="relative mt-[200px] px-[60px]">
      <img src={bg} alt="background" />

      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-fit mx-auto">
        <h1 className="text-[45px] 2xl:text-[50px] font-Rajdhani font-bold">
          Exchange Listings
        </h1>
      </div>

      <img
        className="h-[160%] absolute bottom-[20px] left-0"
        src={img1}
        alt="Kamala"
      />
      <img
        className="h-[160%] absolute bottom-[20px] right-0"
        src={img2}
        alt="Trump"
      />
    </div>
  );
};

export default Listing;
