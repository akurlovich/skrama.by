import { Router } from 'express';
import typeController from '../controllers/type-controller';

const router = Router();
router.post('/type', typeController.addType);
router.get('/type', typeController.getType);
router.get('/type/:id', typeController.getTypeByID);
router.get('/types', typeController.getAllTypes);

export default router;