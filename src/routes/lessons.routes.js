import {Router} from 'express';
import {getLessons, createLesson, updateLesson, deleteLesson, getLesson, getLessonTasks} from '../controllers/lesson.controllers.js';
import md_auth from '../middlewares/authenticated.js'


const router = Router();

router.get('/lessons', getLessons);
router.post('/lessons', createLesson);
router.put('/lessons/:id', updateLesson);                 
router.delete('/lessons/:id', deleteLesson);
router.get('/lessons/:id', getLesson);

router.get('/lessons/:id/tasks', [md_auth.ensureAuth], getLessonTasks);

export default router;