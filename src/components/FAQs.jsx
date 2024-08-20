import React, { useState } from "react";
import { IoIosArrowDown as Arrow } from "react-icons/io";

const FAQs = () => {
  const [open, setOpen] = useState("");

  return (
    <div className="mt-[100px] pb-[50px]">
      <div className="w-[60%] mx-auto">
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

const Question = ({ id, question, answer, open, setOpen }) => {
  return (
    <div className="w-full pb-[10px] border-b border-[#FFFFFF1A]">
      <div
        onClick={() => setOpen(open == id ? "" : id)}
        className="pb-[10px] flex justify-between items-center cursor-pointer"
      >
        <p className="text-[30px] font-Rajdhani font-[600]">{question}</p>
        <Arrow className="text-[20px]" />
      </div>
      <div className={`${open == id ? "h-auto" : "h-0"} overflow-hidden`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          commodi, animi aspernatur iusto beatae est, alias maxime tenetur
          accusamus numquam aliquam ad. Earum ab dignissimos quas quam ipsum ad
          accusamus.
        </p>
      </div>
    </div>
  );
};
