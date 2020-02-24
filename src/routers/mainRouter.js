import express from 'express';

import { healthCheck } from '../controllers/mainController';

const router = express.Router();

router.route('/')
    .get(healthCheck);

export default router;
