import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema(
  {
    coffeeName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Coffee = mongoose.model("Coffee", coffeeSchema);
export default Coffee;
