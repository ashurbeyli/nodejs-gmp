import express from 'express';

import { get, getOne, getAutoSuggestUsers, post, put, remove } from '../controllers/userController';

const router = express.Router();

router.route('/')
    .get(get)
    .post(post);

router.route('/:id')
    .get(getOne)
    .put(put)
    .delete(remove);

router.get('/auto-suggest', getAutoSuggestUsers);

export default router;
