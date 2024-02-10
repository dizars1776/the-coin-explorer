import express from 'express'
import { getAllCoins, getOneCoinById } from '../controllers/coins.js'

const router = express.Router()

router.get('/markets', getAllCoins)
router.get('/:id', getOneCoinById)

export default router
