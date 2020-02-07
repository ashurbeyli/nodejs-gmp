import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

export default (err, req, res, next) => err ? res.status(INTERNAL_SERVER_ERROR).send(err.stack) : next();
