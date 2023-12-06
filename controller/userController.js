import { generateToken } from '../config/jwtToken.js';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import validateMongoDbId from '../utils/validateMongodbId.js';

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
    validateMongoDbId(id);
    try {
      const getaUser = await User.findById(id);
      res.json({
        getaUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  });

  // delete a user
  const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)
    try {
      const deleteaUser = await User.findByIdAndDelete(id);
      res.json({
        deleteaUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  });

  // update a user
// const updateaUser = asyncHandler(async (req, res) => {
//     const {id} = req.params;
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, {
//             name: req?.body?.name,
//             email: req?.body?.email,
//             mobile: req?.body?.mobile,
//         },
//         {
//             new: true,
//         });
//         res.json(updatedUser);
//     } catch (error) {
//         throw new Error(error);
//     }
// });

const updateaUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        name: req?.body?.name,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

  export {createUser, loginUserCtrl, getAllUsers, getaUser, deleteaUser, updateaUser};