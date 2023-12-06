import express from 'express';
import { createUser, getAllUsers, getaUser, loginUserCtrl } from '../controller/userController.js';

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", getaUser);

export default router;