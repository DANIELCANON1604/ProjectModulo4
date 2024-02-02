import express from "express";
import productsRouter from "./products.route.js";
import usersRouter from "./users.route.js";
import cartRouter from "./cart.route.js";

const routes = express.Router();
routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/cart', cartRouter);

export default routes;


