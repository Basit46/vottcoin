import React, { useEffect, useState } from "react";
import img1 from "../assets/arrow1.svg";
import img2 from "../assets/arrow2.svg";

const Header = () => {
  return (
    <header className="w-full">
      <h1 className="main-text mb-[20px] uppercase font-Knewave text-center text-[28px] vsm:text-[24px]  leading-[1.1]">
        Token price <br className="vsm:hidden" /> increase in:
      </h1>

      <Countdown />

      {/* <div className="mt-[40px]">
        <h1 className="sm:text-[24px] font-MavenPro font-[500] text-center">
          USD raised: <span className="text-[#FFC227]">$804,776.00</span> /
          $1,186,593.00
        </h1>

        <div className="mt-[15px] overflow-hidden w-full vsm:w-[90%] mx-auto relative bg-[#39276F] rounded-[50px] h-[20px]">
          <div className="absolute left-0 top h-full w-[80%] rounded-[50px] bg-[#FFC227]" />
        </div>
      </div> */}

      <div className="mt-[20px] w-full flex justify-center gap-[10px]  items-center">
        <img className="hidden vsm:block w-[13%]" src={img2} alt="arrow" />
        <p className="flex-2 sm:text-[20px] font-MavenPro font-[500] break-all text-center">
          1 $Vottcoin = 0.00002125 SOL
        </p>
        <img className="hidden vsm:block w-[13%]" src={img1} alt="arrow" />
      </div>
    </header>
  );
};

export default Header;

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("October 11, 2024 00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown w-full flex flex-wrap vsm:flex-nowrap justify-center vsm:justify-between sm:justify-center gap-[15px] vsm:gap-0 sm:gap-[20px]">
      <div className="card relative w-[45%] vsm:w-[22%] h-[80px]">
        <div className="main">
          <h1 className="">{timeLeft.days || "00"}</h1>
          <p className="">Days.</p>
        </div>
        <div className="gradient" />
      </div>

      <div className="card relative w-[45%] vsm:w-[22%] h-[80px]">
        <div className="main">
          <h1 className="">{timeLeft.hours || "00"}</h1>
          <p className="">Hours.</p>
        </div>
        <div className="gradient" />
      </div>

      <div className="card relative w-[45%] vsm:w-[22%] h-[80px]">
        <div className="main">
          <h1 className="">{timeLeft.minutes || "00"}</h1>
          <p className="">Minutes.</p>
        </div>
        <div className="gradient" />
      </div>

      <div className="card relative w-[45%] vsm:w-[22%] h-[80px]">
        <div className="main">
          <h1 className="">{timeLeft.seconds || "00"}</h1>
          <p className="">Sec.</p>
        </div>
        <div className="gradient" />
      </div>
    </div>
  );
};
