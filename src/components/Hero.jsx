import React, { useRef } from "react";
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
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useGSAP(
    () => {
      const htl = gsap.timeline();
      htl
        .from(".anim1", { opacity: 0, duration: 2 })
        .from(".anim2", { opacity: 0, y: 20 }, "-=0.9")
        .from(".anim3", { opacity: 0, y: 20 })
        .from(".anim4", { opacity: 0, y: 20 })
        .from(".anim5", { opacity: 0, y: 20 });
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      id="hero"
      className="hero relative z-[2] h-fit overflow-hidden"
    >
      <div className="px-[20px] flex justify-center pt-[60px] sm:pt-[120px] gap-[30px] 2xl:gap-[100px]">
        <div className="relative">
          <div className="anim1 absolute top-[20%] vsm:top-[10%] xl:top-[5%] left-1/2 -translate-x-1/2 flex justify-center">
            <img src={img1} alt="kamala" />
            <img
              className="ml-[-100px] vsm:ml-[-130px] md:ml-[-200px] xl:ml-[-100px]"
              src={img2}
              alt="Trump"
            />
          </div>

          <div className="pt-[65%] vsm:pt-[40%] xmd:pt-[30%] relative z-[2] flex flex-col items-center">
            <h1 className="anim2 text-[70px] vsm:text-[100px] lg:text-[174px] text-center leading-[1.0] font-Knewave pr-[20px]">
              VOTTCOIN
            </h1>
            <p className="anim3 mt-[10px] text-[28px] vsm:text-[44px] font-Boogaloo text-center leading-[1.1]">
              The Ultimate Meme-Coin <br className="sm:hidden" /> Election Game!
            </p>
            <button className="anim4 mt-[20px] mb-[50px] w-[80%] vsm:w-[336px] py-[5px] text-[24px] font-Poppins font-[900] text-[#0D0914] leading-[1.1] rounded-[42px]">
              Join the <br /> Revolution
            </button>
            <p className="anim5 text-center text-[#7D7D7D] font-[900] text-[20px] font-Poppins tracking-[8px]">
              Where Every Tap Counts!
            </p>
          </div>
        </div>

        <iframe
          className="hidden xl:block w-[90%] sm:w-[500px] h-[1480px] vsm:h-[1400px] sm:h-[1400px] 2xl:h-[1150px]"
          src="https://vottcoin-widget.vercel.app/"
          frameborder="0"
        ></iframe>
      </div>

      <div className="mt-[20px] relative z-[3] w-full bg-[#3C2974] pb-[10px]">
        <Slider {...settings} className="">
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
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
