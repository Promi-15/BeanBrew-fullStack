import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./config/db.js"

dotenv.config()
const PORT = process.env.PORT

const app = express()



app.get("/coffeeLists", (req, res) => {
    
})
app.listen(PORT, () => {
   connectDb()
    console.log(`server is running at port ${PORT}`)
})

