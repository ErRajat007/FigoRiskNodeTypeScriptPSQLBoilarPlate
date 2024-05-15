import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ConfidentialityScaleModel extends Model {
  // static objects: any;
}
export function initConfidentialityScaleModel(sequelize: Sequelize) {
  ConfidentialityScaleModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      confidentialityScaleName: {
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
      modelName: 'Confidentiality Scale',
    }
  );
}
