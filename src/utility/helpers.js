import Web3 from 'web3'

export const convertFromHexDecimal = (hex) => parseInt(hex, 16) * 0.000000000000000001

export const convertFromWei = (number) => Web3.utils.fromWei(number, 'ether')
export const converToWei = (number) => Web3.utils.toWei(number, 'ether')

export const getShortenedAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`
}