import express from 'express';
import taksRoutes from './routes/tasks.routes.js';
import usersRoutes from './routes/users.routes.js';
import studentsRoutes from './routes/students.routes.js';
import teachersRoutes from './routes/teachers.routes.js';
import groupsRoutes from './routes/groups.routes.js';


const app = express();

//middleware
app.use(express.json());

app.use(taksRoutes);
app.use(usersRoutes);
app.use(studentsRoutes);
app.use(teachersRoutes);
app.use(groupsRoutes);


export default app;
