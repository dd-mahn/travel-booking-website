import express from 'express'
import { postSubscribe } from '../controllers/subscribeController.js'

const router = express.Router()

router.post('/', postSubscribe )

export default router