import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Coffee from "./models/coffeeModel.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json())

app.post("/api/coffee",async (req, res) => {
    const coffee = req.body;
    if (!coffee.name || !coffee.price || !coffee.image) {
        return res.status(400).json({message : "please provide all fields"})
    }

    const newCoffee = new Coffee(coffee)
    try {
        await newCoffee.save()
        res.status(200).json({message : "product added successfully"})
    } catch (error) {
        res.status(500).json({message : "server error"})
    }
});

app.listen(PORT, () => {
  connectDb();
  console.log(`server is running at port ${PORT}`);
});
