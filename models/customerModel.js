import mongoose from "mongoose";
import bcrypt from 'bcrypt';

// Declare the Schema of the Mongo model
let customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

// hashing the password using bcrypt
customerSchema.pre("save", async function(next){
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

//Export the model
const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
