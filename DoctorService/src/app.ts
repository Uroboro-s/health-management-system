import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import doctorRoutes from "./routes/doctorRoutes.ts";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use("/api/doctors", doctorRoutes);

const MONGO_URI = process.env.MONGO_URI;

/* mongoose
  .connect(MONGO_URI || "")
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err)); */

export default app;
