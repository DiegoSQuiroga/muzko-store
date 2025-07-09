import express from "express";
import { getProducts, getProductById } from "../controllers/productController";

const router = express.Router();

// Ruta: GET /api/products
router.get("/", getProducts);

// Ruta: GET /api/products/:id
router.get("/:id", getProductById);

export default router;