import { BAD_REQUEST } from 'http-status-codes';

import { UserModel } from '../models/userModel';
import UserService from '../services/userService';
import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getUsers(req, res) {
        const { page = DEFAULT_PAGE } = req.params;
        return userService
            .getUsers(page, PAGE_LIMIT)
            .then(data => res.json(data))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };
    getUser(req, res) { 
        return userService
        .getUserById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(BAD_REQUEST).send(err));
    }
    createUser(req, res) {
        const data = req.body;
        return userService
            .addUser(data)
            .then(user => res.json(user))
            .catch(err => res.status(BAD_REQUEST).send(err));
    };
    updateUser(req, res) { 
        return userService
        .updateUser(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(err => res.status(BAD_REQUEST).send(err));
    }
    removeUser(req, res) { 
        return userService
        .deleteUser(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(BAD_REQUEST).send(err));
    }

}

export default UserController;