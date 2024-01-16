import mongoose from "mongoose";

// Declare the Schema of the Mongo model
let ReservationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    trainName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Train",
      required: true,
    },
    seatClass: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainClass",
      required: true,
    },
    // seat: {
    //   type: Number,
    //   required: true,
    // },
    passengers: {
      type: Number,
      required: true,
    }
    // price: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

//Export the model
const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;
