import UserModel from '../models/userModel';
import UserService from '../services/userService';
import { DEFAULT_PAGE, PAGE_LIMIT } from '../config/global';

const userService = new UserService(UserModel);

const get = (req, res) => {
    const { page = DEFAULT_PAGE } = req.params;
    return userService.getUsers(page, PAGE_LIMIT).then(data => res.json(data));
};
const getOne = (req, res) => userService.getUserById(req.params.id).then(user => res.json(user));
const post = (req, res) => {
    const data = req.body;
    return userService.addUser(data).then(user => res.json(user));
};
const put = (req, res) => userService.updateUser(req.params.id, req.body).then(user => res.json(user));
const remove = (req, res) => userService.deleteUser(req.params.id).then(user => res.json(user));

export {
    get,
    getOne,
    post,
    put,
    remove
};
