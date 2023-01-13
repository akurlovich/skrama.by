import { Router } from 'express';
import emailController from '../controllers/email-controller';

const router = Router();
router.post('/emailnotification', emailController.sendEmail);

export default router;