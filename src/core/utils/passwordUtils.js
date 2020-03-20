import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';

import { INVALID_PASSWORD } from '../../config/messages';

const hashPassword = (password) => passwordHash.generate(password);
const createToken = (data) => jwt.sign(data, 'shhhhh');
const verifyPassword = (password, hashedPassword) => new Promise((resolve, reject) => 
    (passwordHash.verify(password, hashedPassword)) ? resolve(true) : reject({ message: INVALID_PASSWORD }));

export {
    hashPassword,
    createToken,
    verifyPassword
}