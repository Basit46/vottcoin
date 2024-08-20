import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pr-[60px] 2xl:pr-[100px]">
      <div className="w-[20%] 2xl:w-[410px] h-[80px] 2xl:h-[100px] bg-[#6850FF] flex justify-center items-center">
        <img src={logo} alt="Vottcoin" />
        <h1 className="text-[44px] font-Boogaloo">Vottcoin</h1>
      </div>

      <div className="font-[600] font-Rajdhani gap-[30px] flex items-center">
        <Link to="Hero">HOME</Link>
        <Link to="Hero">Features</Link>
        <Link to="Hero">Tokenomics</Link>
        <Link to="Hero">Roadmap</Link>
        <Link to="Hero">Exchange Listings</Link>
        <Link to="Hero">CONTACT</Link>
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
