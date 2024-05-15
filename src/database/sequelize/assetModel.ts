import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
export class AssetModel extends Model {
  // static objects: any;
  static associate({EntityModel}:any) {
    this.hasOne(EntityModel,{foreignKey:'id',sourceKey:'entity', as:'entity_details'});
    }
}
export function initAssetModel(sequelize: Sequelize) {
  AssetModel.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      assetName: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      assetGroup: {
        type: DataType.STRING,
        allowNull: false
      },
      assetId: {
        type: DataType.INTEGER,
        allowNull: false
      },
      description: {
        type: DataType.STRING,
      },
      assetType:{
        type:DataType.ENUM("Application","Infrastructure","People","Process"),
        allowNull : false
      },
      entity:{
        type:DataType.INTEGER,
        references: {
            model: { tableName: 'Entities' },
            key: 'id',
          },
      },
      businessUnit:{
        type:DataType.INTEGER,
        references: {
            model: { tableName: 'Business Units' },
            key: 'id', 
          },
      },
      department:{
        type:DataType.INTEGER,
        references: {
            model: { tableName: 'Departments' },
            key: 'id',
          },
      },
      assetOwner:{
        type:DataType.STRING,
        allowNull : false
      },
      publicFacing:{
        type:DataType.ENUM("Yes","No"),
        allowNull : false
      },
    //   confidentiality:{
    //     type:DataType.STRING,
    //     references: {
    //         model: { tableName: 'Departments' },
    //         key: 'departmentName',
    //       },
    //   },
    },
    {
      sequelize,
      modelName: 'Assets',
    }
  );
}
