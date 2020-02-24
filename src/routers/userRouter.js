import express from 'express';

import { getUsers, getUser, createUser, updateUser, removeUser } from '../controllers/userController';

const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(removeUser);

export default router;
