import { User } from "../generated/zod";
import { CreateUser } from "../schemas/auth.schema";
import { prisma } from "./prisma";

export const createUser = async (data: CreateUser): Promise<User> => {
  return await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: data.hashedPassword,
    },
  });
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};
