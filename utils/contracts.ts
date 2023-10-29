import soakmontAbi from "./abi/soakmontToken.json";
import soakmontStakingContractAbi from "./abi/soakmontStakingContract.json";
import WyrdNFTAbi from "./abi/WyrdNFT.json";
import MapsNFTAbi from "./abi/MapsNFT.json";

export type SmartContractDefinition = {
  address: string;
  abi: any[];
  name: string;
  ticker: string;
  chainId: number;
};

export interface TokenSmartContractDefinition extends SmartContractDefinition {
  decimals: number;
}

export const soakmontTokenContract: TokenSmartContractDefinition = {
  address: "0x1b2fdb1626285b94782af2fda8e270e95cebc3b4",
  abi: soakmontAbi.abi,
  decimals: 18,
  name: "Soakmont V2",
  ticker: "SKMT",
  chainId: 56,
};

export const soakmontStakingContract: SmartContractDefinition = {
  address: "0xF5Da615989DadbD552E3479d79e8e7f34EcA9832",
  abi: soakmontStakingContractAbi.abi,
  name: "SKMT Staking",
  ticker: "StakedSKMT",
  chainId: 56,
};

export const wyrdSmartContract: SmartContractDefinition = {
  address: "0xf3e3e835a262353ec96c32c933133ec320bb3c98",
  abi: WyrdNFTAbi.abi,
  name: "The WYRD",
  ticker: "WYRD",
  chainId: 1,
};

export const mapsSmartContract: SmartContractDefinition = {
  address: "0x6da5ebe96eafd16cdfc72df3c910740a0e94d184",
  abi: MapsNFTAbi.abi,
  name: "Club 101 Member Access Pass",
  ticker: "MAPS",
  chainId: 1,
};

export const eggzSmartContract: SmartContractDefinition = {
  address: "0xf3e3e835a262353ec96c32c933133ec320bb3c98",
  abi: WyrdNFTAbi.abi,
  name: "The WYRD",
  ticker: "WYRD",
  chainId: 1,
};
