import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { allCoinsQuery } from '../helpers/queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { CoinList } from '../components/Coins/'
import Hero from '../components/Hero'

const AllCoinsView = () => {
    const [page, setPage] = useState(1)
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isError,
        isLoading,
    } = useInfiniteQuery(allCoinsQuery(page))

    if (isLoading) return <Loading />

    if (isError) return <Error error={error} />

    return (
        <>
            <div className='flex flex-col lg:flex-row mt-4 lg:mt-9'>
                <Hero />
                <div className="lg:mt-40 lg:order-first flex flex-col my-8 text-white gap-12 sm:gap-8 justify-center sm:items-start sm:mx-4 md:mx-8 ">
                    {data?.pages.map((listGroup, index) => <CoinList key={index} listItems={listGroup} />)}
                </div>
            </div>

            <button
                className='flex items-center justify-center text-white text-xl'
                onClick={() => fetchNextPage()}
            >
                Load more
            </button>
        </>
    )
}

export default AllCoinsView
