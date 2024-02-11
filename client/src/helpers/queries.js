import { getAllCoins, getOneCoinById } from '../api/axios'

const allCoinsQuery = () => ({
    queryKey: ['allCoins'],
    queryFn: ({ pageParam }) => getAllCoins(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.length ? allPages.length + 1 : undefined
        return nextPage
    },
    staleTime: 1000 * 60 * 30,
})

const allCoinsLoader = (queryClient) => async ({ params }) => {
    const query = allCoinsQuery(params.page)
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    )
}

const oneCoinQuery = (id) => {
    return {
        queryKey: ['oneCoin', id],
        queryFn: () => getOneCoinById(id),
        staleTime: 1000 * 60 * 30,
    }
}

const oneCoinLoader = (queryClient) => async ({ params }) => {
    const query = oneCoinQuery(params.id)
    return (
        queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
    )
}

export { allCoinsQuery, allCoinsLoader, oneCoinLoader, oneCoinQuery }
