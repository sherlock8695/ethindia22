import 'dotenv/config'
import { createAlchemyWeb3 } from "@alch/alchemy-web3"

import contractABI from '../abi/simple_contract_polygon_abi.json'

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
export const web3 = createAlchemyWeb3(alchemyKey)

export const simpleContract = new web3.eth.Contract(
    contractABI,
    contractAddress
)


