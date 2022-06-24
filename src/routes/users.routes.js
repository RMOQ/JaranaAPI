import {Router} from 'express';
import {getUsers, register, updateUser, deleteUser, getUser, login} from '../controllers/user.controllers.js';
//import multipart from 'connect-multiparty';

//const md_upload_avatar = multipart({ uploadDir: "./uploads"})

const router = Router();

router.get('/users', getUsers);
router.post('/register',register);
router.post('/login',login);
router.put('/users/:id', updateUser);                 
router.delete('/users/:id', deleteUser);
router.get('/users/:email', getUser);


export default router;