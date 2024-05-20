import { DataTypes, Model, Sequelize, UUIDV4 } from 'sequelize';

export class UsersModel extends Model {
  // static objects: any;
}

/**
 * Initialize the LoginModel.
 *
 * @param {Sequelize} sequelize - The Sequelize instance.
 */
export function initUsersModel(sequelize: Sequelize) {
  UsersModel.init(
    {
      // id:{
         // type: DataTypes.UUID,
        // defaultValue: UUIDV4,
        // primaryKey: true,
        // comment: 'Auto increment primary key',
      // }
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      contactNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      token: {
        type: DataTypes.TEXT,
        defaultValue: '',  
      },
      refreshToken: {
        type: DataTypes.TEXT,
        defaultValue: '',
      },
      displayPicture: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      userType: {
        type: DataTypes.ENUM('admin', 'user', 'guest'),
        allowNull: false,
        defaultValue: 'User',
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive', 'pending'),
        allowNull: false,
        defaultValue: 'Active',
      },
      role: {
        type: DataTypes.ENUM('manager', 'employee', 'contractor'),
        allowNull: false,
        defaultValue: 'employee',
      },
      authentication: {
        type: DataTypes.ENUM('SSO', 'Application'),
        allowNull: true,
        defaultValue: 'SSO',
      },
      organization: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
}
