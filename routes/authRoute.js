import express from 'express';
import { createUser, deleteaUser, getAllUsers, getaUser, loginUserCtrl, updateaUser } from '../controller/userController.js';
import { authMiddleware } from '../config/authMiddleware.js';

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, getaUser);
router.delete("/:id", deleteaUser);
router.put("/:id", updateaUser);

export default router;