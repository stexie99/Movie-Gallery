const express = require('express')
const movies = express.Router()

// index
movies.get('/', (req, res) => {
    res.send('This is the index at /movies')
})

module.exports = movies