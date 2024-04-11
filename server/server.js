import express from "express"
import cors from "cors"
const app = express()
import 'dotenv/config'
import router from "./routes/router.js"
// import connectDB from "./controllers/conn.js"
// connectDB()

app.use(express.json())
app.use(cors())
app.use("/",router)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})