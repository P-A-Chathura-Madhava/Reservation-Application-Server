import express from 'express';
import { createTrain, getATrain, getAllTrains, updateATrain } from '../controller/trainController.js';

const router = express.Router();

router.post("/", createTrain);
router.put("/:id", updateATrain);
router.get("/:id", getATrain);
router.get("/", getAllTrains);

export default router;