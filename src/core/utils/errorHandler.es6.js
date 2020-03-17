import { handleUncaughtException } from './handleUncaughtException';
import { handleUnhandledRejection } from './handleUnhandledRejection';


const errorLogger = (err) => err && console.error(err);

const handleErrorsOnProcess = () => {
    handleUncaughtException();
    handleUnhandledRejection();
}

export {
    errorLogger,
    handleErrorsOnProcess
}
