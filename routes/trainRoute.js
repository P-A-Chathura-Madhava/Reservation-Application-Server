import express from 'express';
import { createTrain } from '../controller/trainController.js';

const router = express.Router();

router.post("/", createTrain);

export default router;