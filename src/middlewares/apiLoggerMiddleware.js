import { logger } from '../core/utils/logger';

const logMethodAndPath = (method, path) => method && path && `${method} ${path}`;

const apiLoggerMiddleware = (req, res, next) => {
    logger.info({
        method: logMethodAndPath(req.method, req.path),
        params: req.params,
        body: req.body
    });
    next();
};

export {
    apiLoggerMiddleware
};
