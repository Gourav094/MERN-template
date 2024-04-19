const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(url)
.then(() => console.log('database connected'))

app.use(express.json())


app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})