import { UsersModel } from '../../database/sequelize/userModel';
import { getTokens, verifyToken } from '../../utils/createTokens';
import { Request, Response, NextFunction } from 'express';

export interface IRequest extends Request {
  verifiedToken?: string;
  userid?: number;
  AuthEmail?: string;
}

const auth = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const token: string = getTokens(req.headers);
    if (!token) return res.status(401).send({ success: false, message: 'Invalid Token'});
    const isTokenVerified:any = await verifyToken(token, res);
    if(isTokenVerified.success){
      req.verifiedToken = token;
      req.userid = isTokenVerified.data.userID;
      req.AuthEmail = isTokenVerified.data.AuthEmail
      next();
    } else {
        return res
          .status(401)
          .json({ success: false, message: 'Token has expired' });
      }
  } catch (error) {
    // next (error);
    return res.status(401).send({ success: false, message: 'Invalid Token12' });
  }
};

export { auth };
