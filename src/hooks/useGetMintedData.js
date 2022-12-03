import { useEffect, useState } from 'react'

import { simpleContract } from '../utility/contract'

export const useGetMintedData = () => {
    const [maxSupply, setMaxSupply] = useState(null)
    const [totalSupply, setTotalSupply] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getMintedData()
    }, [])

    const getMintedData = async () => {
        try {
            setLoading(true)
            const maxSupply = await simpleContract.methods.maxSupply().call()
            const totalSupply = await simpleContract.methods.totalSupply().call()
            setMaxSupply(maxSupply)
            setTotalSupply(totalSupply)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError('There was an error getting the data')
        }
    }

    const getValue = () => {
        if (error) return error
        return maxSupply !== null && totalSupply !== null ? `${totalSupply} / ${maxSupply}` : ''
    }

    return [
        getValue(),
        getMintedData,
        loading
    ]
}