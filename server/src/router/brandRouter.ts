import { Router } from 'express';
import brandController from '../controllers/brand-controller';

const router = Router();
router.post('/brand', brandController.addBrand);
router.get('/brand', brandController.getBrand);
router.get('/brand/:id', brandController.getBrandByID);
router.get('/brands', brandController.getAllBrands);

export default router;