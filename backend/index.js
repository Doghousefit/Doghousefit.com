const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

app.get("/", (req, res) => {
  res.json({message: "Express on Vercel"});
});
app.get("/api", (req, res) => {
    res.json({message: "API on Vercel"});
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/newsletters', require('./routes/newsletterRoutes'))
// app.listen(5000, () => {
//   console.log("Running on port 5000.");
// });

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Mongodb connected");
    // console.log(process.env);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  }).catch((err) => {
    console.log({ err });
    process.exit(1);
  });

// Export the Express API
module.exports = app;