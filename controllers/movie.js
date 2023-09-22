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

router.get('/new', (req, res) => {
    res.render('movies/new')
})


router.get("/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((movie) => {
        res.render("movies/show", { movie })
      })
      .catch((err) => {
        res.render("error404")
      })
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

module.exports = router