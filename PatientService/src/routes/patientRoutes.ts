import express from "express";
import { checkApiStatus } from "../controllers/patientController";

const router = express.Router();

//check API status
router.get("/status", checkApiStatus);

export default router;
