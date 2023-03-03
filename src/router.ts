import express from "express";
import multer from "multer";
import { multerConfig } from "./config/multer";
import { FileUploadController } from "./controllers";

const router = express.Router();

const upload = multer(multerConfig);

router.post(
  "/upload/wine",
  upload.single("file"),
  new FileUploadController().execute
);

export { router };
