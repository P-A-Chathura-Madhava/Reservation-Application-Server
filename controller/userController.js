import { generateToken } from '../config/jwtToken.js';
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

  const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check is user extists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
      res.json({
        _id: findUser?._id,
        name: findUser?.name,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  });

  // get all users
  const getAllUsers = asyncHandler(async (req, res) => {
    try {
      const getUsers = await User.find();
      res.json(getUsers);
    } catch (error) {
      throw new Error(error);
    }
  });

  // get a user
  const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const getaUser = await User.findById(id);
      res.json({
        getaUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  });

  export {createUser, loginUserCtrl, getAllUsers, getaUser};