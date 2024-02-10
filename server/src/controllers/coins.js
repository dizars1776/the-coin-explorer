import axios from 'axios'

// Get /coins: return all the coins (JSON) with 200
const getAllCoins = async (req, res) => {
  try {
    // Get page and items per page from the request
    const page = parseInt(req.query.page) || 1
    const perPage = parseInt(req.query.perPage) || 10

    const coinsRs = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: perPage,
          page: page,
          sparkline: false,
          price_change_percentage: '24h',
          locale: 'en',
        },
      }
    )
    // Return only the data we care about
    const coins = coinsRs.data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      image: coin.image,
      symbol: coin.symbol,
      price: coin.current_price,
      '24hHigh': coin.high_24h,
      '24hLow': coin.low_24h,
      '24hFluctuationPercentage': coin.price_change_percentage_24h_in_currency,
    }))

    res.status(200).json(coins)
  } catch (error) {
    console.error('Error fetching coin list data: ', error.message)
    const statusCode = error?.response?.status ?? 500

    res.status(statusCode).json({ error: error.message })
  }
}

// Get /coins/:id return a coin (JSON) by Id with 200
const getOneCoinById = async (req, res) => {
  try {
    const id = req.params.id
    const coinRs = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`,
      {
        params: {
          id: id,
          localization: 'false',
          tickers: false,
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      }
    )

    const coinData = coinRs.data
    const priceChangePercentage = {
      '24h': coinData.market_data.price_change_percentage_24h,
      '7d': coinData.market_data.price_change_percentage_7d,
      '14d': coinData.market_data.price_change_percentage_14d,
      '30d': coinData.market_data.price_change_percentage_30d,
      '60d': coinData.market_data.price_change_percentage_60d,
      '200d': coinData.market_data.price_change_percentage_200d,
      '1y': coinData.market_data.price_change_percentage_1y,
    }
    // Return only the data we care about
    const coin = {
      id: coinData.id,
      name: coinData.name,
      image: coinData.image,
      symbol: coinData.symbol,
      description: coinData.description.en,
      price: coinData.market_data.current_price.usd,
      ath: coinData.market_data.ath.usd,
      '24hHigh': coinData.market_data.high_24h.usd,
      '24hLow': coinData.market_data.low_24h.usd,
      priceChangePercentage: priceChangePercentage,
    }

    res.status(200).json(coin)
  } catch (error) {
    console.error('Error fetching coin data by id: ', error.message)
    const statusCode = error?.response?.status ?? 500

    res.status(statusCode).json({ error: error.message })
  }
}

export { getAllCoins, getOneCoinById }
