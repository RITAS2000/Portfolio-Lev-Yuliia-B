import { Router } from 'express';
import postMessageController from '../controllers/messageController.js';

const router = Router();

router.post('/', postMessageController);

export default router;
