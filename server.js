require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// const moviesController = require('./controllers/movie')
const app = express()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.set('views', __dirname + '/views')

// routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('Error404')
})

// controllers
const moviesController = require('./controllers/movie')
app.use('/movies', moviesController)
// app.use(express.urlencoded({ extended: true }))


// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))