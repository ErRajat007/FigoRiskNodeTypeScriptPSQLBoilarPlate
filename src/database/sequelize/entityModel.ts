import { DataTypes, Model, Sequelize } from 'sequelize';

export class EntityModel extends Model {}

/**
 * Initialize the LoginModel.
 *
 * @param {Sequelize} sequelize - The Sequelize instance.
 */
export function initEntityModel(sequelize: Sequelize) {
  EntityModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      verificationMethod : {
        type : DataTypes.ENUM("Manual", "Automatic"),
        allowNull : false
      },
      entityName: {
        type: DataTypes.STRING,
        unique : true,
        allowNull: false
      },
      impact: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: 'Entity',
    }
  );
}
