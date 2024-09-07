import React, { useState } from 'react'
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Features from "./Features";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import HowToBuy from "./HowToBuy";
import FAQs from "./FAQs";
import Listing from "./Listing";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import WalletWidget from "../widget/WalletWidget";

const Main = () => {
    const [open, setOpen] = useState(false);
    return (
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
        </div >
    )
}

export default Main