const express = require('express')
const mongoose = require('mongoose')
require ('dotenv').config()

const app = express()

// middleware
app.set('view engine', 'jsx')
app.set('views', __dirname + '/views')

// routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))