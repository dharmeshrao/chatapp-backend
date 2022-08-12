import express, { Application } from 'express';
//@ts-ignore
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userController from './controllers/user.routes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cookieParser());

app.use('/user', userController);

export default app;
