import { Router } from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { topicRouter } from "./topic";
import { getTopicDraft } from "../services/topic";

export const apiRouter = Router();
apiRouter.use("/auth", authRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/topic", topicRouter);
apiRouter.get("/chat", async (_req, res) => {
  const response = await getTopicDraft();
  res.json(response);
});
