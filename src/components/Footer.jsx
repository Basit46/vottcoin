import React from "react";
import { Link } from "react-scroll";
import linkBg from "../assets/linkBg.svg";
import { FaFacebookF, FaPlay } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

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

        <div className="w-[80%] flex flex-col items-center">
          <div className="font-[600] font-Rajdhani gap-[30px] flex items-center uppercase">
            <Link to="Hero">HOME</Link>
            <Link to="Hero">Features</Link>
            <Link to="Hero">Tokenomics</Link>
            <Link to="Hero">Roadmap</Link>
            <Link to="Hero">Exchange Listings</Link>
            <Link to="Hero">CONTACT</Link>
          </div>

          <div className="mt-[50px] w-full border-y-[3px] border-[#0F1C23] py-[20px] flex justify-between items-center">
            <div>
              <p className="text-[24px] font-Rajdhani font-[600]">
                Office <span className="text-[#6850FF]">Location:</span>
              </p>
              <p className="font-Poppins text-[#969EB2]">dubai</p>
            </div>

            <div>
              <p className="text-[24px] text-center font-Rajdhani font-[600]">
                Contact <span className="text-[#6850FF]">Information:</span>
              </p>
              <a
                href="http://vottcoin.io/"
                target="blank"
                className="font-Poppins text-center mx-auto block w-fit text-[#969EB2]"
              >
                vottcoin.io
              </a>
            </div>

            <div>
              <p className="text-[24px] text-center font-Rajdhani font-[600]">
                Join <span className="text-[#6850FF]">Vottcoin</span> Community
              </p>

              <div className="flex gap-[10px]">
                <div className="size-[46px] relative grid place-items-center">
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaFacebookF className="absolute text-[24px]" />
                </div>
                <div className="size-[46px] relative grid place-items-center">
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaXTwitter className="absolute text-[24px]" />
                </div>
                <div className="size-[46px] relative grid place-items-center">
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaInstagram className="absolute text-[24px]" />
                </div>
                <div className="size-[46px] relative grid place-items-center">
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaLinkedin className="absolute text-[24px]" />
                </div>
                <div className="size-[46px] relative grid place-items-center">
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaPlay className="absolute text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
