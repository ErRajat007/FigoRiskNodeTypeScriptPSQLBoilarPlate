
import { Request, Response, NextFunction } from 'express';
import { IRequest } from '../middlewares/auth/auth';

interface token{
  verifiedToken: string; // Assuming verifiedToken is always a string
}
import {
  generateAccessToken,
    loginUserService,
    updatePassword
} from '../services/loginServices';
import {getTokens} from '../utils/createTokens'
import logoutUserService from '../services/logoutUserService';

export const getUserLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await loginUserService(email, password);
   return res.status(data.status).json({success:data.success,message:data.message,data:data.data});
  } catch (err) {
    res.status(400).send({ success: false, err });
  }
};


export const changePassword = async (req: IRequest, res: Response) => {
  try {
    const data = await updatePassword(req);
   return res.status(data.status).json({success:data.success,message:data.message})
  } catch (err) {
    console.log('***', err);
  }
};


// Token blacklist to store revoked tokens
const tokenBlacklist = new Set();

export const logOutController = async (req: IRequest, res: Response) => {
    try {
        const userId:any= req.userid
        if(!userId){
          return res.json({success:false,message:"User Not Found"})
        }
      const result: any = await logoutUserService(userId);
      if (result.success) res.status(200).send(result);
      else res.status(401).send(result);
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

export const generateAccessT = async (req: IRequest, res: Response) => {
  try {
    const data:any = await generateAccessToken(req)
    return res.status(data.status ).json({success:data.success,message:data.message,data:data.data})
  }catch (err) {
    return res.status(400).json({ success: false, message: err });
  }
};