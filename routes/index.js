import { Router } from 'express';
const router = Router();
import { router as apiRoutes } from './api';

router.use('/api', apiRoutes);

export default { router };