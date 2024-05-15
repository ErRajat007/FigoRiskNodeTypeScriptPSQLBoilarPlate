import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class AssetValueModel extends Model {
  // static objects: any;
}
export function initAssetValueModel(sequelize: Sequelize) {
  AssetValueModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      AssetValueName: {
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
      modelName: 'Asset Value',
    }
  );
}
