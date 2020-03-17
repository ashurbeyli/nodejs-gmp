import { logger } from './logger';

const uncaughtException = 'uncaughtException';

const handleUncaughtException = () => process.on(uncaughtException,  (err) => {
    logger.log({
        level: 'error',
        message: `${uncaughtException}: ${err.toString()}`,
        stack: err.stack
    });
});

export {
    handleUncaughtException
};
