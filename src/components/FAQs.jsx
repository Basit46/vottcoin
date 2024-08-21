import React, { useState } from "react";
import { IoIosArrowDown as Arrow } from "react-icons/io";

const FAQs = () => {
  const [open, setOpen] = useState("");

  return (
    <div className="mt-[100px] pb-[50px]">
      <div className="w-[80%] md:w-[60%] mx-auto">
        <h1 className="text-[60px] font-Rajdhani font-bold">FAQs</h1>
        <p className="text-[#FFFFFF66] text-[20px] font-Poppins">
          General Questions:
        </p>

        <div className="mt-[30px] w-full flex flex-col gap-[20px]">
          <Question
            id="1"
            question="What is VottCoin?"
            open={open}
            setOpen={setOpen}
          />
          <Question
            id="2"
            question="How 		can I participate?"
            open={open}
            setOpen={setOpen}
          />
          <Question
            id="3"
            question="How 		can I buy VottCoin tokens?"
            open={open}
            setOpen={setOpen}
          />
          <Question
            id="4"
            question="What 		are the benefits of holding VottCoin tokens?"
            open={open}
            setOpen={setOpen}
          />
          <Question
            id="5"
            question="How 		do I collect votes?"
            open={open}
            setOpen={setOpen}
          />
          <Question
            id="6"
            question="Is 	VottCoin safe to use?"
            open={open}
            setOpen={setOpen}
          />
          <Question
            id="7"
            question="What 		are Election Seasons?"
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

const Question = ({ id, question, open, setOpen }) => {
  return (
    <div className="w-full pb-[10px] border-b border-[#FFFFFF1A]">
      <div
        onClick={() => setOpen(open == id ? "" : id)}
        className="pb-[10px] flex justify-between items-center cursor-pointer"
      >
        <p className="text-[20px] md:text-[30px] font-Rajdhani font-[600]">
          {question}
        </p>
        <Arrow className={`${open == id && "rotate-[180deg]"} text-[20px]`} />
      </div>
      <div className={`${open == id ? "h-auto" : "h-0"} overflow-hidden`}>
        <p>{answers[parseFloat(id) - 1]}</p>
      </div>
    </div>
  );
};

const answers = [
  "VottCoin is a meme-based election game on Telegram where players tap to gather votes, boost their campaigns, and compete in election seasons for rewards.",
  "Simply connect your wallet, buy VottCoin tokens, and start playing. You can earn rewards by participating in the game and inviting friends.",
  "You can purchase tokens during our presale or from supported exchanges after listing. Visit the 'How to Buy' page for detailed instructions.",
  "Token holders can participate in the game, stake tokens for rewards, and gain access to exclusive NFTs and events.",
  "Tap the screen in the game to collect votes. Boost your campaign to increase your passive influence.",
  "Election Seasons are special events where players compete for top rankings and exclusive rewards.",
  "Yes, VottCoin is built on secure blockchain technology, and we ensure all transactions and game mechanics are transparent and trustworthy.",
];
