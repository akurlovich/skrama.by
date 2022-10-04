import { Router } from 'express';
import roleController from '../controllers/role-controller';

const router = Router();
router.post('/', roleController.addRole);
router.get('/', roleController.getRole);
router.get('/:id', roleController.getRoleByID);
router.get('/roles', roleController.getAllRoles);

export default router;