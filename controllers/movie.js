const router = require('express').Router()
const Movie = require('../models/movie')
const movieSeedData = require('../models/movieSeedData.js')

router.get('/data/seed', async (req,res) =>{
    await Movie.insertMany(movieSeedData)
    res.redirect('/movies')
})

router.get('/', async(req, res)=>{
    const movies = await Movie.find()
    res.send(movies)
})

router.get('/:name', async (req, res) => {
    try {
      const { name } = req.params
      // Create a regex pattern that matches the provided 'name' with case and space insensitivity
      const regexPattern = new RegExp(`^${name.replace(/\s+/g, '\\s*')}$`, 'i')
      
      const movie = await Movie.findOne({ title: { $regex: regexPattern } })
      //creates search using $regex pattern
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' })
        }  
      res.status(200).json(movie)
    } catch (err) {
      res.status(500).json(err)
    }
})

router.post('/', async(req, res) =>{
  await Movie.create(req.body)
  console.log(req.body)
  res.send("hello")
})

router.put('/:name', async(req,res)=>{
  const { name } = req.params
  try{
    const updatedMovie = await Movie.findOneAndUpdate({ title: name }, req.body)
    if(!updatedMovie){
      return res.status(404).json({ error:'movie not found' })
    }
    res.status(200).json(updatedMovie)
  }catch(err){
    res.status(500).json(err)
  }
  console.log('hello')
})

router.delete('/:name', async (req, res) => {
  const { name } = req.params
  try {
    const deletedMovie = await Movie.findOneAndDelete({ title: name })
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' })
    }
    res.status(200).json({ message: 'Movie deleted successfully' })
  } catch (err) {
    console.error('Error:', err)
    res.status(500).json(err)
  }
})

module.exports = router