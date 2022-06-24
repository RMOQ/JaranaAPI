import {Student} from '../models/Student.js';

export const getStudents = async (req, res) => {
    try{
        const student = await Student.findAll();
        res.send(student);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const getStudent = async (req, res) => {
    try{
        const { email } = req.params;
        const student = await Student.findOne({
            where: {
                email,
            },
        });

        if(!student){
            return res.status(400).json({message: 'student does not exist'});
        };

        res.json(student);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const createStudent = async (req, res) => {
    const {student_name, student_lastname, email, n_doc, n_telf, userId} = req.body
    try{
        if (!email) throw {  message: "El email es obligatorio" };
        const newStudent = await Student.create({
            student_name, 
            student_lastname,
            email, 
            n_doc, 
            n_telf,
            userId,
            groupId
        });
        
        res.json(newStudent);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { student_name, student_lastname, email, n_doc, n_telf } = req.body;

    try{
        const student = await Student.findByPk(id);
        student.set(req.body);
        await student.save();

        res.json(student);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
  
export const deleteStudent = async (req, res) => {
    try{
        const { id } = req.params;
        const student = await Student.destroy({
            where: {
                id,
            }
        });
        if (!student){
            res.status(400).send({msg: "No se ha podido eliminar al estudiante"});
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}
