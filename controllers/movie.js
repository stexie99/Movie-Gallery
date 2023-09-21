const router = require('express').Router()
const Movie = require('../models/movie')
const movieSeedData = require('../models/movieSeedData.js')

router.get('/data/seed', async (req,res) =>{
    await Movie.insertMany(movieSeedData)
    res.redirect('/movies')
})

router.get('/', async (req, res)=>{
    const movies = await Movie.find()
    res.render('movies/index', {movies})
})

router.post('/', async(req, res) => {
    Movie.create(req.body)
    .then(() => {
      res.redirect('movies')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
  })


  router.get('/new', (req, res) => {
    res.render('movies/new')
  })

module.exports = router