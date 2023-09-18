const router = require('express').Router()
const Movie = require('../models/movie')
const movieSeedData = require('../models/movieSeedData.js')

router.get('/data/seed', async (req,res) =>{
    await Movie.insertMany(movieSeedData)
    res.redirect('/movies')
})

router.get('/', async(req, res)=>{
    const movies = await Movie.find()
    // res.render()
})

module.exports = router