import express from 'express';
import { createTrainClass, getATrainClass, getAllTrainClasses, updateATrainClass } from '../controller/trainClassController.js';

const router = express.Router();

router.post("/", createTrainClass);
router.put("/:id", updateATrainClass);
router.get("/:id", getATrainClass);
router.get("/", getAllTrainClasses);

export default router;