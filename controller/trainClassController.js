import TrainClass from "../models/trainClassModel.js";
import asyncHandler from 'express-async-handler';

const createTrainClass = asyncHandler(async (req, res) => {
    try {
        const newTrainClass = await TrainClass.create(req.body);
        res.json(newTrainClass);
      } catch (error) {
        throw new Error(error);
      }
})

export {createTrainClass}