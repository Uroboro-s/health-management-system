import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
// app.use("/api/auth", authRoutes);

const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("MongoDB connected!"))
//   .catch((err) => console.log(err));

export default app;
