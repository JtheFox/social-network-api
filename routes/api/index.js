import { Router } from 'express';
const router = Router();
import userRoutes from './user-routes.js';
import thoughtRoutes from './thought-routes.js';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;