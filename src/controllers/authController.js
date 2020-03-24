import { BAD_REQUEST } from 'http-status-codes';

import { verifyPassword, createToken } from '../core/utils/passwordUtils';
import UserService from '../services/userService';
import { UserModel } from '../models/userModel';

const userService = new UserService(UserModel);
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const { password: hashedPassword, id } = await userService.getUserByUsername(username);
        await verifyPassword(password, hashedPassword);
        res.send({
            token: createToken({ user_id: id })
        });
    } catch(err) {
        res.status(BAD_REQUEST).send(err);
    }
};

export {
    login
};
