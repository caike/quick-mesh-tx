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
      words: "SEED FRASE HERE".split(" ")
    },
  });
}
