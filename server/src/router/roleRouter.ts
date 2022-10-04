import { Router } from 'express';
import roleController from '../controllers/role-controller';

const router = Router();
router.post('/role', roleController.addRole);
router.get('/role', roleController.getRole);
router.get('/role/:id', roleController.getRoleByID);
router.get('/roles', roleController.getAllRoles);

export default router;