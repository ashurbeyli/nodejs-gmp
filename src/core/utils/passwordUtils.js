import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

import { INVALID_PASSWORD } from '../../config/messages';
import { JWT_SECRET_KEY } from '../../config/global';

const hashPassword = (password) => passwordHash.generate(password);
const verifyPassword = (password, hashedPassword) => new Promise((resolve, reject) => 
    (passwordHash.verify(password, hashedPassword)) ? resolve(true) : reject({ message: INVALID_PASSWORD }));
const createToken = (data) => jwt.sign(data, JWT_SECRET_KEY);
const verifyToken = (token) => jwt.verify(token, JWT_SECRET_KEY);

export {
    hashPassword,
    verifyPassword,
    createToken,
    verifyToken
}