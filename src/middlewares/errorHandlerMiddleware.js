import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

import { logger } from '../core/utils/logger';

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err) {
        logger.log({
            level: 'error',
            method: req.path,
            params: req.params,
            body: req.body,
            message: err.toString(),
            stack: err.stack
        });
        res.status(INTERNAL_SERVER_ERROR).send(err);
    }
    next();
};

export {
    errorHandlerMiddleware
};