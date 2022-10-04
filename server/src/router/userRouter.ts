import { Router } from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user-controller';

const router = Router();
router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 6, max: 32}),  
  userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, userController.getUsers);
router.get('/users', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/profileImage', userController.updateUserProfileImage);
router.put('/isBlocked', userController.updateUserIsBlocked);

export default router;