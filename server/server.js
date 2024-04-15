import express from "express"
import cors from "cors"
import router from "./routes/router.js"
import connectDB from "./controllers/conn.js"
import 'dotenv/config'
import fileUpload from "express-fileupload"

const app = express()
connectDB()

app.use(express.json())
app.use(cors())
app.use(fileUpload());

app.use("/",router)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})