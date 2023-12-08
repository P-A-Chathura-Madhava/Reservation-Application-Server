import express from 'express';
import { createTrain, getATrain, updateATrain } from '../controller/trainController.js';

const router = express.Router();

router.post("/", createTrain);
router.put("/:id", updateATrain);
router.get("/:id", getATrain);

export default router;