import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

const errorHandler = (err, req, res, next) => err ? res.status(INTERNAL_SERVER_ERROR).send(err.stack) : next();

export default errorHandler;
