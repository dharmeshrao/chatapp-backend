import express, { Router } from 'express';
import { userController } from './user.controller';
const router: Router = express.Router();

router.post('/login', userController.addCookiesAndPhoneNumber);

export default router;
