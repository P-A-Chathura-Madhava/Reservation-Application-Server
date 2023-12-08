import { Timestamp } from "mongodb";
import mongoose from "mongoose";

// Declare the Schema of the Mongo model
let trainSchema = new mongoose.Schema(
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
    class: [{ type: mongoose.Schema.Types.ObjectId, ref: "TrainClass" }],
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
