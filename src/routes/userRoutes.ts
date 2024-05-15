import express from "express";
import { addUser, getUser } from "../controllers/userController";
import validateRegistrationData from "../middlewares/userRegistrationMiddleware";
import { upload } from "../utils/imageUpload";
// const multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function (req: any, file: any, cb: any) {
//     cb(null, './public/images');
//   },
//   filename: function (req: any, file: any, cb: any) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });
// var upload = multer({ storage: storage });

const router = express.Router();
router.post(
  '/addUser',
  upload.single('image'),
  validateRegistrationData,
  addUser
);
router.get('/user/:id', getUser);


export default router;