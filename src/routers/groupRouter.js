import express from 'express';

import { getGroups, getGroup, createGroup, updateGroup, removeGroup, addUsersToGroup, getGroupUsers } from '../controllers/groupController';

const router = express.Router();

router.route('/')
    .get(getGroups)
    .post(createGroup);
router.route('/:id')
    .get(getGroup)
    .put(updateGroup)
    .delete(removeGroup);
router.route('/:id/users')
    .get(getGroupUsers)
    .post(addUsersToGroup);

export default router;
