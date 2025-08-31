import { Router } from "express";
import { loginController, signupController } from "../controllers/auth.controller";

export const authRoutes = Router();
authRoutes.use("/signup", signupController);
authRoutes.use("/login", loginController);