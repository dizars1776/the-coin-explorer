import express from 'express'
import morgan from 'morgan'
import coinsRouter from './src/routes/coins.js'

const app = express()
const port = 9090

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/coins', coinsRouter)

app.listen(port, () => {
    console.log(`The-Coin-Explorer app listening on port http://localhost:${port}`)
})
