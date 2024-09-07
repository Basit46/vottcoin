import React, { useEffect, useRef, useState } from "react";
// import { MdArrowDropDown as Arrow } from "react-icons/md";
import { HiMiniCurrencyDollar as Dollar } from "react-icons/hi2";
import trump from "../assets/trump.svg";
// import { logos } from "../assets/logos";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { connection, host } from "../helper/constants";
import { Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";
// import { useAccount } from "wagmi";
// import { Custom } from "./Custom";
// import { useDisconnect } from "wagmi";

const Center = () => {
  // //To track the state of wallet connection
  // const account = useAccount();
  // //To disconnect wallet
  // const { disconnect } = useDisconnect();

  // //To manage the opening and closing of the select modals
  // const [open, setOpen] = useState("");
  // //To maanage the chain and coin selelcted above
  // const [selectedChainId, setSelectedChainId] = useState(0);
  // const [chainTokenId, setChainTokenId] = useState(0);
  // useEffect(() => {
  //   setChainTokenId(0);
  // }, [selectedChainId]);

  const { publicKey, sendTransaction, connected, disconnect } = useWallet();

  //A custom rate subject to change
  const rate = 0.00002125;
  const [inputAmount, setInputAmount] = useState("");

  //To focus on the input
  const inputRef = useRef();
  const handleInput = () => {
    inputRef.current.focus();
  };

  const handleBuy = async () => {
    try {
      const response = await fetch(`${host}/api/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buyerPubkey: publicKey, tokens: inputAmount / rate }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { base64Transaction, minContextSlot, blockhash, lastValidBlockHeight } = data;
      const decodedTx = Buffer.from(base64Transaction, "base64");
      const transaction = Transaction.from(decodedTx);

      //Send Transaction
      const signature = await sendTransaction(transaction, connection, {
        minContextSlot,
      });
      console.log('info', 'Transaction sent:', signature);

      await connection.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature,
      });
      console.log('success', 'Transaction successful!', signature);
    } catch (error) {
      console.log('error', error);
    }

  }

  const [USDPrice, setUSDprice] = useState("1");
  const getCoinUSDprice = (coinId = "USD") => {
    if (coinId == "USD") {
      setUSDprice("1");
    } else {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-fn1QNCfAnMAB4yccJY3J5raa",
        },
      };

      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setUSDprice(data[coinId.toLowerCase()]["usd"]);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getCoinUSDprice("solana");
  }, [])

  // useEffect(() => {
  //   const idToSearch = logos[selectedChainId].tokens[chainTokenId].id;
  //   getCoinUSDprice(idToSearch);
  // }, [chainTokenId, selectedChainId]);

  function formatLargeNumber(number) {
    if (number >= 1000000) {
      // For millions: Divide by 1,000,000 and add 'M'
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1000) {
      // For thousands: Divide by 1,000 and add 'k'
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    // For numbers less than 1000: return with two decimal places
    return number.toFixed(2);
  }

  return (
    <div className="center w-full mt-[30px] mb-[40px]">
      <div className="flex gap-[5px] vsm:gap-[20px] items-center">
        <button className="w-[90px] vsm:w-[100px] h-[40px] vsm:h-[50px] bg-[#39276F] rounded-[1000px] v font-MavenPro font-[500]">
          Buy
        </button>
        <button className="cursor-not-allowed w-[90px] vsm:w-[100px] h-[40px] vsm:h-[50px] bg-[#130B2A] rounded-[1000px] v font-MavenPro font-[500]">
          Stake
        </button>
      </div>

      <div className="mt-[40px] font-MavenPro flex flex-col gap-[20px]">
        {/* <div className="flex flex-col vsm:flex-row gap-[20px] justify-between items-center">
          <div className="w-full">
            <p className="font-[500]">Select Payment method:</p>
            <div
              onClick={() => setOpen(open == 2 ? "" : "2")}
              className="mt-[10px] bg-[#39276F] relative w-full h-[40px]  rounded-[1000px] flex items-center justify-between px-[20px]"
            >
              <div className="flex gap-[5px] items-center">
                <img
                  src={logos[selectedChainId].logo}
                  className="w-[20px]"
                  alt={logos[selectedChainId].name}
                />
                <p className="font-MavenPro font-[500]">
                  {logos[selectedChainId].name}
                </p>
              </div>
              <button className="text-[30px]">
                {open == "2" ? (
                  <Arrow className="rotate-[180deg]" />
                ) : (
                  <Arrow />
                )}
              </button>

              <div
                className={`${
                  open != "2" && "hidden"
                } absolute z-[2] left-0 top-[110%] w-full bg-[#39276F] rounded-[20px] h-fit py-[20px]`}
              >
                {logos.map((logo, i) => (
                  <div
                    onClick={() => setSelectedChainId(i)}
                    key={i}
                    className="py-[10px] w-full flex items-center px-[20px] gap-[10px] hover:bg-white/20 cursor-pointer"
                  >
                    <img
                      src={logo.logo}
                      className="w-[20px] "
                      alt={logo.name}
                    />
                    <p className="font-MavenPro font-[500]">{logo.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <p className="font-[500]">Select currency to spend:</p>

            <div
              onClick={() => setOpen(open == 1 ? "" : "1")}
              className="mt-[10px] bg-[#39276F] relative w-full h-[40px]  rounded-[1000px] flex items-center justify-between px-[20px]"
            >
              <div className="flex gap-[5px] items-center">
                <img
                  src={logos[selectedChainId].tokens[chainTokenId].logo}
                  className="w-[20px]"
                  alt={logos[selectedChainId].tokens[chainTokenId].shortName}
                />
                <p className="font-MavenPro font-[500]">
                  {logos[selectedChainId].tokens[chainTokenId].shortName}
                </p>
              </div>
              <button className="text-[30px]">
                {open == "1" ? (
                  <Arrow className="rotate-[180deg]" />
                ) : (
                  <Arrow />
                )}
              </button>

              <div
                className={`${
                  open != "1" && "hidden"
                } absolute z-[2] left-0 top-[110%] w-full bg-[#39276F] rounded-[20px] min-h-[200px] py-[20px]`}
              >
                {logos[selectedChainId].tokens.map((logo, i) => (
                  <div
                    onClick={() => setChainTokenId(i)}
                    key={i}
                    className="py-[10px] w-full flex items-center px-[20px] gap-[10px] hover:bg-white/20 cursor-pointer"
                  >
                    <img
                      src={logo.logo}
                      className="w-[20px]"
                      alt={logo.shortName}
                    />
                    <p className="font-MavenPro font-[500]">{logo.shortName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-full flex flex-col vsm:flex-row gap-[20px] justify-between items-center">
          <div className="w-full">
            <p className="font-[500]">
              {"SOL"}{" "}
              you pay (${formatLargeNumber(inputAmount * USDPrice)}):
            </p>
            <div
              onClick={() => handleInput()}
              className="mt-[10px] cursor-text bg-[#39276F] relative w-full h-[40px] rounded-[1000px] flex items-center justify-between px-[20px]"
            >
              <input
                ref={inputRef}
                type="number"
                className="bg-transparent flex-1 w-[20%] outline-none text-white  placeholder:text-white"
                placeholder="0"
                min={0}
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
              />
              <Dollar className="text-[24px] sm:text-[36px] cursor-pointer" />
            </div>
          </div>

          <div className="w-full">
            <p className="font-[500]">$Vottcoin you get:</p>
            <div className="mt-[10px] bg-[#39276F] relative w-full h-[40px] rounded-[1000px] flex items-center justify-between px-[20px]">
              <p className="text-white max-w-[80%] overflow-hidden">
                {inputAmount != ""
                  ? (parseFloat(inputAmount) / rate).toFixed(2)
                  : "0"}
              </p>
              {/* <input
                className="w-[80%] bg-[transparent] outline-none border-0 cursor-pointer"
                value={
                  inputAmount != ""
                    ? (parseFloat(inputAmount * USDPrice) / rate).toFixed(2)
                    : "0"
                }
                type="number"
              /> */}
              <img className="h-[90%]" src={trump} alt="Vottcoin" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[40px] w-full">
        <p className="font-[500]">Buy $VOTTCOIN tokens now:</p>
        {connected ? (
          <button onClick={() => handleBuy()} className="mt-[10px] bg-[#39276F] relative w-full h-[40px] rounded-[1000px] flex items-center justify-center px-[20px]">
            <p className="font-MavenPro font-[500]">Buy $VOTTCOIN</p>
          </button>
        ) : (
          <div style={{ display: "flex", justifyContent: 'center', marginTop: '30px' }}>
            <WalletMultiButton />
          </div>
        )}

        {connected && (
          <button
            onClick={() => disconnect()}
            className={`mt-[10px] bg-[red] relative w-full h-[40px] rounded-[1000px] flex items-center justify-center px-[20px]`}
          >
            <p className="font-MavenPro font-[500]">Disconnect Wallet</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Center;
