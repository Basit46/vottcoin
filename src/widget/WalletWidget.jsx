import React from "react";
import Header from "./Header";
import Center from "./Center";
import Footer from "./Footer";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const MyWidget = () => {
  // const config = getDefaultConfig({
  //   appName: "Vottcoin",
  //   projectId: "25ff46633bbcfc8c30ace0eff01aa1d8",
  //   chains: [mainnet, polygon, optimism, arbitrum, base],
  // });

  // const queryClient = new QueryClient();

  return (
    <div className="widget max-w-[510px] mx-auto font-MavenPro bg-[#0d0914] rounded-[50px] border border-[#FFC227] text-white pt-[40px] pb-[80px] px-[20px] vsm:px-[30px]">
      <Header />
      <Center />
      <Footer />
    </div>
  );
};

export default MyWidget;
