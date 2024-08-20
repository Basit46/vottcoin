import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
