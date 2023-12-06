import express from 'express';
import { createUser, deleteaUser, getAllUsers, getaUser, loginUserCtrl, updateaUser } from '../controller/userController.js';
import { authMiddleware, isAdmin } from '../config/authMiddleware.js';

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
// router.put("/:id", updateaUser);
router.put("/update-user", authMiddleware, updateaUser);

export default router;