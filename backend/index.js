import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import router from "./routes/routes.js";


dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json())

app.use("/api/coffee",router)



app.listen(PORT, () => {
  connectDb();
  console.log(`server is running at port ${PORT}`);
});
