import { Request, Response } from 'express';
import {
  createUser,
  getUserDetails
} from '../services/userServices';



export const addUser = async (_req: Request, res: Response) => {
  console.log('_req222', _req);
  res.json({'a':true});
  // try {
  //   console.log("req",_req);
  //   const data = await createUser(_req);
  //   console.log(data, 'data');
  //   return res
  //     .status(200)
  //     .send({ message: 'User added successfully', data: data });
  // } catch (err) {
  //   console.log('***', err);
  // }
};
export const getUser = async (_req: Request, res: Response) => {
  try {
    const user = await getUserDetails(_req.params.id);
    return user
      ? res
          .status(200)
          .send({ success: true, message: 'User details found', data: user })
      : res.status(404).send({ success: false, message: 'User not found' });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

