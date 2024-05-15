import express from "express";
import { addUser, getUser,getMeeDetails } from "../controllers/userController";
import validateRegistrationData from "../middlewares/userRegistrationMiddleware";
import {verifyToken} from '../utils/createTokens'
import { upload } from '../utils/imageUpload';
import {checkToken} from '../controllers/loginController'
const router = express.Router();

router.get('/user/:id', getUser);

router.post(
  '/addUser',
  upload.single('image'),
  validateRegistrationData,
  addUser
);

router.get('/mee',verifyToken,checkToken,getMeeDetails);
router.put("/userImage/:id", upload.single("image"), getUser);

export default router;
