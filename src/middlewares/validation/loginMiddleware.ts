import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const loginSchema = z.object({
  email: z.string({ required_error: 'Email is require' }).email(),
  password: z.string({ required_error: 'Password is require' }).min(8),
  contactNumber: z
    .string()
    .regex(/^[0-9]{10}$/,{ message: 'Invalid contact Number' }).length(10)
    .optional(),
});

const validationLoginData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (err:any) {
    res.status(400).send({ status: false, msg: err.issues[0].message });
  }
};

export default validationLoginData;