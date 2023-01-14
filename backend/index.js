const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/newsletters', require('./routes/newsletterRoutes'))

connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${port}`);
});
