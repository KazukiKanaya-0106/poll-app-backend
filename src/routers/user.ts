import { Router } from "express";
import { authenticate } from "../middlewares/auth";

export const userRouter = Router();
userRouter.get("/profile", authenticate, (_req, res) => {
  res.json({ message: "Hello, user!" });
});
