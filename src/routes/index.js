import { Router } from 'express';
import messageRoute from './comment.js';

const router = Router();

router.use('/message', messageRoute);

export default router;
