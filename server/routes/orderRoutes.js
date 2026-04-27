import express from 'express';
import {
    createOrder,
    getMyOrders,
    getOrders,
    getSupplierOrders,
    updateOrderStatus,
    getOrderById
} from '../controllers/orderController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(protect, authorize('admin'), getOrders)
    .post(protect, createOrder);

router.get('/my', protect, getMyOrders);
router.get('/supplier', protect, authorize('supplier', 'producer'), getSupplierOrders);

router.route('/:id')
    .get(protect, getOrderById);

router.put('/:id/status', protect, authorize('admin', 'supplier', 'producer'), updateOrderStatus);

export default router;
