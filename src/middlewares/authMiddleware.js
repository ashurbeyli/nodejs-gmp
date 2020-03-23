import { UNAUTHORIZED, FORBIDDEN } from 'http-status-codes';

import { verifyToken } from '../core/utils/passwordUtils';

const authMiddleware = async (req, res, next) => {
    const token = req.header('authorization');
    if(!token) {
        res.status(UNAUTHORIZED).send({});
        return;
    }
    try {
        const { user_id } = verifyToken(token);
        req.user_id = user_id;
        next();
    } catch(err) {
        return res.status(FORBIDDEN).send(err)
    }
};

export {
    authMiddleware
};