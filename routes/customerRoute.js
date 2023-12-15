import express from "express";
import {
  getCustomerProfile,
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  updateCustomerProfile,
} from "../controller/customerController.js";

const router = express.Router();

router.post("/", registerCustomer);
router.post("/login", loginCustomer);
router.post("/logout", logoutCustomer);
router.route("/profile").get(getCustomerProfile).put(updateCustomerProfile);

export default router;
