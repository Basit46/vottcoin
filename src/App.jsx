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

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-[3000px] mx-auto w-full h-fit overflow-hidden">
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <Hero />
      <iframe
        className="xl:hidden w-[90%] sm:w-[500px] h-[1480px] vsm:h-[1400px] sm:h-[1110px] mx-auto my-[30px]"
        src="https://vottcoin-widget.vercel.app/"
        frameborder="0"
      ></iframe>
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <FAQs />
      <Listing />

      <Footer />
    </div>
  );
}

export default App;
