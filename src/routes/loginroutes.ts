import express from 'express';
import { changePassword, generateAccessT, getUserLogin,logOutController} from '../controllers/loginController';
import { auth } from '../middlewares/auth/auth';
import { validationLoginData,validationChangePassword, validationAccessToken } from '../middlewares/validation';
import {validationLogout} from '../middlewares/validation';

const router = express.Router();
router.post('/login', validationLoginData, getUserLogin);
router.get('/logout', validationLogout,auth, logOutController);
router.post('/changePassword', validationChangePassword, auth, changePassword);
router.post('/generateAT', validationAccessToken, auth,generateAccessT);
export default router;
