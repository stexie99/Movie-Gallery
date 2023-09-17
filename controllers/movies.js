const express = require('express')
const movies = express.Router()
const Movie = require('../models/movies.js')

// index
movies.get('/', (req, res) => {
    res.send(Movie)
})

// show
movies.get('/:id', (req, res) => {
    res.send(Movie[req.params.id])
})

module.exports = movies