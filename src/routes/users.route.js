import express from "express";
import * as usersController from "../controllers/users.controller.js";

const usersRouter = express.Router();

usersRouter.post('/register', usersController.registerUser);
usersRouter.get('/totalUsers', usersController.getAllUsers);
usersRouter.get('/filter/:id', usersController.getUserById);
usersRouter.put('/update/:id', usersController.updateUser);
usersRouter.delete('/delete/:id', usersController.deleteUser);

export default usersRouter;
