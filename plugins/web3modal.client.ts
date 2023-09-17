import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import {
  configureChains,
  createConfig,
  watchNetwork,
  getNetwork,
  watchAccount,
  getAccount,
} from "@wagmi/core";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { publicProvider } from "@wagmi/core/providers/public";
import { mainnet, bsc, avalanche } from "@wagmi/core/chains";
import logo from "/images/c101/logo/logo.png";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const chains = [mainnet, bsc, avalanche];
  const projectId = config.public.walletConnectProjectId;

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
    alchemyProvider({ apiKey: config.public.alchemyApiKey }),
    publicProvider(),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ chains, projectId }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  const web3modal = new Web3Modal(
    {
      projectId,
      themeMode: "dark",
      themeVariables: {
        // @ts-ignore
        "--w3m-accent-color": "#ffc123",
        "--w3m-logo-image-url": logo,
        "--w3m-background-color": "#020202",
      },
      defaultChain: mainnet,
    },
    ethereumClient
  );

  return {
    provide: {
      web3modal,
      ethereumClient,
      publicClient,
      watchNetwork,
      getNetwork,
      watchAccount,
      getAccount,
    },
  };
});
