import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { allCoinsQuery } from '../helpers/queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { CoinList } from '../components/Coins/'

const AllCoinsView = () => {
    const [page, setPage] = useState(1)
    const { data: coinListData, isLoading, isError, error } = useQuery(allCoinsQuery(page))

    if (isLoading) return <Loading />

    if (isError) return <Error error={error} />

    return (
        <div className="flex flex-col gap-12 sm:gap-8 justify-center sm:items-start sm:my-8 sm:ml-4 md:ml-8 ">
            {coinListData && <CoinList listItems={coinListData} />}
        </div>
    )
}

export default AllCoinsView
