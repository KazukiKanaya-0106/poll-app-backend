import { Router } from "express";
import { loginController, signupController } from "../controllers/auth";

export const authRouter = Router();
authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
