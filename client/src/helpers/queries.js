import { getAllCoins, getOneCoinById } from '../api/axios'

const allCoinsQuery = (page) => {
    return {
        queryKey: ['allCoins', page],
        queryFn: () => getAllCoins(page),
        keepPreviousData: true,
        staleTime: 1000 * 60 * 30,
    }
}

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
