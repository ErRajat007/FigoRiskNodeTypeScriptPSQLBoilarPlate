import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class InherentRiskModel extends Model {
  // static objects: any;
}
export function initInherentRiskModel(sequelize: Sequelize) {
  InherentRiskModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      inherentRiskName: {
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
      modelName: 'Inherent Risk',
    }
  );
}
