import { UsersModel } from "../database/sequelize/userModel";
import {
  createRefreshTokens,
  createTokens
} from "../utils/createTokens";
import { generateSalt, hashPassword } from "../utils/hashedPassword";
const { Sequelize } = require("sequelize");

export const updatePassword = async (req: any) => {

  const email=req.AuthEmail;
  const user: any = await UsersModel.findOne({
    where: { email: email},
  });
  if(!user) return {status:404,success:false,message:"User Not Found"}

  const oldSalt = user.salt;
  const oldHashedPassword = hashPassword(req?.body.oldPassword, oldSalt);

  if (oldHashedPassword!== user.password) {
    return {status:400,success:false,message:"Invalid Old Password"}
  }
  const salt = generateSalt();
  const hashedPassword = hashPassword(req?.body.newPassword, salt);
  user.update({ password: hashedPassword, salt: salt });
  return {status:200,success:true,message:"Password Update Successfully"}
  
};

export const loginUserService = async (email: string, password: string) => {
  const user: any = await UsersModel.findOne({
    where: { email: email.toLowerCase() },
  });
  if (!user) {
    return {
      success: false,
      status: 404,
      message: 'Email And Password Is Wrong',
    };
  }
  const salt = user.dataValues.salt;
  const hashedPassword = hashPassword(password, salt);
  if (hashedPassword !== user.dataValues.password) {
    return { success: false, message: 'Invalid Credentials', status: 400 };
  }

  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // valid for 1 day
  const { token }: any = await createTokens({
    isLoggedIn: true,
    type: 'authToken',
    AuthEmail: email.toLowerCase(),
    userID: user.id,
    exp,
  });


  const { refreshToken } = await createRefreshTokens({
    AuthEmail: email.toLowerCase(),
    userID: user.id,
  });

  user.token = token;
  user.refreshToken = refreshToken;
  user.save();
  // const result = await user.update({
  //   token,
  //   refreshToken,
  // });
  // verifyToken(refreshToken.toString());

  return {
    status: 200,
    success: true,
    data: {
      token,
      refreshToken,
    },
  };
};

export const generateAccessToken= async(data:any)=>{
  try {
    const email=data.AuthEmail;
    const userid = data.userid;
    const user:any = await UsersModel.findOne({where:{email:email}})
    if(!user) return {status:400,message:"User Not Found", success:false}

    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // valid for 1 day
    console.log('>>>>>>>>>>>>>>>>Token>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    const { token }: any = await createTokens({
      isLoggedIn: true,
      type: 'authToken',
      AuthEmail: email.toLowerCase(),
      userID: userid,
      exp,
    });
    console.log('>>>>>>>>>>>>>>>>Token', token);
    const { refreshToken } = await createRefreshTokens({
      AuthEmail: email,
      userID: userid,
    });
    
    console.log('>>>>>>>>>>>>>>>>RRToken',refreshToken);

    user.token = token;
    user.refreshToken=refreshToken
    user.save();
  return {status:200, success:true, message: 'Token Regenerated',data: { token, refreshToken } };
  } catch (error) {
    console.error('Error:', error);
     return { success:false, message: 'Error',data:error };
  }
}
