import express from "express";
import { getProducts, getProductByCode } from "../controllers/products.controller.js";

const productsRouter = express.Router();
productsRouter.get('/', getProducts);
productsRouter.get('/:code', getProductByCode);


export default productsRouter;