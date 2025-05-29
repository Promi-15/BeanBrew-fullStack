import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Coffee from "./models/coffeeModel.js";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json())


//
app.post("/api/coffee", async (req, res) => {
    console.log(req.body)
    const coffee = req.body;
    if (!coffee.coffeeName || !coffee.price || !coffee.image) {
        return res.status(400).json({message : "please provide all fields"})
    }
    console.log(coffee)
    const newCoffee = new Coffee(coffee)
    try {
        await newCoffee.save()
        res.status(200).json({message : "product added successfully", newCoffee})
    } catch (error) {
        res.status(500).json({message : "server error"})
    }
});


app.get("/api/coffee", async (req, res) => {
    try {
        const coffees = await Coffee.find({})
        res.status(200).json(coffees);
    } catch (error) {
         res.status(500).json({message : "server error"})
    }
})

app.delete("/api/coffee/:id", async (req, res) => {
    const { id } = req.params
    try {
        const coffee = await Coffee.findById(id)
        if (!coffee) {
            res.status(400).json({message : "not found"})
        }
        await Coffee.deleteOne({_id : id})
         res.status(200).json({ success: true, message: "product deleted" });
    } catch (error) {
          res.status(500).json({message : "server error"})
    }
})

app.put("/api/coffee/:id", async(req, res) => {
   
  const { id } = req.params;
  const coffee = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid id" });
  }

  try {
    const updatedCoffee = await Coffee.findByIdAndUpdate(id, coffee, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedCoffee });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }


})



app.listen(PORT, () => {
  connectDb();
  console.log(`server is running at port ${PORT}`);
});
