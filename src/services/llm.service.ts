import { ollama } from "../clients/ollama.client";
import { ChatMessage } from "../schemas/llm.schema";

export const chatLLM = async (messages: ChatMessage[]): Promise<string> => {
  const response = await ollama.chat({
    model: process.env["MODEL"] || "gpt-oss:20b",
    messages: messages,
  });
  return response.message.content;
};

export const coerceJSON = <T = unknown>(text: string): T => {
  const trimmed = text.trim();

  // ```json ... ``` や ``` ... ``` を除去
  const unfenced = trimmed.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");

  try {
    return JSON.parse(unfenced) as T;
  } catch {
    // 先頭の { ... } だけ抜くフォールバック
    const m = unfenced.match(/{[\s\S]*}/);
    if (m) return JSON.parse(m[0]) as T;
    throw new Error("LLM output is not valid JSON");
  }
};
