import { OpenAI } from "openai";
import {
  buildDocsSystemPrompt,
  buildSystemPrompt,
  buildUserPrompt,
} from "../prompt";
import type { DietPlanRequest } from "../types/types";
import fs from "fs";
import { TWO_MINUTES_IN_MS } from "../constants";

const client = new OpenAI({
  apiKey: process.env.OPENAPI_API_KEY as string,
  timeout: TWO_MINUTES_IN_MS,
  logLevel: "debug",
});

export async function* generateDietPlan(input: DietPlanRequest) {
  const diretrizes = fs.readFileSync("knowledge/diretrizes.md", "utf-8");

  const stream = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: buildSystemPrompt() },
      { role: "user", content: buildUserPrompt(input) },
      { role: "system", content: buildDocsSystemPrompt(diretrizes) },
    ],
    temperature: 0.6,
    stream: true,
  });

  for await (const chuck of stream) {
    const delta = chuck.choices[0]?.delta.content;

    if (delta) yield delta;
  }
}
