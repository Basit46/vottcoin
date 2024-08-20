import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import HowToBuy from "./components/HowToBuy";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <HowToBuy />
    </div>
  );
}

export default App;
