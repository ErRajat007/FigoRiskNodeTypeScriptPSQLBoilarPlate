import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const tokenSchema = z.object({
  authorization: z.string({
    required_error:"Auth Token is require"
  }),
});

const validationLogout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    tokenSchema.parse(req.headers);
    next();
  } catch (err: any) {
    res.status(400).send({ status: false, message: err.issues[0].message });
  }
};

export default validationLogout;
