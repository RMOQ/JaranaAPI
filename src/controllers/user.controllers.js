import bcryptjs from 'bcryptjs';
import jwt from '../services/jwt.services.js';
import {User} from '../models/User.js';

export const getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const getUser = async (req, res) => {
    try{
        const { email } = req.params
        const user = await User.findOne({
            where: {
                email,
            },
        });

        if(!user){
            return res.status(400).json({message: 'User does not exist'});
        }

        res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const register = async (req, res) => {
    const {user_name, user_lastname, email, password} = req.body;
    const user = new User (req.body);
    try{
        const salt = bcryptjs.genSaltSync(10);
        user.password = await bcryptjs.hash(password, salt);
    
        if (!email) throw {  message: "El email es obligatorio" };
        if (!password) throw { message: "La contraseña es obligatoria" };

       
        const newUser = await User.create({
            user_name,
            user_lastname,
            email,
            password: user.password
        })
        
        res.json(newUser)
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }

 
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    
    try{
        const user = await User.findOne({  where: {
            email: email
        } });
        if (!user) {
            res.status(404).json({ msg: "Error en el correo o la contraseña" });
        }

        if (!bcryptjs.compareSync(password, user.password)) 
        {
            res.status(404).json({ msg: "Error en el correo o la contraseña" });
        }
        res.status(200).send({ token: jwt.createToken(user, "12h") });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const { user_name, user_lastname, email, password } = req.body;

        const user = await User.findByPk(id);
        user.set(req.body);
        await user.save();

        res.json(user);
    }  catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
  
export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await User.destroy({
            where: {
                id,
            }
        })
        if (!task){
            res.status(400).send({msg: "user could not be eliminated"});
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}
