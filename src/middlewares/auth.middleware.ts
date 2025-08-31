import type { RequestHandler } from "express";
import { verifyToken } from "../services/auth.service";

export const authenticate: RequestHandler = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const payload = verifyToken(token);
    req.userId = payload.sub;
    return next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
