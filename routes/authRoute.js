import express from 'express';
import { createUser, deleteaUser, forgotPasswordToken, getATrainReservation, getAllTrainReservations, getAllUsers, getaUser, handleRefreshToken, loginAdmin, loginUserCtrl, logout, reserveATrain, resetPassword, updatePassword, updateaUser } from '../controller/userController.js';
import { authMiddleware, isAdmin } from '../config/authMiddleware.js';

const router = express.Router();

router.post("/register", createUser);
router.post("/admin-login", loginAdmin);
router.post("/login", loginUserCtrl);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/reset-password/:token", resetPassword);
router.post("/reserve-a-train", authMiddleware, reserveATrain);
router.put("/password", authMiddleware, updatePassword);
router.get("/all-users", getAllUsers);
router.get("/get-all-reservations", authMiddleware, getAllTrainReservations);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.get("/get-reservation/:id", authMiddleware, getATrainReservation);
router.delete("/:id", deleteaUser);
// router.put("/:id", updateaUser);
router.put("/update-user", authMiddleware, updateaUser);

export default router;