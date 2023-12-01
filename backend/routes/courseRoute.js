import express from "express";
const router = express.Router();
import cors from "cors";
import multer from "multer"
import { CreateCourse } from "../controllers/courseController.js";
import { upload } from "../utils/multer.js";

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/create", CreateCourse);

export default router;
