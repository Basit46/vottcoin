import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  useGSAP(
    () => {
      const atl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
        },
      });
      atl
        .from(".anim1", { opacity: 0, duration: 1 })
        .from(".main", { opacity: 0, y: 50 }, "-=0.5");
    },
    { scope: ".about" }
  );

  return (
    <div ref={aboutRef} className="about relative pt-[50px] w-full h-fit">
      <div className="main relative z-[2] bg-[#1A1A1D] rounded-[54px] w-[85%] md:w-[80%] mx-auto pt-[50px] pb-[30px] px-[20px] xmd:px-[60px]">
        <h1 className="text-center uppercase text-[40px] font-Rajdhani font-[600] tracking-[3px] leading-none">
          About vottcoin
        </h1>
        <p className="mt-[10px] text-center text-[20px] vsm:text-[24px] md:text-[28px] font-MavenPro leading-[1.4] md:leading-[36px] font-[500]">
          "Tap to Vote" is not just a game, it's an experience! Step into the
          world of meme-fueled elections where your taps decide the fate of the
          campaign. Whether you're here to flex your tapping speed, gather
          votes, or strategize your way to the top, every action you take brings
          you closer to victory. Level up, boost your influence, and watch your
          campaign soar. It's time to prove who's the real boss in the wildest
          election season the meme world has ever seen!
        </p>
      </div>

      <div className="anim1 size-[200px] absolute top-[-100px] left-[-100px] rounded-full bg-[#FF8C8C80] blur-[50px] opacity-50" />
      <div className="anim1 size-[200px] absolute top-[-100px] right-[-100px] rounded-full bg-[#6850FF] blur-[50px] opacity-50" />
    </div>
  );
};

export default About;
