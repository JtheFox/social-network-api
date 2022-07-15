import { Router } from 'express';
const router = Router();
import { router as userRoutes } from './user-routes';
import { router as thoughtRoutes } from './thought-routes';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default { router };