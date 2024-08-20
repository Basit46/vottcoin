import React from "react";
import bg from "../assets/bg.png";
import img1 from "../assets/listImg.png";
import img2 from "../assets/listImg2.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const Listing = () => {
  return (
    <div className="relative mt-[200px] px-[60px]">
      <img src={bg} alt="background" />

      <div className="absolute z-[2] top-[-50px] left-1/2 -translate-x-1/2 w-fit mx-auto flex flex-col">
        <h1 className="text-[45px] 2xl:text-[50px] font-Rajdhani font-bold text-center">
          Exchange Listings
        </h1>

        <p className="mt-[50px] w-[80%] mx-auto text-center text-[20px] 2xl:text-[22px] font-[500] font-MavenPro text-[#969EB2] leading-[1.4] 2xl:leading-[36px]">
          Tap to Vote is set to be listed on some of the top exchanges in the
          crypto world, including MEXC, Bybit, Coinstore, and KuCoin. This means
          greater accessibility and liquidity for all our players and investors.
          Stay tuned for the official listing dates and get ready to tap into
          the action!
        </p>

        <div className="mt-[40px] 2xl:mt-[80px] flex justify-center items-center gap-[10px]">
          <img className="h-[25px] w-fit" src={logo1} alt="Partner" />
          <div className="size-[10px] bg-[#FFBE18] rounded-full" />
          <img className="h-[25px] w-fit" src={logo2} alt="Partner" />
          <div className="size-[10px] bg-[#FFBE18] rounded-full" />
          <img className="h-[25px] w-fit" src={logo3} alt="Partner" />
          <div className="size-[10px] bg-[#FFBE18] rounded-full" />
          <img className="h-[25px] w-fit" src={logo4} alt="Partner" />
        </div>
      </div>

      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-[10px]">
        <div className="size-[10px] bg-[#FFBE18] rounded-full" />
        <div className="size-[10px] bg-[#FFBE18] rounded-full" />
        <div className="size-[10px] bg-[#FFBE18] rounded-full" />
        <div className="size-[10px] bg-[#FFBE18] rounded-full" />
        <div className="size-[10px] bg-[#FFBE18] rounded-full" />
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
