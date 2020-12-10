require('dotenv').config()
const express = require('express')
const cors = require('cors')
const recipeRouter = require('./recipe/recipe-router')

const server = express()
server.use(cors())
server.use(express.json())
server.use('/api/recipe', recipeRouter)


server.get('/', (_, res) => {
    res.status(200).json({ message: 'API ONLINE'})
})

module.exports = server