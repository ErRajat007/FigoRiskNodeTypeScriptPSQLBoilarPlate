
import { Request, Response } from 'express';
import {
    loginUserService,
    updatePassword
} from '../services/loginServices';

export const getUserLogin = async (req: Request, res: Response) => {
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
