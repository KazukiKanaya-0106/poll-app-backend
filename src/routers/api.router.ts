import { Router } from "express";
import { authRouter } from "./auth.router";
import { userRouter } from "./user.router";
import { topicRouter } from "./topic.router";

export const apiRouter = Router();
apiRouter.use("/auth", authRouter);
apiRouter.use("/user", userRouter);
apiRouter.use("/topic", topicRouter);
