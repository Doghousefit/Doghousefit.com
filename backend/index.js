const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require("cors");

const port = process.env.PORT || 3001

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/newsletters', require('./routes/newsletterRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
    // console.log(process.env)
})