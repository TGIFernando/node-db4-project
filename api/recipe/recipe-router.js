const express = require('express')
const M = require('./recipe-model')
const router = express.Router()

router.get('/', async (_, res) => {
    try {
        const data = await M.get()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router