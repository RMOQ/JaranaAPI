import {Router} from 'express';
import {getTeachers, createTeachers, updateTeachers, deleteTeachers, getTeacher} from '../controllers/teacher.controllers.js';

const router = Router();

router.get('/teachers', getTeachers);
router.post('/teachers',createTeachers);
router.put('/teachers/:id', updateTeachers);                 
router.delete('/teachers/:id', deleteTeachers);
router.get('/teachers/:email', getTeacher);


export default router;