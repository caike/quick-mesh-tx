import { MeshWallet } from "@meshsdk/core";
import { getYaciProvider } from "./get-yaci-provider.js";

export function getWalletForYaci() {
  const blockchainProvider = getYaciProvider();

  return new MeshWallet({
    networkId: 0,
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
    key: {
      type: "mnemonic",
      words: "segment sniff bottom rain stairs invest blade city clip one hill shoulder utility fantasy boss bamboo myth peanut pole clean goddess suspect penalty shoe".split(" ")
    },
  });
}
