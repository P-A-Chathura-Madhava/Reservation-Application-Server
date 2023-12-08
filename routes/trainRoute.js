import express from 'express';
import { createTrain, deleteATrain, getATrain, getAllTrains, updateATrain } from '../controller/trainController.js';

const router = express.Router();

router.post("/", createTrain);
router.put("/:id", updateATrain);
router.get("/:id", getATrain);
router.get("/", getAllTrains);
router.delete("/:id", deleteATrain);

export default router;