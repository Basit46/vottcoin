import React from "react";
import tokenChart from "../assets/token.png";

const Tokenomics = () => {
  return (
    <div className="token w-full h-fit mt-[50px] overflow-hidden">
      <h1 className="text-center text-[60px] font-Rajdhani font-[700]">
        Tokenomics
      </h1>

      <div className="mt-[40px] flex justify-center items-center gap-[10px] px-[20px] sm:px-[60px]">
        <div className="shrink-0 flex flex-col gap-[30px] items-end">
          <div className="flex gap-[20px]">
            <div className="flex flex-col items-end">
              <p className="text-[30px] font-bold font-Rajdhani text-end">
                <span className="">Marketing</span>{" "}
                <span className="clip-text text-[35px]">15%</span>
              </p>
              <p className="text-end text-[#969EB2] leading-[26px]">
                Fueling aggressive marketing campaigns <br /> to bring more
                players into the game.
              </p>
            </div>
            <div className="size-[43px] bg-[#FF9527] border-[3px] border-white rounded-full" />
          </div>

          <div className="flex gap-[20px]">
            <div className="flex flex-col items-end">
              <p className="text-[30px] font-bold font-Rajdhani text-end">
                <span className="">Presale</span>{" "}
                <span className="clip-text text-[35px]">20%</span>
              </p>
              <p className="text-end text-[#969EB2] leading-[26px]">
                Get in early! Be part of the initial wave and <br /> secure your
                stake in the game.
              </p>
            </div>
            <div className="size-[43px] bg-[#1C152A] border-[3px] border-white rounded-full" />
          </div>

          <div className="flex gap-[20px]">
            <div className="flex flex-col items-end">
              <p className="text-[30px] font-bold font-Rajdhani text-end">
                <span className="">Staking</span>{" "}
                <span className="clip-text text-[35px]">15%</span>
              </p>
              <p className="text-end text-[#969EB2] leading-[26px]">
                Earn rewards by staking your tokens and <br /> contributing to
                the stability of our ecosystem.
              </p>
            </div>
            <div className="size-[43px] bg-[#FF5937] border-[3px] border-white rounded-full" />
          </div>
        </div>

        <img className="" src={tokenChart} alt="Token Chart" />

        <div className="shrink-0 flex flex-col gap-[30px] items-start">
          <div className="flex gap-[20px]">
            <div className="size-[43px] bg-[#3C2974] border-[3px] border-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold font-Rajdhani text-start">
                <span className="">Project Finance</span>{" "}
                <span className="clip-text text-[35px]">25%</span>
              </p>
              <p className="text-start text-[#969EB2] leading-[26px]">
                Ensuring the long-term sustainability and <br /> development of
                the Tap to Vote ecosystem.
              </p>
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div className="size-[43px] bg-[#FFF960] border-[3px] border-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold font-Rajdhani text-start">
                <span className="">Airdrop</span>{" "}
                <span className="clip-text text-[35px]">15%</span>
              </p>
              <p className="text-start text-[#969EB2] leading-[26px]">
                Rewarding early adopters and engaging the <br /> community with
                exciting giveaways.
              </p>
            </div>
          </div>

          <div className="flex gap-[20px]">
            <div className="size-[43px] bg-[#6850FF] border-[3px] border-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold font-Rajdhani text-start">
                <span className="">Liquidity</span>{" "}
                <span className="clip-text text-[35px]">10%</span>
              </p>
              <p className="text-start text-[#969EB2] leading-[26px]">
                Maintaining liquidity to ensure smooth <br /> transactions and a
                healthy market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
