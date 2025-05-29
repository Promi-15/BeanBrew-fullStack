import express from "express"
import { createCoffee, deleteCoffee, getCoffee, updateCoffee } from "../controller/coffeeController.js";

const router = express.Router()

router.post("/",createCoffee);

router.get("/",getCoffee);

router.delete("/:id",deleteCoffee);

router.put("/:id",updateCoffee);

export default router;