import express from "express";
import { checkApiStatus } from "../controllers/doctorController";

const router = express.Router();

//check api status
router.get("/status", checkApiStatus);

export default router;
