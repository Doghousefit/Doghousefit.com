const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log(`test`)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        mongoose.set('strictQuery', false);
        
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB