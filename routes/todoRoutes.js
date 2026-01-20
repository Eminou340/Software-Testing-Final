import express from 'express';
import { 
    getTodos, 
    createTodo, 
    getAdminStats 
} from '../controllers/todoController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router.route('/')
    .get(getTodos)
    .post(createTodo);

router.get('/admin-stats', authorize('admin'), getAdminStats);

export default router;