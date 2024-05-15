import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class DepartmentModel extends Model {
  // static objects: any;
}
export function initDepartmentModel(sequelize: Sequelize) {
  DepartmentModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      departmentName: {
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
      modelName: 'Department',
    }
  );
}
