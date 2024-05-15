import express from 'express';
import { changePassword, getUserLogin,logOutController} from '../controllers/loginController';

import * as p from '../middlewares/loginMiddleware';

const router = express.Router();
router.post('/login', p.loginMiddleware, getUserLogin);
router.get('/logout',logOutController)
router.post('/changePassword', changePassword);

export default router;
