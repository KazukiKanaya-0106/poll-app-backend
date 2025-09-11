import z from "zod";

export const roleSchema = z.enum(["user", "assistant", "system"]);

export type Role = z.infer<typeof roleSchema>;

export const chatMessageSchema = z.object({
  role: roleSchema,
  content: z.string().max(1000),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;
