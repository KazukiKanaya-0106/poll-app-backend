import type { Request, Response } from "express";
import { login, signup } from "../services/auth";

export const signupController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const result = await signup({ email, password, name });
  res.status(201).json(result);
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await login({ email, password });
  res.status(200).json(result);
};
