import { Sequelize } from 'sequelize';
import { AssetTypeModel, initAssetTypeModel } from './assetTypeModel';
import { BusinessUnitModel, initBusinessUnitModel } from './businessUnitModel';
import { initAssetValueModel, AssetValueModel } from './assetValueModel';
import { AvailabilityScaleModel, initAvailabilityScaleModel } from './availabilityScaleModel';

import { ConfidentialityScaleModel, initConfidentialityScaleModel } from './confidentialityScaleModel';
import {
  ControlCategoryModel,
  initControlCategoryModel
} from './controlCategoryModel';
import { DepartmentModel, initDepartmentModel } from './departmentModel';
import { EntityModel, initEntityModel } from './entityModel';
import {
  InherentRiskModel,
  initInherentRiskModel
} from './inherentRiskValueModel';
import { IntegrityScaleModel, initIntegrityScaleModel } from './integrityScaleModel';
import { initLocationModel, LocationModel } from './locationModel';
import { initLoginModel } from './loginModel';
import { initModulesModel, ModulesModel } from './modulesModel';
import { initProbabilityModel, ProbabilityModel } from './probabilityModel';
import {
  initResidualRiskModel,
  ResidualRiskModel
} from './residualRiskValueModel.ts';
import { initSubEntityModel, SubEntityModel } from './subEntityModel';
import { initThreatsModel, ThreatsModel } from './threatsModel';
import { initThreatsValueModel, ThreatsValueModel } from './threatsValeModel';
import { initUsersModel } from './userModel';
import {initAssetModel } from './assetModel'
import { initVulnerabilityLevelModel, VulnerabilityLevelModel } from './vulnerabilityLevelModel';

/**
 *
 * @param {Sequelize} sequelize - The Sequelize instance.
 */
export function initModel(sequelize: Sequelize) {
  initAssetModel(sequelize)
  initLoginModel(sequelize);
  initUsersModel(sequelize);
  initEntityModel(sequelize);
  initModulesModel(sequelize);
  initThreatsModel(sequelize);
  initControlCategoryModel(sequelize);
  initThreatsValueModel(sequelize);
  initProbabilityModel(sequelize);
  initAssetTypeModel(sequelize);
  initAssetValueModel(sequelize);
  initBusinessUnitModel(sequelize);
  initDepartmentModel(sequelize);
  initInherentRiskModel(sequelize);
  initLocationModel(sequelize);
  initResidualRiskModel(sequelize);
  initSubEntityModel(sequelize);
  initVulnerabilityLevelModel(sequelize);
  initConfidentialityScaleModel(sequelize);
  initIntegrityScaleModel(sequelize);
  initAvailabilityScaleModel(sequelize);
  initModulesModel(sequelize);

  EntityModel.hasMany(ThreatsModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ControlCategoryModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ThreatsValueModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ProbabilityModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(LocationModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(BusinessUnitModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(DepartmentModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(AssetTypeModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(SubEntityModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(InherentRiskModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ResidualRiskModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ModulesModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(VulnerabilityLevelModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ConfidentialityScaleModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(IntegrityScaleModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(AssetValueModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(AvailabilityScaleModel, {
    onDelete: 'CASCADE',
  });
  EntityModel.hasMany(ModulesModel, {
    onDelete: 'CASCADE',
  });
}
