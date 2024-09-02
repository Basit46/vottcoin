import React from "react";
import tokenChart from "../assets/token.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Tokenomics = () => {
  const tokenRef = useRef();
  useGSAP(
    () => {
      gsap.from(".anim1", {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: tokenRef.current,
          start: "top 90%",
        },
      });

      const titems = gsap.utils.toArray(".token .item");

      titems.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
        });
      });
    },
    { scope: tokenRef }
  );

  return (
    <div
      ref={tokenRef}
      id="token"
      className="token relative w-full h-fit mt-[100px] "
    >
      <h1 className="anim1 text-center text-[60px] font-Rajdhani font-[700]">
        Tokenomics
      </h1>

      <div className="relative z-[2] mt-[40px] flex justify-center flex-col xl:flex-row items-center gap-[30px] xl:gap-[10px] px-[20px] sm:px-[60px]">
        <div className="shrink-0 flex flex-col items-center gap-[30px] xl:items-end">
          <div className="item flex flex-col-reverse xl:flex-row items-center xl:items-start gap-[1px] xl:gap-[20px]">
            <div className="flex flex-col items-center xl:items-end">
              <p className="text-[30px] font-bold font-Rajdhani text-center xl:text-end">
                <span className="">Marketing</span>{" "}
                <span className="clip-text text-[35px]">15%</span>
              </p>
              <p className="text-center xl:text-end text-[#969EB2] leading-[26px]">
                Fueling aggressive marketing campaigns <br /> to bring more
                players into the game.
              </p>
            </div>
            <div className="size-[43px] bg-[#FF9527] border-[3px] border-white rounded-full" />
          </div>

          <div className="item flex flex-col-reverse xl:flex-row items-center xl:items-start gap-[1px] xl:gap-[20px]">
            <div className="flex flex-col items-center xl:items-end">
              <p className="text-[30px] font-bold font-Rajdhani text-center xl:text-end">
                <span className="">Presale</span>{" "}
                <span className="clip-text text-[35px]">20%</span>
              </p>
              <p className="text-center xl:text-end text-[#969EB2] leading-[26px]">
                Get in early! Be part of the initial wave and <br /> secure your
                stake in the game.
              </p>
            </div>
            <div className="size-[43px] bg-[#1C152A] border-[3px] border-white rounded-full" />
          </div>

          <div className="item flex flex-col-reverse xl:flex-row items-center xl:items-start gap-[1px] xl:gap-[20px]">
            <div className="flex flex-col items-center xl:items-end">
              <p className="text-[30px] font-bold font-Rajdhani text-center xl:text-end">
                <span className="">Staking</span>{" "}
                <span className="clip-text text-[35px]">15%</span>
              </p>
              <p className="text-center xl:text-end text-[#969EB2] leading-[26px]">
                Earn rewards by staking your tokens and <br /> contributing to
                the stability of our ecosystem.
              </p>
            </div>
            <div className="size-[43px] bg-[#FF5937] border-[3px] border-white rounded-full" />
          </div>
        </div>

        <img className="xl:mr-[-12px]" src={tokenChart} alt="Token Chart" />

        <div className="shrink-0 flex flex-col gap-[30px] items-center xl:items-start">
          <div className="item flex flex-col xl:flex-row items-center xl:items-start gap-[1px] xl:gap-[20px]">
            <div className="size-[43px] bg-[#3C2974] border-[3px] border-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold font-Rajdhani text-center xl:text-start">
                <span className="">Project Finance</span>{" "}
                <span className="clip-text text-[35px]">25%</span>
              </p>
              <p className="text-center xl:text-start text-[#969EB2] leading-[26px]">
                Ensuring the long-term sustainability and <br /> development of
                the Tap to Vote ecosystem.
              </p>
            </div>
          </div>

          <div className="item flex flex-col xl:flex-row items-center xl:items-start gap-[1px] xl:gap-[20px]">
            <div className="size-[43px] bg-[#FFF960] border-[3px] border-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold font-Rajdhani text-center xl:text-start">
                <span className="">Airdrop</span>{" "}
                <span className="clip-text text-[35px]">15%</span>
              </p>
              <p className="text-center xl:text-start text-[#969EB2] leading-[26px]">
                Rewarding early adopters and engaging the <br /> community with
                exciting giveaways.
              </p>
            </div>
          </div>

          <div className="item flex flex-col xl:flex-row items-center xl:items-start gap-[1px] xl:gap-[20px]">
            <div className="size-[43px] bg-[#6850FF] border-[3px] border-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold font-Rajdhani text-center xl:text-start">
                <span className="">Liquidity</span>{" "}
                <span className="clip-text text-[35px]">10%</span>
              </p>
              <p className="text-center xl:text-start text-[#969EB2] leading-[26px]">
                Maintaining liquidity to ensure smooth <br /> transactions and a
                healthy market.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="size-[750px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6850FF] blur-[50px] opacity-20" />
    </div>
  );
};

export default Tokenomics;
