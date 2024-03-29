import axios from 'axios'

const axiosOne = axios.create({
    baseURL: '/api',
})

// Returns a list of coins, in desc order by market cap
const getAllCoins = async (pageParam) => {
    try {
        const res = await axiosOne.get('/coins/markets', {
            params: {
                page: pageParam,
                perPage: 20,
            },
        })
        return res.data
    } catch (error) {
        console.error(error)
        throw new Error('Seems like we have some difficulties right now, chill and try again later.')
    }
}

// Returns the data of a single coin by id:string
const getOneCoinById = async (id) => {
    try {
        const res = await axiosOne.get(`/coins/${id}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}

export { getAllCoins, getOneCoinById }
