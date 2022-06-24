import jwt from 'jsonwebtoken';

const SECRET_KERY = "dhjahe34SDS35dafda";


function createToken(user, expiresIn){
    const { id, email } = user;
    const payload = { id, email };

   return jwt.sign(payload, SECRET_KERY, { expiresIn })
}

function decodeToken(token){
    return jwt.decode(token, SECRET_KERY);
}

module.exports = {
    createToken,
    decodeToken,
};