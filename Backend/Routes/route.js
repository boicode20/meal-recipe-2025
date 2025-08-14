import express from 'express';
import { register } from '../Controller/Register.js';
import { login } from '../Controller/Login.js';
import { middleware } from '../Middleware/Middleware.js';
import { getUserData } from '../Controller/User.js';
// Create an instance of express router
const routes = express.Router();

routes.post("/register",register)
routes.post("/login",login)
routes.get("/user-data",middleware,getUserData)
export default routes;