import mongoose from "mongoose";

// Declare the Schema of the Mongo model
let trainClassSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    seat: {
      type: Number,
    },
  },
  { timestamps: true }
);

//Export the model
const TrainClass = mongoose.model("TrainClass", trainClassSchema);

export default TrainClass;