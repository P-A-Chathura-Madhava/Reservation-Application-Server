import express from 'express';
import { createTrainClass } from '../controller/trainClassController.js';

const router = express.Router();

router.post("/", createTrainClass);

export default router;