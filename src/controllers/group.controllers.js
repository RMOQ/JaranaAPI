import { Group  } from '../models/Group.js';
import { Student  } from '../models/Student.js';
import { Teacher } from '../models/Teacher.js'


export const getGroups = async (req, res) => {
    try{
        const groups = await Group.findAll();
        res.send(groups);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const getGroup = async (req, res) => {
    try{
        const { id } = req.params;
        const group = await Group.findOne({
            where: {
                id,
            },
        });

        if(!group){
            return res.status(400).json({message: 'Group does not exist'});
        }

        res.json(group);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const createGroup = async (req, res) => {
    const {group_name, description} = req.body;
    try{
       
        const newGroup = await Group.create({
            group_name,
            description
        });
        
        res.json(newGroup);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const updateGroup = async (req, res) => {
    
    const { id } = req.params;
    const { pr_name, description } = req.body;
    try{
    

        const group = await Group.findByPk(id);
        group.group_name = pr_name;
        group.description = description;
        await group.save();

        res.json(group);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
  
export const deleteGroup = async (req, res) => {
    try{
        const { id } = req.params;
        const group = await Group.destroy({
            where: {
                id,
            }
        });
        if(!group){
            res.status(400).send({msg: "No se ha podido eliminar el grupo"});
        }
        res.sendStatus(204).send({msg: "grupo eliminada correctamente"});
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}

export const getGroupStudents = async (req, res) => {
    try{
        const { id } = req.params;
        const student = await Student.findAll({
            where: {roupId : id}
        })
        res.json(student);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getGroupTeacher = async (req, res) => {
    try{
        const { id } = req.params;
        const teacher = await Teacher.findAll({
            where: {roupId : id}
        });
        res.json(teacher);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
