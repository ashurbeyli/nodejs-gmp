import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './routers/userRouter';
import { SERVER_PORT } from './config/global';
import errorHandlerMiddleWare from './middlewares/errorHandlerMiddleWare';

const app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => res.send('Server is running...'));
app.use('/users', userRouter);
app.use(errorHandlerMiddleWare);

app.listen(SERVER_PORT, () => console.log(`App listening on port ${SERVER_PORT}!`));
