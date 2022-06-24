import {Router} from 'express';
import {getGroups, createGroup, updateGroup, deleteGroup, getGroup, getGroupStudents, getGroupTeacher} from '../controllers/group.controllers.js';



const router = Router();

router.get('/groups', getGroups);
router.post('/groups', createGroup);
router.put('/groups/:id', updateGroup);                 
router.delete('/groups/:id', deleteGroup);
router.get('/groups/:id', getGroup);
router.get('/groups/:id/students', getGroupStudents);
router.get('/groups/:id/teachers', getGroupTeacher);


export default router;