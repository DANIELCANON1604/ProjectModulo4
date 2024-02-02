import express from "express";
import * as cartController from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.post('/buy', cartController.addToCart);
cartRouter.get('/user-cart', cartController.getUserCart);

export default cartRouter;
