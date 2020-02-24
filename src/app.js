import express from 'express';
import bodyParser from 'body-parser';

import mainRouter from './routers/mainRouter';
import userRouter from './routers/userRouter';
import groupRouter from './routers/groupRouter';
import { SERVER_PORT } from './config/global';
import { APP_LISTENING_ON_PORT } from './core/constants';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import { apiLoggerMiddleware } from './middlewares/apiLoggerMiddleware';
import { handleUncaughtException } from './core/utils/handleUncaughtException';

handleUncaughtException();

const app = express();
app.use(bodyParser.urlencoded());
app.use(apiLoggerMiddleware);
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/groups', groupRouter);
app.use(errorHandlerMiddleware);
app.listen(SERVER_PORT, () => console.log(`${APP_LISTENING_ON_PORT} ${SERVER_PORT}!`));
