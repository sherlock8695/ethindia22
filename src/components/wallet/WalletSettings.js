import React from 'react'

import { useMetamask } from '../../hooks/useMetamask'
import { getShortenedAddress } from '../../utility/helpers'
import { DisplayBox } from './DisplayBox'

export const WalletSettings = () => {
    const [
        connectWallet,
        disconnectWallet,
        selectedAccount,
        accountBalance,
        error,
        loading
    ] = useMetamask()

    if (error) {
        return (
            <DisplayBox text={error} />
        )
    }

    return (
        <>
            {accountBalance !== null && <DisplayBox text={accountBalance.toFixed(5)} />}
            {selectedAccount && <DisplayBox text={getShortenedAddress(selectedAccount)} />}
            <DisplayBox
                loading={loading}
                onClick={selectedAccount ? disconnectWallet : connectWallet}
                text={`${selectedAccount ? 'Disconnect' : 'Connect'}`}
            />
        </>
    )
}