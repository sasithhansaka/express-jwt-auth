import express from 'express';
import { login,register,logout } from '../controllers/auth.controller.js';


const UserRouter = express.Router();

UserRouter.post('/register',register);

UserRouter.post('/login',login);

UserRouter.post('/logout',logout);

export default UserRouter;