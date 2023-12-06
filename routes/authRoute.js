import express from 'express';
import { createUser, getAllUsers, loginUserCtrl } from '../controller/userController.js';

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);

export default router;