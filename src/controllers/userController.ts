import e, { Request, Response } from "express";
import {decodeToken,getTokens} from '../utils/createTokens'
import {
  checkExist,
  createUser
} from '../services/userServices';

export const addUser = async (req: any, res: Response) => {
  try {
    const checkUser= await checkExist(req);
    if (!checkUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Please Check Your Email and Contact Number ,is already exist in database' });
    }
    const data = await createUser(req);
    return res.status(data.status).json({success:data.success,message:data.message ,data:data.data});
  } catch (err:any) {
    console.log("***", err);
    return res.status(500).send({ error: err.message });
  }
};
