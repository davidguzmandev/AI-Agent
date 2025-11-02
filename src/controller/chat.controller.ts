import { Request, Response } from 'express';
import { z } from 'zod';


// Definition a request body shape with ZOD
const ChatSchema = z.object({
    conversationId: z.number()optional(),
})