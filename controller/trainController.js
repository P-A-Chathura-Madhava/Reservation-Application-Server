import Train from "../models/trainModel.js";
import asyncHandler from 'express-async-handler';

const createTrain = asyncHandler(async (req, res) => {
    try {
        const newTrain = await Train.create(req.body);
        res.json(newTrain);
      } catch (error) {
        throw new Error(error);
      }
})

export {createTrain}