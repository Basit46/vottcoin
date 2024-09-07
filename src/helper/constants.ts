import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection } from "@solana/web3.js";

export const network = WalletAdapterNetwork.Devnet;
export const connection = new Connection(clusterApiUrl(network), "confirmed");
export const host = 'http://localhost:5000';