import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const registrationSchema = z
  .object({
    email: z.string().email(),
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    contactNumber: z
      .string({
        required_error: 'Mobile number is required',
      })
      .length(10),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Minimum length should be 8'),
    displayPicture: z.string().optional(),
    userType: z.string(),
    status: z.string(),
    role: z.string(),
    authentication: z.string(),
    organization: z.string(),
  })
  .strict();

const validateRegistrationData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    registrationSchema.parse(req.body);
    next();
  } catch (err: any) {
    console.info('Validation Error : ', err);
    res.status(400).send({ success: false, message: err.issues[0].message });
  }
};

export default validateRegistrationData;
