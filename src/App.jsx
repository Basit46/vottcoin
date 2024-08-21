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
import MobileListing from "./components/MobileListing";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-[1900px] mx-auto w-full h-fit overflow-hidden">
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
      <FAQs />
      <Listing />
      <MobileListing />
      <Footer />
    </div>
  );
}

export default App;
