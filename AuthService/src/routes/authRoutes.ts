import express from "express";
import {
  registerPatient,
  registerDoctor,
  loginPatient,
  loginDoctor,
} from "../controllers/authController";

const router = express.Router();

//register patient
router.post("/register", registerPatient);

//register doctor
router.post("/register", registerDoctor);

//login patient
router.post("/login", loginPatient);

//login doctor
router.post("/login", loginDoctor);

export default router;
