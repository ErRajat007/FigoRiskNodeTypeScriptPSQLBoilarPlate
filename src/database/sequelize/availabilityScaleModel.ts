import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class AvailabilityScaleModel extends Model {
  // static objects: any;
}
export function initAvailabilityScaleModel(sequelize: Sequelize) {
  AvailabilityScaleModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      availabilityScaleName: {
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
      modelName: 'Availability Scale',
    }
  );
}
