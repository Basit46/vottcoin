import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pr-[60px] 2xl:pr-[100px]">
      <div className="clip-side w-[25%] 2xl:w-[410px] h-[80px] 2xl:h-[100px] bg-[#6850FF] flex justify-center gap-[10px] items-center">
        <img className="w-[52px]" src={logo} alt="Vottcoin" />
        <h1 className="text-[44px] font-Boogaloo">Vottcoin</h1>
      </div>

      <div className="font-[600] font-Rajdhani gap-[30px] flex items-center">
        <Link to="hero" smooth={true} offset={50} duration={500}>
          HOME
        </Link>
        <Link to="features" smooth={true} offset={50} duration={500}>
          Features
        </Link>
        <Link to="token" smooth={true} offset={50} duration={500}>
          Tokenomics
        </Link>
        <Link to="roadmap" smooth={true} offset={50} duration={500}>
          Roadmap
        </Link>
        <Link to="exchange" smooth={true} offset={50} duration={500}>
          Exchange Listings
        </Link>
        <Link to="contact" smooth={true} offset={50} duration={500}>
          CONTACT
        </Link>
      </div>

      <div className="flex gap-[20px] items-center">
        <button className="btn1 w-[120px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo">
          NFT
        </button>
        <button className="btn2 w-[184px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo">
          Whitepaper
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
