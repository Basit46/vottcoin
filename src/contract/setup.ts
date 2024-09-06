/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as dotenv from "dotenv";
dotenv.config();

import { PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { updateEnv } from "./utils";

export default async function setup() {
  console.log("1. Setup Accounts");

  const sellerPubkey = new PublicKey(process.env.SELLER_PUBLIC_KEY!);
  const tokenPubkey = new PublicKey(process.env.TOKEN_PUBKEY!);

  console.log("Get Seller Token Account...\n");
  const sellerTokenAccount = getAssociatedTokenAddressSync(tokenPubkey, sellerPubkey);

  process.env.SELLER_TOKEN_ACCOUNT_PUBKEY = sellerTokenAccount.toString();
  updateEnv();
};
