import {Teacher} from '../models/Teacher.js'

export const getTeachers = async (req, res) => {
    try{
        const teacher = await Teacher.findAll()
        res.status(200).send(teacher)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const getTeacher = async (req, res) => {
    try{
        const { email } = req.params
        const teacher = await Teacher.findOne({
            where: {
                email,
            },
        });

        if(!teacher){
            return res.status(400).json({message: 'student does not exist'})
        };

        res.status(200).json(teacher);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const createTeachers = async (req, res) => {
    const {teacher_name, teacher_lastname, email, n_doc, n_telf, userId} = req.body
    try{
        if (!email) throw {  message: "El email es obligatorio" };
        const newTeacher = await Teacher.create({
            teacher_name, 
            teacher_lastname,
            email, 
            n_doc, 
            n_telf,
            userId,
            groupId
        });
        
        res.status(201).json(newTeacher);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const updateTeachers = async (req, res) => {
    try{
        const { id } = req.params
        const { teacher_name, teacher_lastname, email, n_doc, n_telf, groupId } = req.body

        const teacher = await Teacher.findByPk(id)
        teacher.set(req.body)
        await teacher.save()

        res.status(201).json(teacher)
    }  catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
  
export const deleteTeachers = async (req, res) => {
    try{
        const { id } = req.params;
        const teacher = await Teacher.destroy({
            where: {
                id,
            }
        })
        if (!teacher){
            res.status(400).send({msg: "No se ha podido eliminar al estudiante"})
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}
