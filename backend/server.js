const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const express = require('express')


const port = process.env.PORT || 5002

const app = express()

// connectDB()

app.use('/newsletters', require('./routes/newsletterRoutes'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))