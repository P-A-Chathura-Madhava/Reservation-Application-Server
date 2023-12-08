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

const updateATrain = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
      const updatedTrain = await Train.findByIdAndUpdate(
        id,
        {
          number: req?.body?.number,
          name: req?.body?.name,
          route: req?.body?.route,
          class: req?.body?.class,
          seat: req?.body?.seat,
        },
        {
          new: true,
        }
      );
      res.json(updatedTrain);
    } catch (error) {
      throw new Error(error);
    }
})

export {createTrain, updateATrain}