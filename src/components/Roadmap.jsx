import React from "react";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="roadmap w-full h-fit mt-[50px] overflow-hidden"
    >
      <div className="main w-[80%] md:w-[45%] mx-auto h-[100px] bg-[#6850FF] grid place-items-center">
        <p className="text-[60px] font-Rajdhani font-bold">Roadmap</p>
      </div>
      <p className="w-[80%] md:w-[70%] mt-[20px] mx-auto text-center text-[28px] font-[500] leading-[36px] font-MavenPro">
        Discover the exciting journey that VottCoin is embarking on. Our roadmap
        outlines key milestones, developments, and events that will take our
        meme-coin election game to the next level.
      </p>

      <div className="mt-[50px] w-full px-[20px] vsm:px-[60px] flex flex-col lg:flex-row gap-[20px] items-center lg:items-start justify-center">
        <div className="w-full md:w-[80%] lg:w-[24%] flex flex-col gap-[20px]">
          <div className="item w-full">
            <div>
              <div className="size-[43px] bg-[#FF9527]" />
              <p>Q3 2024:</p>
            </div>

            <ul>
              <li>
                VottCoin Launch: The game is live! Start collecting votes,
                boosting your campaign, and gathering those airdrops. The game
                is fully operational and ready for users to dive in. Token
                Presale Event First Major Airdrop Campaign Website Launch
              </li>
              <li>Token Presale Event</li>
              <li>First Major Airdrop Campaign</li>
              <li>Website Launch</li>
            </ul>
          </div>
          <div className="hidden lg:block item w-full">
            <div>
              <div className="size-[43px] bg-[#FF5937]" />
              <p>Q3 2025:</p>
            </div>

            <ul>
              <li>
                Launch of the Second Game in Our Ecosystem: Introducing a new
                game that expands on the VottCoin experience, offering even more
                ways to engage and earn.
              </li>
              <li>
                Ongoing Updates and New Content Drops: Regular additions to both
                VottCoin and our new game, ensuring fresh and exciting gameplay
                for all.
              </li>
              <li>
                Community-Driven Content: Involving our players in the
                development process, allowing them to shape the future of the
                VottCoin universe.
              </li>
            </ul>
          </div>
        </div>
        <div className="item w-full md:w-[80%] lg:w-[24%]">
          <div>
            <div className="size-[43px] bg-[#3C2974]" />
            <p>Q4 2024:</p>
          </div>

          <ul>
            <li>
              Alpha Testing for New Game Development: Begin early testing for
              the next game in our ecosystem. Stay tuned for sneak peeks and
              exclusive early access.
            </li>
            <li>Partnerships with Influencers and Communities</li>
            <li>Additional Airdrop Rounds</li>
            <li>Expansion of Game Features (New Boosts, Challenges)</li>
          </ul>
        </div>
        <div className="item w-full md:w-[80%] lg:w-[24%]">
          <div>
            <div className="size-[43px] bg-[#FFF960]" />
            <p>Q1 2025:</p>
          </div>

          <ul>
            <li>
              Launch of Election Seasons in VottCoin: Compete in season-long
              events with massive rewards up for grabs.
            </li>
            <li>
              NFT Collection Drop: <em>Vote Kings & Queens</em> – A special
              collection of election-themed NFTs, offering unique in-game perks
              and bonuses for holders.
            </li>
            <li>
              Special Event: <em>Election Royale</em> – A grand live-streamed
              event where top players battle it out for rare NFTs and tokens,
              along with exciting community contests and giveaways.
            </li>
            <li>
              Continued Development of New Games: Building the next big thing in
              meme-based gaming, with a focus on fun, community, and rewards.
            </li>
          </ul>
        </div>
        <div className="item w-full md:w-[80%] lg:w-[24%]">
          <div>
            <div className="size-[43px] bg-[#6850FF]" />
            <p>Q2 2025:</p>
          </div>

          <ul>
            <li>
              VottCoin Mobile App Launch (iOS & Android): Bringing the election
              madness to your fingertips with a dedicated mobile app.
            </li>
            <li>
              Global Community Events and Tournaments: Online and offline events
              for players to connect, compete, and celebrate their victories.
            </li>
            <li>
              NFT Holder Exclusive Events: Unique gatherings for our NFT
              community, featuring guest speakers, live performances, and
              behind-the-scenes looks at upcoming developments.
            </li>
          </ul>
        </div>
        <div className="lg:hidden item w-full md:w-[80%] lg:w-[24%]">
          <div>
            <div className="size-[43px] bg-[#FF5937]" />
            <p>Q3 2025:</p>
          </div>

          <ul>
            <li>
              Launch of the Second Game in Our Ecosystem: Introducing a new game
              that expands on the VottCoin experience, offering even more ways
              to engage and earn.
            </li>
            <li>
              Ongoing Updates and New Content Drops: Regular additions to both
              VottCoin and our new game, ensuring fresh and exciting gameplay
              for all.
            </li>
            <li>
              Community-Driven Content: Involving our players in the development
              process, allowing them to shape the future of the VottCoin
              universe.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
