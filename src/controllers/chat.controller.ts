import { type Request, type Response } from "express";
import { ChatSchema, type ChatBody, type ChatResponse } from "../types/chat";
import { type ApiResult, type Empty } from "../types/http";
import { processChat } from "@/services/chat.service";

export const handleChat = async (
  req: Request<Empty, ApiResult<ChatResponse>, ChatBody>,
  res: Response<ApiResult<ChatResponse>>
) => {
  // 1) Validate body (runtime) and keep types aligned (compile-time)
  const parsed = ChatSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const { conversationId, message } = parsed.data;

  try {
    // 2) Delegate to the service (returns ChatResponse)
    const result = await processChat(conversationId, message);
    return res.status(200).json(result);
  } catch (err) {
    console.error("❌ Chat error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
