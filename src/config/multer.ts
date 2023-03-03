import multer from "multer";

export const multerConfig = {
  dest: "uploads/",
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (_, file, callback) => {
      return callback(null, file.originalname);
    },
  }),
};
