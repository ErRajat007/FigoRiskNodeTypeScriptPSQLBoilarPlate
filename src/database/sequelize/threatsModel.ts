import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ThreatsModel extends Model {
  // static objects: any;
}
export function initThreatsModel(sequelize: Sequelize) {
  ThreatsModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      threatlName: {
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
      modelName: 'Threats',
    }
  );
}
