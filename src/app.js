import express from 'express';
import bodyParser from 'body-parser';

import mainRouter from './routers/mainRouter';
import userRouter from './routers/userRouter';
import { SERVER_PORT } from './config/global';
import { APP_LISTENING_ON_PORT } from './core/constants';
import errorHandlerMiddleWare from './middlewares/errorHandlerMiddleWare';

const app = express();

app.use(bodyParser.urlencoded());

app.get('/', mainRouter);
app.use('/users', userRouter);
app.use(errorHandlerMiddleWare);

app.listen(SERVER_PORT, () => console.log(`${APP_LISTENING_ON_PORT} ${SERVER_PORT}!`));
