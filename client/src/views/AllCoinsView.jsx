import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { allCoinsQuery } from '../helpers/queries'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { CoinList } from '../components/Coins/'
import Hero from '../components/Hero'
import LoadMore from '../components/LoadMore'

const AllCoinsView = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError,
        isLoading,
    } = useInfiniteQuery(allCoinsQuery())

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
            <LoadMore
                fetchMoreHandler={fetchNextPage}
                isFetchingNext={isFetchingNextPage}
                hasNext={hasNextPage}
            />
        </>
    )
}

export default AllCoinsView
