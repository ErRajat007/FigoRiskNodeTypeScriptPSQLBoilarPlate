import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ControlCategoryModel extends Model {
  // static objects: any;
}
export function initControlCategoryModel(sequelize: Sequelize) {
  ControlCategoryModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      controlCategoryName: {
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
      modelName: 'Control Category',
    }
  );
}
