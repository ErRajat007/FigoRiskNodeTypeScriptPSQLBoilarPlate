import express from 'express';
// import commonController from '../controllers/commonController'
const commonController = require('../controllers/commonController')
import validationAddAssetData from '../middlewares/validation/validationAddAsset'


const router = express.Router();
router.post('/add-asset',validationAddAssetData,commonController.addAssetController); 
router.get('/asset-details',commonController.getAssetDetailsController)


export default router;
