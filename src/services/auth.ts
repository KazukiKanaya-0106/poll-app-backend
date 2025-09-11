import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Login, Signup, TokenPayload } from "../schemas/auth";
import { User } from "../generated/zod";
import { createUser, findUserByEmail } from "../repositories/user";

export const signup = async (data: Signup): Promise<{ user: User; token: string }> => {
  const exists: User | null = await findUserByEmail(data.email);
  if (exists) throw new Error("User already exists");

  const hashedPassword: string = await bcrypt.hash(data.password, 10);
  const user: User = await createUser({
    email: data.email,
    name: data.name,
    hashedPassword,
  });
  const token: string = signToken(user.id);
  return { user, token };
};

export const login = async (data: Login): Promise<{ user: User; token: string }> => {
  const user: User | null = await findUserByEmail(data.email);
  if (!user) throw new Error("Invalid email or password");

  const isValid: boolean = await bcrypt.compare(data.password, user.password);
  if (!isValid) throw new Error("Invalid email or password");

  const token: string = signToken(user.id);
  return { user, token };
};

export const signToken = (userId: string): string => {
  const JWT_SECRET: string | undefined = process["env"]["JWT_SECRET"];
  if (JWT_SECRET === undefined) throw new Error("JWT_SECRET is not defined");

  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token: string): TokenPayload => {
  const JWT_SECRET: string | undefined = process["env"]["JWT_SECRET"];
  if (JWT_SECRET === undefined) throw new Error("JWT_SECRET is not defined");

  const payload: string | JwtPayload = jwt.verify(token, JWT_SECRET);
  if (typeof payload === "string") throw new Error("Invalid token payload");

  if (!("sub" in payload) || typeof payload.sub !== "string") throw new Error("Missing sub in token");
  return payload as TokenPayload;
};
