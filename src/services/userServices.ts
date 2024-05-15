import { UsersModel } from "../database/sequelize/userModel";
import { generateSalt, hashPassword } from "../utils/hashedPassword";
import { upload } from "../utils/imageUpload";

export const createUser = async (req: any) => {
  const salt = generateSalt();
  const hashedpassword = hashPassword(req?.body.password, salt);
  try {
    console.log(req.body.displayPicture, "req.body.displayPicture");
    const imagelink = upload.single(req.body.displayPicture);
    const user = await UsersModel.create({
      ...req.body,
      password: hashedpassword,
      salt: salt,
    });
    console.log(user, 'userrr');
    if (user) return user;
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
