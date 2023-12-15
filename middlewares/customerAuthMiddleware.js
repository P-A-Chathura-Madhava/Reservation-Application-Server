import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Customer from '../models/customerModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.customer = await Customer.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401).json('Not authorized, no token');
    // throw new Error('Not authorized, no token');
  }
});

export { protect };