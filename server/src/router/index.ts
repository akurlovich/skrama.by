import { Router } from 'express';
import userController from '../controllers/user-controller';
// import { body } from 'express-validator';
// import authMiddleware from '../middlewares/auth-middleware';
// import bookController from '../controllers/book-controller';
// import genreController from '../controllers/genre-controller';
// import roleController from '../controllers/role-controller';
// import bookedController from '../controllers/booked-controller';
// import issuedController from '../controllers/issued-controller';
// import commentConroller from '../controllers/comment-conroller';

const router = Router();
router.get('/', userController.getUsers);

router.get('/reg', userController.registration);

// router.post('/registration',
//   body('email').isEmail(),
//   body('password').isLength({min: 6, max: 32}),  
//   userController.registration);
// router.post('/login', userController.login);
// router.post('/logout', userController.logout);
// router.get('/refresh', userController.refresh);
// router.get('/users', authMiddleware, userController.getUsers);
// router.get('/users/:id', userController.getUserById);
// router.put('/users/profileImage', userController.updateUserProfileImage);
// router.put('/users/isBlocked', userController.updateUserIsBlocked);

// router.get('/books', bookController.getAllBooks);
// router.get('/books/:id', bookController.getBookByID);
// router.post('/books', bookController.addBook);
// router.put('/books', bookController.updateBookAmountByID);

// router.get('/genre', genreController.getGenre);
// router.get('/genre/:id', genreController.getGenreByID);
// router.get('/genres', genreController.getAllGenres);
// router.post('/genres', genreController.addGenre);

// router.get('/role', roleController.getRole);
// router.get('/role/:id', roleController.getRoleByID);
// router.get('/roles', roleController.getAllRoles);
// router.post('/roles', roleController.addRole);

// router.get('/booked/books/:id', bookedController.getAllBookedsBookID);
// router.get('/booked/users/:id', bookedController.getAllBookedsUserID);
// router.get('/booked/:id', bookedController.getBookedByID);
// router.get('/bookeds', bookedController.getAllBookeds);
// router.post('/booked', bookedController.addBooked);
// router.delete('/booked/:id', bookedController.deleteBooked);

// router.get('/issued/books/:id', issuedController.getAllIssuedsBookID);
// router.get('/issued/users/:id', issuedController.getAllIssuedsUserID);
// router.get('/issued/:id', issuedController.getIssuedByID);
// router.get('/issueds', issuedController.getAllIssueds);
// router.post('/issued', issuedController.addIssued);
// router.delete('/issued/:id', issuedController.deleteIssued);

// router.get('/comment/books/:id', commentConroller.getAllCommentsBookID);
// router.get('/comment/users/:id', commentConroller.getAllCommentsUserID);
// router.get('/comment/:id', commentConroller.getCommentByID);
// router.get('/comments', commentConroller.getAllComments);
// router.post('/comment', commentConroller.addComment);
// router.put('/comment', commentConroller.updateCommetByModerator);
// router.delete('/comment/:id', commentConroller.deleteComment);

export default router;