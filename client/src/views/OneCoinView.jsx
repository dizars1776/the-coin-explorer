import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { oneCoinQuery } from '../helpers/queries'
import Loading from '../components/Loading'
import { Coin } from '../components/Coins'

const OneCoinView = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data: coin, isLoading, isError, error } = useQuery(oneCoinQuery(id))

    if (isLoading) return <Loading />

    if (isError) {
        console.warn('Error on Coin query data')
        navigate('/', { replace: true });
        return null
    }

    return (
        <Coin coin={coin} />
    )
}

export default OneCoinView
