import { BAD_REQUEST } from 'http-status-codes';

import { UserModel } from '../models/userModel';
import UserService from '../services/userService';
import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';

const userService = new UserService(UserModel);

const getUsers = (req, res) => {
    const { page = DEFAULT_PAGE } = req.params;
    return userService
        .getUsers(page, PAGE_LIMIT)
        .then(data => res.json(data))
        .catch(err => res.status(BAD_REQUEST).send(err));
};
const getUser = (req, res) => userService
    .getUserById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(BAD_REQUEST).send(err));
const createUser = (req, res) => {
    const data = req.body;
    return userService
        .addUser(data)
        .then(user => res.json(user))
        .catch(err => res.status(BAD_REQUEST).send(err));
};
const updateUser = (req, res) => userService
    .updateUser(req.params.id, req.body)
    .then(user => res.json(user))
    .catch(err => res.status(BAD_REQUEST).send(err));
const removeUser = (req, res) => userService
    .deleteUser(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(BAD_REQUEST).send(err));

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    removeUser
};
