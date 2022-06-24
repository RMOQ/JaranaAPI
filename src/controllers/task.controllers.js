import {Task} from '../models/Task.js'

export const getTasks = async (req, res) => {
    try{
        const tasks = await Task.findAll()
        res.send(tasks)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const getTask = async (req, res) => {
    try{
        const { id } = req.params
        const task = await Task.findOne({
            where: {
                id,
            },
        })

        if(!task){
            return res.status(400).json({message: 'Task does not exist'})
        }

        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const createTask = async (req, res) => {
    try{
        const {task_name, description, projectId} = req.body
        const newTask = await Task.create({
            task_name,
            description,
            projectId
        })
        
        res.json(newTask)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const updateTask = async (req, res) => {
    try{
        const { id } = req.params
        const { task_name, done, description } = req.body

        const task = await Task.findByPk(id)
        task.set(req.body)
        await task.save()

        res.json(task)
    }  catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
  
export const deleteTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await Task.destroy({
            where: {
                id,
            }
        })
        if (!task){
            res.status(400).send({msg: "No se ha podido eliminar la tarea"})
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}
