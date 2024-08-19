import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated
} from "../middlewares/auth.js";

const router = express.Router();

// Patient Registration
router.post("/patient/register", patientRegister);

// User Login
router.post("/login", login);

// Admin Routes
router.post("/admin/addNew", isAdminAuthenticated, addNewAdmin);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// Doctor Routes
router.post("/doctor/addNew", isAdminAuthenticated, addNewDoctor);

// Get All Doctors
router.get("/doctors", getAllDoctors);

// Patient Routes
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

export default router;
