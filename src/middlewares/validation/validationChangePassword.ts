import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';


const ChangePassSchema = z.object({
 
  oldPassword: z.string({
    required_error:"Old Password Is Require",
    invalid_type_error:"Password Is Only String"
  }).min(8).max(20),
  newPassword: z.string({
     required_error:"Old Password Is Require",
     invalid_type_error:"Password Is Only String"
  }).min(8).max(20),

  
});

const validationChangePassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    ChangePassSchema.parse(req.body);
    next();
  } catch (err: any) {
    res.status(400).send({ success: false, message: err.issues[0].message });
  }
};

export default validationChangePassword;
