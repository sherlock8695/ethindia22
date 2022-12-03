import { useEffect, useState } from 'react'

import { simpleContract } from '../utility/contract'

export const useCost = () => {
    const [cost, setCost] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCost()
    }, [])

    const getCost = async () => {
        try {
            setLoading(true)
            const cost = await simpleContract.methods.cost().call()
            setCost(cost)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError('Error when getting the cost')
        }
    }

    return [cost, getCost, loading, error]
}