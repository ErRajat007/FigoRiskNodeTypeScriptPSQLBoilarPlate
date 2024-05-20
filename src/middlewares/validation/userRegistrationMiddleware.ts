import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';


const UserType = ['admin', 'user','guest'];
enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}

enum Role {
  Manager = 'manager',
  Employee = 'employee',
  Contractor = 'contractor',
}
// / enum UserType {
//   Admin = 'admin',
//   User = 'user',
//   Guest = 'guest',
// }

// const UserTypeSchema = z.enum([UserType.Admin, UserType.User, UserType.Guest], {
//   required_error: 'UserType is required',
// });
const StatusSchema = z.enum([Status.Active, Status.Inactive, Status.Pending], {
  required_error: 'Status is required',
});
const RoleSchema = z.enum([Role.Manager, Role.Employee, Role.Contractor], {
  required_error: 'Role is required',
});
const registrationSchema = z
  .object({
    email: z.string().email(),
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .refine(
        (val) => val.length > 1 && val != '',
        () => ({ message: `Provide valid name` })
      ),
    contactNumber: z
      .string({
        required_error: 'contactNumber is required',
      })
      .regex(/^[0-9]{10}$/, { message: 'Invalid mobile number' })
      .length(10),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Minimum length should be 8'),
    displayPicture: z.string().optional(),
    userType: z
    .string()
    .refine((value)=>UserType.includes(value),{
      message: 'Invalid userType name. Must be one of: admin user guest',
    }),
    status: StatusSchema,
    role: RoleSchema,
    authentication: z.string().optional(),
    organization: z.string({
      required_error: 'organization is required',
    }),
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
