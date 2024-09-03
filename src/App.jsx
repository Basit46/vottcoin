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
import Widget from "../public/my-widget.es";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="widget max-w-[3000px] mx-auto w-full h-fit overflow-hidden">
      <Navbar open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <Hero />
      <div className="widget-wrap xl:hidden my-[50px] w-[90%] sm:w-fit mx-auto">
        <Widget />
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
  );
}

export default App;
