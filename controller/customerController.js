import asyncHandler from "express-async-handler";

const registerCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register Customer" });
});

const loginCustomer = (req, res) => {
  res.status(200).json({ message: "Login Customer" });
};

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
