import { Timestamp } from "mongodb";
import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var trainSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    class: [{
      type: String,
      enum: ["A", "B", "C", "E"],
    }],
    seat: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

//Export the model
const Train = mongoose.model("Train", trainSchema);

export default Train;
