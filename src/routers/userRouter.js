import express from 'express';

import UserController from '../controllers/userController';
import UserService from '../services/userService';
import { UserModel } from '../models/userModel';

export default () => {
    const router = express.Router();
    const userService = new UserService(UserModel);
    const userController = new UserController(userService);

    router.route('/')
        .get(userController.getUsers)
        .post(userController.createUser);

    router.route('/:id')
        .get(userController.getUser)
        .put(userController.updateUser)
        .delete(userController.removeUser);

    return router;
};
