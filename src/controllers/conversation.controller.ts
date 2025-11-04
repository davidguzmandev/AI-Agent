import { type Request, type Response } from "express";
import { insertConversation } from "@/services/conversation.service";
import { type Conversation } from "@/types/domain";
import { type ApiResult, type Empty } from "@/types/http";

export const createConversation = async (
  _req: Request<Empty, ApiResult<Conversation>, Empty>,
  res: Response<ApiResult<Conversation>>
) => {
  try {
    const conversation = await insertConversation();
    return res.status(201).json(conversation);
  } catch (err) {
    console.error("❌ Error creating conversation:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
