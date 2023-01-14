// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config({path: __dirname+'/.env'});
// }

const express = require('express')
// const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors');
// const path = require('path');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
import newsletterRoutes from './routes/newsletterRoutes';
const port = 3001

const app = express()

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        mongoose.set('strictQuery', false);
        
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({message: 'connected to api'})
})
// app.use('/newsletters', require('./routes/newsletterRoutes'))
app.use('/newsletters', newsletterRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})

// module.exports = app