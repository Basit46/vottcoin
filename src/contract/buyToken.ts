/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as dotenv from "dotenv";
dotenv.config();

import {
  clusterApiUrl,
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { createAccountInfo, checkAccountInitialized } from "./utils";
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { TokenSaleAccountLayoutInterface, TokenSaleAccountLayout } from "./account";
import BN from "bn.js";

type InstructionNumber = 0 | 1 | 2 | 3;

export default async function transaction(buyerPubkey: PublicKey, number_of_tokens: number) {
  console.log("3. Buy Tokens");
  //phase1 (setup Transaction & send Transaction)
  console.log("Setup Buy Transaction");
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const tokenSaleProgramId = new PublicKey(process.env.CUSTOM_PROGRAM_ID!);

  const tokenPubkey = new PublicKey(process.env.TOKEN_PUBKEY!);
  const tokenSaleProgramAccountPubkey = new PublicKey(process.env.TOKEN_SALE_PROGRAM_ACCOUNT_PUBKEY!);
  const instruction: InstructionNumber = 1;

  const tokenSaleProgramAccount = await checkAccountInitialized(connection, tokenSaleProgramAccountPubkey);
  const encodedTokenSaleProgramAccountData = tokenSaleProgramAccount.data;
  const decodedTokenSaleProgramAccountData = TokenSaleAccountLayout.decode(
    encodedTokenSaleProgramAccountData
  ) as TokenSaleAccountLayoutInterface;
  const tokenSaleProgramAccountData = {
    isInitialized: decodedTokenSaleProgramAccountData.isInitialized,
    sellerPubkey: new PublicKey(decodedTokenSaleProgramAccountData.sellerPubkey),
    tempTokenAccountPubkey: new PublicKey(decodedTokenSaleProgramAccountData.tempTokenAccountPubkey),
    swapSolAmount: decodedTokenSaleProgramAccountData.swapSolAmount,
    swapTokenAmount: decodedTokenSaleProgramAccountData.swapTokenAmount,
  };

  const buyerTokenAccount = getAssociatedTokenAddressSync(tokenPubkey, buyerPubkey);

  const PDA = await PublicKey.findProgramAddress([Buffer.from("token_sale")], tokenSaleProgramId);

  const buyTokenIx = new TransactionInstruction({
    programId: tokenSaleProgramId,
    keys: [
      createAccountInfo(buyerPubkey, true, true),
      createAccountInfo(tokenSaleProgramAccountData.sellerPubkey, false, true),
      createAccountInfo(tokenSaleProgramAccountData.tempTokenAccountPubkey, false, true),
      createAccountInfo(tokenSaleProgramAccountPubkey, false, false),
      createAccountInfo(SystemProgram.programId, false, false),
      createAccountInfo(buyerTokenAccount, false, true),
      createAccountInfo(TOKEN_PROGRAM_ID, false, false),
      createAccountInfo(tokenPubkey, false, false),
      createAccountInfo(PDA[0], false, false),
    ],
    data: Buffer.from(Uint8Array.of(instruction, ...new BN(number_of_tokens).toArray("le", 8))),
  });

  const tx = new Transaction().add(buyTokenIx);
  return tx;

  // await connection.sendTransaction(tx, [buyerKeypair], {
  //   skipPreflight: false,
  //   preflightCommitment: "confirmed",
  // });
  //phase1 end
};
