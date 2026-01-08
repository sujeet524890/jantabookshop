import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    oldprice: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
     subject: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", userSchema);
