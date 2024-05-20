import { UsersModel } from "../database/sequelize/userModel";
import { generateSalt, hashPassword } from '../utils/hashedPassword';
import { Op } from 'sequelize';

export const checkExist = async (req: any): Promise<boolean> => {
  const { email, contactNumber } = req.body;

  const checkUser = await UsersModel.findOne({
    where: {
      [Op.or]: [
        { email },
        { contactNumber }
      ]
    },
  });
console.log(checkUser)
  return checkUser == null;
};


export const createUser = async (req: any) => {
  const salt = generateSalt();
  const hashedPassword = hashPassword(req?.body.password, salt);
  try {
    const user = await UsersModel.create(
      {
        ...req.body,
        password: hashedPassword,
        salt: salt,
      }
    );
    const SendData = {
      id:user.dataValues.id,
      name:user.dataValues.name,
      email:user.dataValues.email,
      contactNumber:user.dataValues.contactNumber,
      password:user.dataValues.password,
      displayPicture:user.dataValues.displayPicture,
      userType:user.dataValues.userType,
      status:user.dataValues.status,
      role:user.dataValues.role,
      authentication:user.dataValues.authentication,
      organization:user.dataValues.organization,
      createdAt:user.dataValues.createdAt,
      updatedAt:user.dataValues.updatedAt,
      
    }
    
    if (user){
      return { success: true, message: 'User Register successfully', data:SendData,status:200};
    }else{
      return {success:false, message:"Something is Wrong",status:400}
    };
  } catch (error: any) {
    return { status: 400, error: error };
  }
};

export const getUserDetails = async (userId: any) =>
  await UsersModel.findOne({
    where: {
      id: userId,
      isActive: true,
    },
  });

export const updateUser = async (displayPicture: any, userId: any) =>
  await UsersModel.update(
    { displayPicture: displayPicture },
    { where: { id: userId, isActive: true } }
  );


  export const getMeeDetailService = async (email: any) =>
  await UsersModel.findOne({
    where: {
      email: email,
      status:"Active"
    },
  });