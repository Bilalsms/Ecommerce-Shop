import express from "express";
const router = express.Router();

import { getAllProduct, getProductById } from "../controllers/productController.js";

router.route('/').get(getAllProduct);
router.route('/:id').get(getProductById);

export default router;