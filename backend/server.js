if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
  }
//   const dotenv = require('dotenv').config()

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

// app.use('/api/newsletters', require('./routes/newsletterRoutes'))
app.use('/newsletters', require(path.join(__dirname, 'routes', 'newsletterRoutes.js')));


app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
    // console.log(process.env)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })
}