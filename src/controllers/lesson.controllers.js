import { Lesson } from '../models/Lessons';
import { Task } from '../models/Task.js';

export const getLessons = async (req, res) => {
    try{
        const lessones = await Lesson.findAll();
        res.send(lessones);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const getLesson = async (req, res) => {
    try{
        const { id } = req.params;
        const lesson = await Lesson.findOne({
            where: {
                id,
            },
        });

        if(!lesson){
            return res.status(400).json({message: 'Lesson does not exist'});
        }

        res .status(200).json(lesson);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const createLesson = async (req, res) => {
    try{
        const {lesson_name, description, start_date, duration, groupId} = req.body;
        const newLesson = await Lesson.create({
            lesson_name,
            description,
            start_date, 
            duration,
            groupId
        });
        
        res .status(201).json(newLesson);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const updateLesson = async (req, res) => {
    try{
        const { id } = req.params;
        const { lesson_name, description, start_date, duration, groupId} = req.body;

        const lesson = await Lesson.findByPk(id);
        lesson.pr_name = pr_name;
        lesson.priority = priority;
        lesson.description = description;
        await lesson.save();

        res .status(201).json(lesson);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
  
export const deleteLesson = async (req, res) => {
    try{
        const { id } = req.params;
        const lesson = await Lesson.destroy({
            where: {
                id,
            }
        })
        if(!lesson){
            res.status(400).send({msg: "No se ha podido eliminar el proyecto"});
        }
        res.sendStatus(204).send({msg: "Proyecto eliminada correctamente"});
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}

export const getLessonTasks = async (req, res) => {
    try{
        const { id } = req.params;
        const tasks = await Task.findAll({
            where: {lessonId : id}
        })
        res.status(200).json(tasks);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}