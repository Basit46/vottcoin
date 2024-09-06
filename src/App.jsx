import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import HowToBuy from "./components/HowToBuy";
import FAQs from "./components/FAQs";
import Listing from "./components/Listing";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import WalletWidget from "./widget/WalletWidget";
import SolanaWallet from "./solana/wallet"

function App() {
  const [open, setOpen] = useState(false);

  return (
    <SolanaWallet>
    <div className="widget max-w-[3000px] mx-auto w-full h-fit overflow-hidden">
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <Hero />
      <div className="widget-wrap xl:hidden my-[50px] w-[90%] sm:w-fit mx-auto">
        <WalletWidget />
      </div>
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <FAQs />
      <Listing />

      <Footer />
    </div>
    </SolanaWallet>
  );
}

export default App;
