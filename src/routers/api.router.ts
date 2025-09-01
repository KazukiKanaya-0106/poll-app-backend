import { Router } from "express";
import { authRouter } from "./auth.router";
import { userRouter } from "./user.router";
import { topicRouter } from "./topic.router";
import { getTopicDraft } from "../services/topic.service";

export const apiRouter = Router();
apiRouter.use("/auth", authRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/topic", topicRouter);
apiRouter.get("/chat", async (_req, res) => {
  const response = await getTopicDraft();
  res.json(response);
});
