import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ open, setOpen }) => {
  return (
    <nav className="fixed top-0 z-[10] max-w-[1900px] mx-auto w-full bg-[#0d0914] flex justify-between items-center pr-[40px] 2xl:pr-[100px]">
      <div className="clip-side w-[55%] md:w-[40%] lg:w-[25%] 2xl:w-[410px] h-[80px] 2xl:h-[100px] bg-[#6850FF] flex justify-center gap-[10px] items-center">
        <img className="w-[52px]" src={logo} alt="Vottcoin" />
        <h1 className="text-[44px] font-Boogaloo">Vottcoin</h1>
      </div>

      <div className="hidden font-[600] font-Rajdhani gap-[30px] xl:flex items-center">
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

      <div className="hidden xl:flex gap-[20px] items-center">
        <button className="btn1 w-[120px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo">
          NFT
        </button>
        <button className="btn2 w-[184px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo">
          Whitepaper
        </button>
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="xl:hidden text-[25px]"
      >
        {open ? <FaTimes className="text-[red]" /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
