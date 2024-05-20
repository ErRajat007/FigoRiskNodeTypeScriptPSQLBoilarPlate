import { UsersModel } from '../database/sequelize/userModel';

const logoutUserService = async (userId: string) => {
  try {
    const user = await UsersModel.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw { success: false, message: 'Invalid token' };
    }

    await user.update({ token: '', refreshToken: '' });
    return { success: true, message: 'User logout successfully !' };
  } catch (error) {
    return error;
  }
};

export default logoutUserService;
