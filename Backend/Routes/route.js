import express from 'express';
import { register } from '../Controller/Register.js';
// Create an instance of express router
const routes = express.Router();

routes.post("/register",register)

export default routes;