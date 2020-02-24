import winston from 'winston';
import { ERROR_LOG_FILE } from '../constants/global.es6';

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: ERROR_LOG_FILE, name: 'error', level: 'error' }),
        new winston.transports.Console({ colorize: true, level: 'info' })
    ]
});

export {
    logger
};
