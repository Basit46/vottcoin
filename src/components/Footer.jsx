import React from "react";
import { Link } from "react-scroll";
import linkBg from "../assets/linkBg.svg";
import {
  FaFacebookF,
  FaPlay,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#6850FF] h-[800px] vsm:h-[650px] md:h-[613px] w-full mt-[80px] vsm:pb-[30px]"
    >
      <div className="relative h-full w-full bg-black flex flex-col items-center justify-center">
        <div className="clip1 absolute top-0 left-1/2 -translate-x-1/2 bg-[#6850FF] w-full vsm:w-[400px] h-[80px] vsm:h-[100px] grid place-items-center">
          <p className="text-[80px] font-Boogaloo leading-none">Vottcoin</p>
        </div>

        <div className="clip2 px-[20px] absolute bottom-[-2px] left-1/2 -translate-x-1/2 bg-[#6850FF] w-full vsm:w-[400px] h-[40px] flex justify-center gap-[20px] items-center">
          <p>Copyright 2024</p>
          <p>All Rights Reserved.</p>
        </div>

        <div className="w-[80%] flex flex-col items-center">
          <div className="px-[20px] font-[600] font-Rajdhani gap-x-[30px] gap-[10px] flex flex-wrap justify-center items-center uppercase">
            <Link
              className="cursor-pointer"
              to="hero"
              smooth={true}
              offset={50}
              duration={500}
            >
              HOME
            </Link>
            <Link
              className="cursor-pointer"
              to="features"
              smooth={true}
              offset={50}
              duration={500}
            >
              Features
            </Link>
            <Link
              className="cursor-pointer"
              to="token"
              smooth={true}
              offset={50}
              duration={500}
            >
              Tokenomics
            </Link>
            <Link
              className="cursor-pointer"
              to="roadmap"
              smooth={true}
              offset={50}
              duration={500}
            >
              Roadmap
            </Link>
            <Link
              className="cursor-pointer"
              to="exchange"
              smooth={true}
              offset={50}
              duration={500}
            >
              Exchange Listings
            </Link>
            <Link
              className="cursor-pointer"
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              CONTACT
            </Link>
          </div>

          <div className="mt-[50px] w-full border-y-[3px] border-[#0F1C23] py-[20px] flex flex-col gap-[20px] md:gap-0 md:flex-row justify-between items-center">
            <div>
              <p className="text-[24px] font-Rajdhani font-[600]">
                Office <span className="text-[#6850FF]">Location:</span>
              </p>
              <p className="font-Poppins text-[#969EB2] text-center md:text-left">
                dubai
              </p>
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

              <div className="flex gap-[10px] justify-center md:justify-end">
                <a
                  href="https://x.com/VoteCoin00"
                  target="blank"
                  className="size-[46px] relative grid place-items-center"
                >
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaXTwitter className="absolute text-[24px]" />
                </a>
                <a
                  href="https://t.me/vottecoin"
                  target="blank"
                  className="size-[46px] relative grid place-items-center"
                >
                  <img className="size-full" src={linkBg} alt="linkBg" />
                  <FaTelegramPlane className="absolute text-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
