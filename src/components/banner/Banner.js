import React, { useState } from 'react'

import Web3 from 'web3'
import { toast } from 'react-toastify'
import 'dotenv/config'

import { Info } from '../info/Info'
import { Button } from '../button/Button'
import { Settings } from './Settings'
import { simpleContract } from '../../utility/contract'
import { useCost } from '../../hooks/useCost'
import styles from './Banner.module.scss'

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS

// TODO Have a flag set to disable the button while attempting to mint
const useMint = () => {
    const [cost] = useCost()

    const mint = async (amount) => {

        // TODO Do a check if we are the owner of this token
        const mintPromise = async () => {
            const transactionParameters = {
                to: contractAddress,
                from: window.ethereum.selectedAddress,
                data: simpleContract.methods.mint(amount).encodeABI(),
                value: Web3.utils.toHex(cost * amount),
            }
            //sign the transaction via Metamask
            try {
                // Could grab txtHash from this
                await window.ethereum
                    .request({
                        method: 'eth_sendTransaction',
                        params: [transactionParameters],
                    })
                // TODO - wait for contract to complete somehow, keeping our toast notification there untill it is finished
                // TODO - put some values in the context, so when this completes we fire of an event to update the context
            } catch (error) {
                console.log({ error })
                throw error
            }
        }

        toast.promise(mintPromise, {
            pending: 'Pending the transaction',
            success: 'Success, you should receive your mint shortly',
            error: 'Whoops, looks like something went wrong.'
        })
    }

    return mint
}

export const Banner = () => {
    const [quantity, setQuantity] = useState(0)
    const mint = useMint()

    return (
        <div className={styles.banner}>
            <Settings />
            <div className="container">
                <div className="row">
                    <div className="col-lg-24">
                        <h1>Journey to 1.02M</h1>
                        {/* TODO Factor into Yup schema */}
                        <div className={styles.inputContainer}>
                            <input
                                type='number'
                                value={quantity}
                                onChange={(event) => setQuantity(event.target.value)}
                                placeholder='Enter Amount'
                            />
                        </div>
                        <Button onClick={() => mint(quantity)} name="Mint" />
                    </div>
                </div>
            </div>
            <Info />
        </div>

    )
}