import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ResidualRiskModel extends Model {
  // static objects: any;
}
export function initResidualRiskModel(sequelize: Sequelize) {
  ResidualRiskModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      residualRiskName: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      entityId: {
        type: DataType.INTEGER,
        references: {
          model: { tableName: 'Entities' },
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Residual Risk',
    }
  );
}
