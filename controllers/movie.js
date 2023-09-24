const router = require("express").Router()
const Movie = require("../models/movie")
const movieSeedData = require("../models/movieSeedData.js")

//data seeding
router.get("/data/seed", async (req, res) => {
  await Movie.insertMany(movieSeedData)
  res.redirect("/movies")
})
//get index page
router.get("/", async (req, res) => {
  const movies = await Movie.find()
  res.render("movies/index", { movies })
})
// create new movie
router.post("/", async (req, res) => {
  await Movie.create(req.body)
    .then(() => {
      res.redirect("movies")
    })
    .catch((err) => {
      res.render("error404")
    })
})
//get new page
router.get("/new", (req, res) => {
  res.render("movies/new")
})
//get movie by index
router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/show", { movie })
    })
    .catch((err) => {
      res.render("error404")
    })
})
//get edit page
router.get("/:id/edit", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/edit", { movie })
    })
    .catch((err) => {
      res.render("error404")
    })
})
//edit movie 
router.put("/:id", (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/movies/${req.params.id}`)
    })
    .catch((err) => {
      console.log("err", err)
      res.render("error404")
    })
})
//delete movie by index
router.delete("/:id", (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log("err", err)
      res.render("error404")
    })
})

module.exports = router