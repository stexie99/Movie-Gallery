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

router.get("/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((movie) => {
        res.render("movies/show", { movie })
      })
      .catch((err) => {
        res.render("error404")
      })
  })

router.post('/', async(req, res) =>{
    console.log(req.body)
    res.send("hello")
})

module.exports = router