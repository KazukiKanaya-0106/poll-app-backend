import { JwtPayload } from "jsonwebtoken";
import z from "zod";

export const signupSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type Signup = z.infer<typeof signupSchema>;

export const createUserSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  hashedPassword: z.string().min(6).max(100),
});

export type CreateUser = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type Login = z.infer<typeof loginSchema>;

export interface TokenPayload extends JwtPayload {
  sub: string;
}
