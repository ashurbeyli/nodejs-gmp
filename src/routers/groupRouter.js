import express from 'express';

import { get, getOne, post, put, remove, addUsersToGroup, getGroupUsers } from '../controllers/groupController';

const router = express.Router();

router.route('/')
    .get(get)
    .post(post);
router.route('/:id')
    .get(getOne)
    .put(put)
    .delete(remove);
router.route('/:id/users')
    .get(getGroupUsers)
    .post(addUsersToGroup);

export default router;
