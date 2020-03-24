import express from 'express';
import bodyParser from 'body-parser';

import mainRouter from './routers/mainRouter';
import userRouter from './routers/userRouter';
import authRouter from './routers/authRouter';
import groupRouter from './routers/groupRouter';
import { SERVER_PORT } from './config/global';
import { APP_LISTENING_ON_PORT } from './core/constants';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import { authMiddleware } from './middlewares/authMiddleware';
import { apiLoggerMiddleware } from './middlewares/apiLoggerMiddleware';
import { handleErrorsOnProcess } from './core/utils/errorHandler.es6';

handleErrorsOnProcess();

const app = express();
app.use(bodyParser.urlencoded());
app.use(apiLoggerMiddleware);
app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use(authMiddleware);
app.use('/users', userRouter);
app.use('/groups', groupRouter);
app.use(errorHandlerMiddleware);
app.listen(SERVER_PORT, () => console.log(`${APP_LISTENING_ON_PORT} ${SERVER_PORT}!`));
