import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { convertFromHexDecimal } from '../utility/helpers'
import { checkIsCorrectChain } from '../utility/checkIsCorrectChain'

export const useMetamask = () => {
    const [selectedAccount, setSelectedAccount] = useState(null)
    const [accountBalance, setAccountBalance] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('connect', connectWallet)
            window.ethereum.on('disconnect', disconnectWallet)
            window.ethereum.on('accountsChanged', () => window.location.reload())
            window.ethereum.on('chainChanged', () => window.location.reload())
        }
        // eslint-disable-next-line
    }, [])

    const connectWallet = async () => {
        try {
            if (!window.ethereum) throw new Error("No crypto wallet found")
            setLoading(true)
            // Get the hexChainId
            const hexChainId = await window.ethereum.request({ method: 'eth_chainId' })

            // Convert that into the chainId as number
            const chainId = Web3.utils.hexToNumber(hexChainId)

            // Check for whether we are on the correct network
            if (!checkIsCorrectChain(chainId)) throw new Error('Wrong Network')

            // Finally, request the account
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(response => {
                    accountChangedHandler(response[0])
                    setLoading(false)
                })
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const disconnectWallet = () => {
        setSelectedAccount(null)
        setAccountBalance(null)
    }

    const accountChangedHandler = (newAccount) => {
        setSelectedAccount(newAccount)
        setBalance(newAccount)
    }


    const setBalance = (address) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] })
            .then(response => {
                setAccountBalance(convertFromHexDecimal(response))
            })
    }

    return [
        connectWallet,
        disconnectWallet,
        selectedAccount,
        accountBalance,
        error,
        loading
    ]
}