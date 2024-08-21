import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/heroImg1.png";
import img2 from "../assets/heroImg2.png";
import small1 from "../assets/small (1).png";
import small2 from "../assets/small (2).png";
import small3 from "../assets/small (3).png";
import small4 from "../assets/small (4).png";
import small5 from "../assets/small (5).png";
import small6 from "../assets/small (6).png";
import small7 from "../assets/small (7).png";
import small8 from "../assets/small (8).png";

const Hero = () => {
  return (
    <div id="hero" className="hero relative z-[2] h-fit overflow-hidden">
      <div className="absolute top-[20%] vsm:top-[10%] xl:top-[5%] left-1/2 -translate-x-1/2 flex justify-center">
        <img src={img1} alt="kamala" />
        <img
          className="ml-[-100px] vsm:ml-[-130px] md:ml-[-200px] xl:ml-[-400px]"
          src={img2}
          alt="Trump"
        />
      </div>

      <div className="pt-[65%] vsm:pt-[40%] xmd:pt-[30%] relative z-[2] flex flex-col items-center">
        <h1 className="text-[70px] vsm:text-[100px] lg:text-[174px] text-center leading-[1.0] font-Knewave pr-[20px]">
          VOTTCOIN
        </h1>
        <p className="mt-[10px] text-[28px] vsm:text-[44px] font-Boogaloo text-center leading-[1.1]">
          The Ultimate Meme-Coin <br className="sm:hidden" /> Election Game!
        </p>
        <button className="mt-[20px] mb-[50px] w-[80%] vsm:w-[336px] py-[5px] text-[24px] font-Poppins font-[900] text-[#0D0914] leading-[1.1] rounded-[42px]">
          Join the <br /> Revolution
        </button>
        <p className="text-center text-[#7D7D7D] font-[900] text-[20px] font-Poppins tracking-[8px]">
          Where Every Tap Counts!
        </p>
      </div>

      <div className="mt-[20px] relative z-[3] w-full space-x-[-10px] h-fit bg-[#3C2974] flex items-center justify-center pb-[10px]">
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small1}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small2}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small3}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small4}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small5}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small6}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small7}
          alt="Miniature"
        />
        <img
          className="w-[14%] lg:w-[150px] 2xl:w-[201px]"
          src={small8}
          alt="Miniature"
        />
      </div>
    </div>
  );
};

export default Hero;
