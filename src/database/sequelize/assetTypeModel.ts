import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class AssetTypeModel extends Model {
  // static objects: any;
}
export function initAssetTypeModel(sequelize: Sequelize) {
  AssetTypeModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      assetTypeName: {
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
      modelName: 'Asset Type',
    }
  );
}
