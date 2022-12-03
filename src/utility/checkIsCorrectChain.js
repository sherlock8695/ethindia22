import 'dotenv/config'

const appChainId = process.env.REACT_APP_CHAIN_ID;
export const checkIsCorrectChain = (chainId) => chainId.toString() === appChainId.toString()