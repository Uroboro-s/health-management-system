import express from "express";
import { checkApiStatus } from "../controllers/authController";

const router = express.Router();

//register patient
router.get("/status", checkApiStatus);

export default router;
