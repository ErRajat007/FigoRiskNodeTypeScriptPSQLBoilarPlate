import express from 'express';
import { changePassword, getUserLogin } from '../controllers/loginController';
import * as p from '../middlewares/loginMiddleware';

const router = express.Router();
router.post('/login', p.loginMiddleware, getUserLogin);
router.post('/changePassword', changePassword);

export default router;
