import express from "express";
const router = express.Router();
import {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct
} from "../controllers/productController.js";
import {
    protect,
    admin
} from '../middleware/authMiddleware.js';

router.route('/').get(getAllProduct).post(protect, admin, createProduct);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct);

export default router;