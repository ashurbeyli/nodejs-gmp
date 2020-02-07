import uuid from 'uuid/v1';

import UserEntity from '../entitites/User';
import { deleteItemById, getItemsByPageAndLimit } from '../utils/commonUtils';
import { USER_NOT_FOUND } from '../../../core/constants';

const users = [];

const getUsers = (page, limit) => getItemsByPageAndLimit(users, page, limit);
const getUserById = (id) => users.find(user => user.id === id);
const addUser = (data) => {
    const id = uuid();
    const userData = { ...data, id };
    users.push(new UserEntity(userData));
    return getUserById(id);
};
const updateUser = (id, data) => {
    const index = users.findIndex(user => user.id === id);
    if (index >= 0) {
        users[index] = data;
        return users[index];
    }
    throw new Error(USER_NOT_FOUND);
};
const deleteUser = (id) => deleteItemById(users, id);

export {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
