import {Router} from 'express'
import {getStudents, createStudent, updateStudent, deleteStudent, getStudent} from '../controllers/student.controllers.js'

const router = Router()

router.get('/students', getStudents)
router.post('/students',createStudent)
router.put('/students/:id', updateStudent)                 
router.delete('/students/:id', deleteStudent)
router.get('/students/:email', getStudent)


export default router