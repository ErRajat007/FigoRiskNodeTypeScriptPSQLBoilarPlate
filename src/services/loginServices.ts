import { UsersModel } from '../database/sequelize/userModel';
import createTokens from '../utils/createTokens';
import { generateSalt, hashPassword } from '../utils/hashedPassword';
const { Sequelize } = require('sequelize');

export const updatePassword = async (req: any) => {
  const user: any = await UsersModel.findOne({
    where: { email: req.body.email },
  });
  const salt = generateSalt();
  const hashedpassword = hashPassword(req?.body.password, salt);
  if (user) {
    user.update({ password: hashedpassword, salt: salt });
  } else {
    throw 'user not found';
  }
};

export const loginUserService = async (email: string, password: string) => {
  const errorObject = {
    success: false,
    message: 'Invalid credentials',
    status: 400,
  };
  const user = await UsersModel.findOne({
    where: { email: email.toLowerCase() },
  });
  if (!user) {
    throw { success: false, status: 404, message: 'user not found' };
  }
  const salt = user.dataValues.salt;
  const hashedPassword = hashPassword(password, salt);
  if (hashedPassword !== user.dataValues.password) {
    throw errorObject;
  }
  // const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // valid for 1 day
  const { token, refreshToken }: any = await createTokens({
    email,
  });
  const result = await user.update({
    token,
    refreshToken,
  });
  if (result)
    return {
      success: true,
      token,
      refreshToken,
    };
  throw errorObject;
};
