import { Router } from 'express';
import { handleChat } from '../controllers/chat.controller';

const router = Router();

//POST
router.post('/', handleChat);

export default router;