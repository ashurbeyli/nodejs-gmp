import { logger } from './logger';

const unhandledRejection = 'unhandledRejection';

const handleUnhandledRejection = () => process.on(unhandledRejection,  (err) => {
    logger.log({
        level: 'error',
        message: `${unhandledRejection}: ${err.toString()}`,
        stack: err.stack
    });
});

export {
    handleUnhandledRejection
};
