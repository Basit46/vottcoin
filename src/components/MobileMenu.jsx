import React from "react";
import { Link } from "react-scroll";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open ? "top-[70px] vsm:top-[80px]" : "top-[-100vh] hidden"
      } mobile-menu flex xl:hidden duration-500 fixed z-[9] bg-[#0d0914] w-screen h-fit text-[20px] py-[40px] flex-col items-center gap-[10px] font-[600] font-Rajdhani`}
    >
      <Link
        onClick={() => setOpen(false)}
        to="hero"
        smooth={true}
        offset={50}
        duration={500}
      >
        Home
      </Link>
      <Link
        onClick={() => setOpen(false)}
        to="features"
        smooth={true}
        offset={50}
        duration={500}
      >
        Features
      </Link>
      <Link
        onClick={() => setOpen(false)}
        to="token"
        smooth={true}
        offset={50}
        duration={500}
      >
        Tokenomics
      </Link>
      <Link
        onClick={() => setOpen(false)}
        to="roadmap"
        smooth={true}
        offset={50}
        duration={500}
      >
        Roadmap
      </Link>
      <Link
        onClick={() => setOpen(false)}
        to="exchange"
        smooth={true}
        offset={50}
        duration={500}
      >
        Exchange Listings
      </Link>
      <Link
        onClick={() => setOpen(false)}
        to="contact"
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact
      </Link>

      <button
        onClick={() => setOpen(false)}
        className="hidden btn1 w-[120px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo"
      >
        NFT
      </button>
      <button
        onClick={() => setOpen(false)}
        className="hidden btn2 w-[184px] h-[44px] text-white rounded-[7.5px] text-[24px] font-Boogaloo"
      >
        Whitepaper
      </button>
    </div>
  );
};

export default MobileMenu;
