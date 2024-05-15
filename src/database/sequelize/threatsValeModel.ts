import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class ThreatsValueModel extends Model {
  // static objects: any;
}
export function initThreatsValueModel(sequelize: Sequelize) {
  ThreatsValueModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      threatValueName: {
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
      modelName: 'Threats Value',
    }
  );
}
