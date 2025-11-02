import { Router } from "express";
import { createConversation } from "../controllers/conversation.controller";
import { type Conversation } from "../types/domain";
import { type ApiResult, type Empty } from "../types/http";

const router = Router();

router.post<Empty, ApiResult<Conversation>, Empty>("/", createConversation);

export default router;
