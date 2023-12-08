import mongoose from "mongoose";

// Declare the Schema of the Mongo model
let trainClassSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("TrainClass", trainClassSchema);
