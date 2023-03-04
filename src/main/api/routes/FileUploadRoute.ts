import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../../config/multer";
import { FileUploadController } from "../controllers/FileUploadController";

const upload = multer(multerConfig);

export default (router: Router): void => {
  router.post(
    "/upload/wine",
    upload.single("file"),
    new FileUploadController().execute
  );
};
