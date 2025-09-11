import { Router } from "express";
import { resultController, todayController, voteController } from "../controllers/topic";
import { authenticate } from "../middlewares/auth";

export const topicRouter = Router();
topicRouter.get("/today", authenticate, todayController);
topicRouter.post("/:id/vote", authenticate, voteController);
topicRouter.get("/:id/result", authenticate, resultController);
