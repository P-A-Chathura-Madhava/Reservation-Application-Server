import asyncHandler from "express-async-handler";
import Customer from '../models/customerModel.js';
import generateToken from "../utils/generateToken.js";

const registerCustomer = asyncHandler(async (req, res) => {
    const {name, email, mobile, password} = req.body;

    const customerExists = await Customer.findOne({email});
    if (customerExists) {
        throw new Error("User Already Exists");
        res.status(400);
    } else {
        const customer = await Customer.create({
            name,
            email,
            mobile,
            password
        });

        if (customer) {
            generateToken(res, customer._id)
            res.status(201).json({ 
                _id: customer._id,
                name: customer._name,
                email: customer.email,
                mobile: customer.mobile
             });            
        }else {
            res.status(400);
            throw new Error("Invalid Customer Data")
        }
    }
});

const loginCustomer = asyncHandler (async(req, res) => {
    const { email, password } = req.body;
    
    const customer = await Customer.findOne({ email });
    
    if (customer && (await customer.matchPassword(password))) {
        generateToken(res, customer._id); 
        res.json({
        _id: customer._id,
        name: customer.name,
        email: customer.email,
      });
    } else {
        res.status(401).json("Invalid email or password");
    }
});

const logoutCustomer = (req, res) => {
  res.status(200).json({ message: "logout Customer" });
};

const getCustomerProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Customer Profile" });
});

const updateCustomerProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Customer Profile" });
});

export {
  loginCustomer,
  registerCustomer,
  logoutCustomer,
  getCustomerProfile,
  updateCustomerProfile,
};
