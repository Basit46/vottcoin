import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6850FF] h-[613px] w-full mt-[80px] pb-[30px]">
      <div className="relative h-full w-full bg-black">
        <div className="clip1 absolute top-0 left-1/2 -translate-x-1/2 bg-[#6850FF] w-[400px] h-[100px] grid place-items-center">
          <p className="text-[80px] font-Boogaloo leading-none">Vottcoin</p>
        </div>
        <div className="clip2 px-[20px] absolute bottom-[-2px] left-1/2 -translate-x-1/2 bg-[#6850FF] w-[400px] h-[40px] flex justify-center gap-[20px] items-center">
          <p>Copyright 2024</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
