import { simpleContract, contractAddress } from './contract'

export const mint = async (amount) => {
    const transactionParameters = {
        to: contractAddress, 
        from: window.ethereum.selectedAddress,
        data: simpleContract.methods.mint(amount).encodeABI()
    };

    try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }

    }
}