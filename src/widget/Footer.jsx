import React from "react";
import { MdContentCopy as Copy } from "react-icons/md";
import "@solana/wallet-adapter-react-ui/styles.css";

const Footer = () => {
  function copyTextToClipboard(text) {
    window.navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
      });
  }

  return (
    <footer className="font-MavenPro">
      <p className="text-center text-[14px] vsm:text-[16px] font-[500]">
        Contract Address:
      </p>

      <button
        onClick={() =>
          copyTextToClipboard("VotsZGuSBzDxd3NAZCT5C4CenNRudCsJWnSNpLYwzxL")
        }
        className="mt-[10px] active:scale-[0.98] bg-[#FFC227] text-black relative w-full h-fit py-[5px] rounded-[1000px] flex items-center justify-center gap-[2px] px-[20px]"
      >
        <p className="text-left font-MavenPro font-[500] vsm:flex items-center break-all">
          VotsZGuSBz....nSNpLYwzxL{" "}
          <span className="inline float-right sm:float-none">
            <Copy className="" />
          </span>
        </p>
      </button>

      <p className="mx-auto w-full mt-[50px] text-[12px] vsm:text-[16px] font-[500] text-center">
        I have done my own research and understand that investing in
        cryptocurrency involves risk and may result in loss of investment. By
        participating in the presale, I fully agree to the terms of the presale.
      </p>
    </footer>
  );
};

export default Footer;
