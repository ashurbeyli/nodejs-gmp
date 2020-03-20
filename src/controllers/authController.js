import { BAD_REQUEST } from 'http-status-codes';

import { verifyPassword } from '../core/utils/passwordUtils';
import UserService from '../services/userService';
import AuthService from '../services/authService';
import { UserAuthModel } from '../models/authModel';
import { UserModel } from '../models/userModel';
import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';

const userService = new UserService(UserModel);
const authService = new AuthService(UserAuthModel);

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const { password: hashedPassword, id } = await userService.getUserByUsername(username);
        await verifyPassword(password, hashedPassword);
        const authData = await authService.setJwtToken({ user_id: id });
        res.json(authData);
    } catch(err) {
        res.status(BAD_REQUEST).send(err);
    }
};

export {
    login
};
