import moment from "moment";
import jwt from '../services/jwt.services.js'

const SECRET_KERY = "dhjahe34SDS35dafda";

function ensureAuth(req, res, next){
    if(!req.headers.authorization){
        return res.status(402).send({ mseg: "La petición no tiene la cabecera de autentificación"});
    }

    const token = req.headers.authorization.replace(/['"]/g, "");

    const payload = jwt.decodeToken(token, SECRET_KERY);
    try{

        if(payload.exp <= moment().unix()){
            return res.status(400).json({ message: "token expirado" });
        }
        
    } catch (error) {
        return res.status(400).json({ message: "token invalido" });
    }
    
    req.user = payload;
    next();

}

module.exports = {
    ensureAuth,
}