import React from "react";
import bg from "../assets/bg.png";
import img1 from "../assets/listImg.png";
import img2 from "../assets/listImg2.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import bg1 from "../assets/Elipse.png";
import bg2 from "../assets/Elipse2.png";

const MobileListing = () => {
  return (
    <div
      id="exchange"
      className="block lg:hidden relative mt-[100px] px-[20px] xmd:px-[60px] w-full"
    >
      <h1 className="text-[40px] vsm:text-[45px] 2xl:text-[50px] font-Rajdhani font-bold text-center leading-[1.1]">
        Exchange Listings
      </h1>

      <div className="mt-[20px] relative bg-[#0D0914] overflow-hidden border-[1px] border-[#FFF960] rounded-[20px] w-fit mx-auto flex flex-col py-[20px] px-[20px]">
        <p className="relative z-[2] text-center text-[20px] 2xl:text-[22px] font-[500] font-MavenPro text-[#969EB2] leading-[1.4] 2xl:leading-[36px]">
          Tap to Vote is set to be listed on some of the top exchanges in the
          crypto world, including MEXC, Bybit, Coinstore, and KuCoin. This means
          greater accessibility and liquidity for all our players and investors.
          Stay tuned for the official listing dates and get ready to tap into
          the action!
        </p>

        <div className="relative z-[2] mt-[30px] flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[10px]">
          <img className="h-[25px] w-fit" src={logo1} alt="Partner" />

          <img className="h-[25px] w-fit" src={logo2} alt="Partner" />

          <img className="h-[25px] w-fit" src={logo3} alt="Partner" />

          <img className="h-[25px] w-fit" src={logo4} alt="Partner" />
        </div>

        <div className="relative z-[2] mt-[50px] flex w-fit mx-auto justify-center">
          <img className="h-[300px] " src={img1} alt="Kamala" />
          <img className="h-[300px] ml-[-20px]" src={img2} alt="Trump" />
        </div>

        <img src={bg1} className="absolute h-full top-0 left-0" alt="ellipse" />
        <img
          src={bg2}
          className="absolute h-full bottom-0 right-0"
          alt="ellipse"
        />
      </div>
    </div>
  );
};

export default MobileListing;
