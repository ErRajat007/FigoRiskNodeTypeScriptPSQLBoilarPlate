import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ProbabilityModel extends Model {
  // static objects: any;
}
export function initProbabilityModel(sequelize: Sequelize) {
  ProbabilityModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      probabilityName: {
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
      modelName: 'Probability',
    }
  );
}
