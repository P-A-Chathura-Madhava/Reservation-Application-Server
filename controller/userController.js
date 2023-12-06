import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const createUser = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      // Create new user
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
      // User already exists
    //   res.json({
    //     message: "User Already Exists",
    //     success: false
    //   });
    throw new Error("User Already Exists");
    }
  });

  export {createUser};