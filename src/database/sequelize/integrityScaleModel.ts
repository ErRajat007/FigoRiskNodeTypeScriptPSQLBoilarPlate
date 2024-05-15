import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class IntegrityScaleModel extends Model {
  // static objects: any;
}
export function initIntegrityScaleModel(sequelize: Sequelize) {
  IntegrityScaleModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      integrityScaleName: {
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
      modelName: 'Integrity Scale',
    }
  );
}
