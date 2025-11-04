import { Router } from "express";
import { handleChat } from "@/controllers/chat.controller";
import { type ChatResponse, type ChatBody } from "@/types/chat";
import { type ApiResult, type Empty } from "@/types/http";

const router = Router();

// Express generics order: Params, ResBody, ReqBody, ReqQuery
router.post<Empty, ApiResult<ChatResponse>, ChatBody>("/", handleChat);

export default router;
