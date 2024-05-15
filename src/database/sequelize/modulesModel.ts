import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ModulesModel extends Model {
  // static objects: any;
}
export function initModulesModel(sequelize: Sequelize) {
  ModulesModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      moduleName: {
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
      modelName: 'Modules',
    }
  );
}
