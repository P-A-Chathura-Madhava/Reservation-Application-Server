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
//   res.status(200).json({ message: "logout Customer" });
res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

const getAllCustomerProfiles = asyncHandler(async (req, res) => {
    // res.status(200).json({ message: "Get All Customer Profiles" });
    try {
      const getCustomers = await Customer.find();
      res.json(getCustomers);
    } catch (error) {
      throw new Error(error);
    }
  });

const getCustomerProfile = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Get Customer Profile" });
  const customer = await Customer.findById(req.customer._id);
  
  if (customer) {
    res.json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
    });
  } else {
    res.status(404).json('User not found');
    // throw new Error('User not found');
  }
});

const updateCustomerProfile = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "Update Customer Profile" });
  const customer = await Customer.findById(req.customer._id);
  // console.log(customer);
  
  if (customer) {
    customer.name = req.body.name || customer.name;
    customer.email = req.body.email || customer.email;
    customer.mobile = req.body.mobile || customer.mobile;

    if (req.body.password) {
      customer.password = req.body.password;
    }

    const updatedCustomer = await customer.save();

    res.json({
      _id: updatedCustomer._id,
      name: updatedCustomer.name,
      email: updatedCustomer.email,
    });
  } else {
    res.status(404).json('User not found');
    // throw new Error('User not found');
  }
});

export {
  loginCustomer,
  registerCustomer,
  logoutCustomer,
  getAllCustomerProfiles,
  getCustomerProfile,
  updateCustomerProfile,
};
