import { Router } from 'express';
const router = Router();
import userRoutes from './user-routes';
import thoughtRoutes from './thought-routes';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;