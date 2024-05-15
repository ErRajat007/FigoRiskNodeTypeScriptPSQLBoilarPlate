import { UsersModel } from "../database/sequelize/userModel";
import { generateSalt, hashPassword } from "../utils/hashedPassword";
const fs = require("fs");

export const createUser = async (req: any, filename: string, path: any) => {
  const salt = generateSalt();
  const hashedpassword = hashPassword(req?.body.password, salt);
  try {
    const user = await UsersModel.create({
      ...req.body,
      password: hashedpassword,
      salt: salt,
      displayPicture: filename,
    });
    if (user) return user;
  } catch (error: any) {
    fs.unlink(path, (err: any) => {
      if (err) {
        console.error(err);
        return;
      }
      //file removed
    });
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