import { z } from 'zod';

// Definition a request body shape with ZOD
export const ChatSchema = z.object({
    conversationId: z.number().int().positive().optional(),
    message: z.string().min(1),
});

export type ChatBody = z.infer<typeof ChatSchema>;

export interface ChatResponse {
    conversationId: number;
    user: string;
    assistant: string;
}