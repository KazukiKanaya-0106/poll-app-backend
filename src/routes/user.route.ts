import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware";

export const userRoute = Router();
userRoute.get("/profile", authenticate, (_req, res) => {
  res.json({ message: "Hello, user!" });
});
