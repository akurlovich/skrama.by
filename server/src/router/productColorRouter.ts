import { Router } from 'express';
import product_colorController from '../controllers/product_color-controller';

const router = Router();
router.post('/color', product_colorController.addProductColor);
router.get('/color', product_colorController.getProductColor);
router.get('/color/:id', product_colorController.getProductColorByID);
router.get('/colors', product_colorController.getAllProductColors);

export default router;