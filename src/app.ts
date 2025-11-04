import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import conversationRouter from "@/routes/conversation.routes";
import chatRouter from "@/routes/chat.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => res.send("AI Agent backend running 🚀"));

app.use("/api/conversations", conversationRouter);
app.use("/api/chat", chatRouter);

export default app;