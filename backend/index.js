if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
}

const express = require('express')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors');
const path = require('path');

const port = 3001

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('//newsletters', require('./routes/newsletterRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

module.exports = app