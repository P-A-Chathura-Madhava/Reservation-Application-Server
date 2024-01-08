import express from "express";
import {
  deleteACustomer,
    getAllCustomerProfiles,
  getCustomerProfile,
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  reserveATrain,
  updateCustomerProfile,
} from "../controller/customerController.js";
import {protect} from '../middlewares/customerAuthMiddleware.js';
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", registerCustomer);
router.post("/login", loginCustomer);
router.post("/logout", logoutCustomer);
router.post("/reserve-a-train", protect, reserveATrain);
router.get("/all-customers", /* protect, */ getAllCustomerProfiles);

router.delete("/delete-a-customer/:id", /* protect, */ deleteACustomer);

router.route("/profile").get(protect, getCustomerProfile).put(protect, updateCustomerProfile);


export default router;
