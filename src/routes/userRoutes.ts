import express from "express";
import { addUser} from "../controllers/userController";
import {validateRegistrationData} from '../middlewares/validation';
import {verifyToken} from '../utils/createTokens'
import { upload } from '../utils/imageUpload';
import {checkToken} from '../controllers/loginController'
const router = express.Router();

router.post('/addUser',validateRegistrationData,addUser);
// router.get('/user/:id', getUser);
// router.get('/mee',verifyToken,checkToken,getMeeDetails);
// router.put("/userImage/:id", upload.single("image"), getUser);

export default router;
``