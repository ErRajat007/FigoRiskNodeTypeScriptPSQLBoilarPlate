import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class BusinessUnitModel extends Model {
  // static objects: any;
}
export function initBusinessUnitModel(sequelize: Sequelize) {
  BusinessUnitModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      businessUnitName: {
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
      modelName: 'Business Unit',
    }
  );
}
