import { INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status-codes';

import AuthService from '../services/authService';
import { UserAuthModel } from '../models/authModel';

const authService = new AuthService(UserAuthModel);
const authMiddleware = async (req, res, next) => {
    const token = req.header('authorization');
    
    try {
        const userAuth = await authService.getUserByToken(token);
        req.user_id = userAuth.user_id;
        next();
    } catch(err) {
        res.status(UNAUTHORIZED).send(err);
        next(err);
    }
};

export {
    authMiddleware
};