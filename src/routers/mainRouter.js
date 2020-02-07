import express from 'express';

import { get } from '../controllers/mainController';

const router = express.Router();

router.route('/')
    .get(get);

export default router;
