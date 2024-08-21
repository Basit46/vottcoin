import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import img from "../assets/featuresImg.png";

const Features = () => {
  return (
    <div
      id="features"
      className="features w-full h-fit mt-[50px] overflow-hidden"
    >
      <h1 className="text-center text-[60px] font-Rajdhani font-[700]">
        Features
      </h1>

      <div className="relative mt-[30px] w-[85%] mx-auto flex flex-col xmd:flex-row justify-between">
        <div className="w-full xmd:w-[48%] xl:w-[42%] flex flex-col gap-[20px]">
          <div className="feature relative z-[3] xl:z-0 w-full">
            <img className="w-[64px]" src={icon1} alt="feature" />
            <div>
              <p className="text1">Tap to Vote</p>
              <p className="text2">
                Tap your way to election victory! Every tap gathers votes that
                push your campaign forward.
              </p>
            </div>
          </div>
          <div className="feature relative z-[3] xl:z-0 w-full xl:w-[90%]">
            <img className="w-[64px]" src={icon2} alt="feature" />
            <div>
              <p className="text1">Boost Your Campaign</p>
              <p className="text2">
                Enhance your influence with powerful boosts to maximize your
                passive votes.
              </p>
            </div>
          </div>
          <div className="feature relative z-[3] xl:z-0 w-full h-[166px]">
            <div className="w-[64px] relative shrink-0">
              <img className="w-[64px]" src={icon1} alt="feature" />
              <img
                className="w-[40px] absolute bottom-[-15px] right-[-10px]"
                src={icon5}
                alt="feature"
              />
            </div>
            <div>
              <p className="text1">Votes Per Hour</p>
              <p className="text2">
                Keep your campaign alive even when you're offline. Gather votes
                for up to 3 hours before jumping back in.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full xmd:w-[48%] xl:w-[42%] flex flex-col items-end gap-[20px]">
          <div className="feature relative z-[3] xl:z-0 w-full">
            <img className="w-[64px]" src={icon3} alt="feature" />
            <div>
              <p className="text1">Invite Friends:</p>
              <p className="text2">
                Team up with friends to earn bonuses and rewards. Helping a
                friend win is a win for you too!
              </p>
            </div>
          </div>
          <div className="feature relative z-[3] xl:z-0 w-full xl:w-[90%]">
            <img className="w-[64px]" src={icon4} alt="feature" />
            <div>
              <p className="text1">Level Up</p>
              <p className="text2">
                More votes = more power. Level up your campaign to dominate the
                election field.
              </p>
            </div>
          </div>
          <div className="feature relative z-[3] xl:z-0 w-full h-[166px]">
            <img className="w-[64px]" src={icon1} alt="feature" />
            <div>
              <p className="text1">Election Season</p>
              <p className="text2">
                The excitement peaks at the end of every season with a grand
                election and big rewards. Stay tuned to our announcement channel
                for details
              </p>
            </div>
          </div>
        </div>

        <img
          className="hidden xmd:block absolute left-1/2 -translate-x-1/2"
          src={img}
          alt="Vottcoin"
        />
      </div>
    </div>
  );
};

export default Features;
