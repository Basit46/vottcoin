import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#6850FF] h-[613px] w-full mt-[80px] pb-[30px]">
      <div className="relative h-full w-full bg-black flex flex-col items-center justify-center">
        <div className="clip1 absolute top-0 left-1/2 -translate-x-1/2 bg-[#6850FF] w-[400px] h-[100px] grid place-items-center">
          <p className="text-[80px] font-Boogaloo leading-none">Vottcoin</p>
        </div>
        <div className="clip2 px-[20px] absolute bottom-[-2px] left-1/2 -translate-x-1/2 bg-[#6850FF] w-[400px] h-[40px] flex justify-center gap-[20px] items-center">
          <p>Copyright 2024</p>
          <p>All Rights Reserved.</p>
        </div>

        <div>
          <div className="font-[600] font-Rajdhani gap-[30px] flex items-center uppercase">
            <Link to="Hero">HOME</Link>
            <Link to="Hero">Features</Link>
            <Link to="Hero">Tokenomics</Link>
            <Link to="Hero">Roadmap</Link>
            <Link to="Hero">Exchange Listings</Link>
            <Link to="Hero">CONTACT</Link>
          </div>

          <div className="mt-[50px] border-y-[4px] border-[#0F1C23]">
            <div>
              <p>Office Location:</p>
              <p>dubai</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
