import { Router } from 'express';
import product_infoController from '../controllers/product_info-controller';
// import brandController from '../controllers/brand-controller';

const router = Router();
router.post('/productinfo', product_infoController.addProductInfo);
router.get('/productinfo/:productID', product_infoController.getAllProductInfoByProductID);
router.get('/productinfo/:id', product_infoController.getProductInfoByID);
router.get('/productinfos', product_infoController.getAllProductInfos);

export default router;