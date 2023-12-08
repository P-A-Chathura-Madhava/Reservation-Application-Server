import express from 'express';
import { createTrainClass, updateATrainClass } from '../controller/trainClassController.js';

const router = express.Router();

router.post("/", createTrainClass);
router.put("/:id", updateATrainClass);

export default router;