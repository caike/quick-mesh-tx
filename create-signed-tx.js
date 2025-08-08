import { Transaction } from "@meshsdk/core";
import { getWalletForYaci } from "./get-wallet-yaci.js";

const wallet = getWalletForYaci();

const recipient = "<DESTINATION_ADDRES";

const tx = new Transaction({ initiator: wallet }).sendLovelace(
    recipient,
    "25000000"
);
const unsignedTx = await tx.build();
const signedTx = await wallet.signTx(unsignedTx);
console.log({ signedTx });