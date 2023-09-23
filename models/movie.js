const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    poster: {
        type: String,
        default: 'https://coltchronicle.org/wp-content/uploads/2022/03/movies-for-newspaper.jpeg'
    },
    year:{
        type: String,
        required: true
    },
    director:{
        type: String,
        requried: true,
    },
    genre: {
        type: String,
        required: true
    }
})

movieSchema.pre('save', function(next) {
    if (!this.poster) {
        this.poster = 'https://coltchronicle.org/wp-content/uploads/2022/03/movies-for-newspaper.jpeg'
    }
    next()
})

module.exports = mongoose.model('Movie', movieSchema)