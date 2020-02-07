import express from 'express';

import { get, getOne, post, put, remove } from '../controllers/userController';

const router = express.Router();

router.route('/')
    .get(get)
    .post(post);

router.route('/:id')
    .get(getOne)
    .put(put)
    .delete(remove);

export default router;
