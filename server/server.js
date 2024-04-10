const express = require('express')
const app = express()
require("dotenv").config()
require("./controllers/conn").connectDB()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})