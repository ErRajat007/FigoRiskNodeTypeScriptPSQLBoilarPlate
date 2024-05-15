
import { Request, Response, NextFunction } from 'express';
import {
    loginUserService,
    updatePassword
} from '../services/loginServices';
import {getTokens} from '../utils/createTokens'
export const getUserLogin = async (req: Request, res: Response) => {
  console.log('in get userlogin', req?.body);
  try {
    const { email, password } = req.body;
    const data: any = await loginUserService(email, password);
    if (data.success) res.status(200).send(data);
    else res.status(401).send(data);
  } catch (err) {
    res.status(400).send({ success: false, err });
  }
};


export const changePassword = async (_req: Request, res: Response) => {
  try {
    const data = await updatePassword(_req);
    return res
      .status(200)
      .send({ message: 'Password Changed successfully', data: data });
  } catch (err) {
    console.log('***', err);
  }
};


// Token blacklist to store revoked tokens
const tokenBlacklist = new Set();

export const logOutController = async (req: Request, res: Response) => {
    try {
       const token= getTokens(req.headers)
       if (!token) return res.status(401).json({success:false, message: 'No token provided' });
       tokenBlacklist.add(token);
       res.status(200).json({success: true, message: 'Logout successful' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Middleware to check token validity
export const checkToken =async (req:Request, res:Response, next:NextFunction) => {
    const token= getTokens(req.headers)
    if (!token) return res.status(401).json({ success:false,message: 'No token provided' });
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ success: false, message: 'Token has expired please login again' });
    }
    next();
  };