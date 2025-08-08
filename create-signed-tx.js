import { Transaction } from "@meshsdk/core";
import { getWalletForYaci } from "./get-wallet-yaci.js";

const wallet = getWalletForYaci();

const recipient = "addr_test1qqwfnk46j2gj09eelngq06ur34jvz33s5nus8y7a8j3v7w8dmz7rt32cqdk3jh6p39p6520qsnhl90lk5709q5xv8f4sfpnmvf";

const tx = new Transaction({ initiator: wallet }).sendLovelace(
    recipient,
    "25000000"
);
const unsignedTx = await tx.build();
const signedTx = await wallet.signTx(unsignedTx);
console.log({ signedTx });