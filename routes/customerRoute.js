import express from "express";
import {
    getAllCustomerProfiles,
  getCustomerProfile,
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  updateCustomerProfile,
} from "../controller/customerController.js";
import {protect} from '../middlewares/customerAuthMiddleware.js';

const router = express.Router();

router.post("/", registerCustomer);
router.post("/login", loginCustomer);
router.post("/logout", logoutCustomer);
router.get("/all-customers", protect, getAllCustomerProfiles);
router.route("/profile").get(protect, getCustomerProfile).put(protect, updateCustomerProfile);

export default router;
