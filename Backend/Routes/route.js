import express from 'express';
import { register } from '../Controller/Register.js';
import { login } from '../Controller/Login.js';
import { middleware } from '../Middleware/Middleware.js';
import { getUserData } from '../Controller/User.js';
import { addMeal } from '../Controller/AddMeal.js';
// Create an instance of express router
const routes = express.Router();

routes.post("/register",register)
routes.post("/login",login)
routes.get("/user-data",middleware,getUserData)
routes.post('/add-meal',middleware,addMeal)
export default routes;