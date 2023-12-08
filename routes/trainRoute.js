import express from 'express';
import { createTrain, updateATrain } from '../controller/trainController.js';

const router = express.Router();

router.post("/", createTrain);
router.put("/:id", updateATrain);

export default router;