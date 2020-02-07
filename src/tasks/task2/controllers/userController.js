import { getUsers, getUserById, addUser, updateUser, deleteUser } from '../db/users';
import { PAGE_LIMIT } from '../config/global';

const get = (req, res) => {
    const { page = 0 } = req.params;
    return res.json(getUsers(page, PAGE_LIMIT));
};
const getOne = (req, res) => res.json(getUserById(req.params.id));
const post = (req, res) => {
    const data = req.body;
    return res.json(addUser(data));
};
const put = (req, res) => res.json(updateUser(req.params.id, req.body));
const remove = (req, res) => res.json(deleteUser(req.params.id));

const getAutoSuggestUsers = (req, res) => {};

export {
    get,
    getOne,
    post,
    put,
    remove,
    getAutoSuggestUsers
};
