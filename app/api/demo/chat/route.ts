import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { katanaAssistantPrompt } from "@/lib/katana-demo";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function POST(request: NextRequest) {
  if (!openai) {
    return NextResponse.json(
      {
        error:
          "Live chat is not configured yet. Add OPENAI_API_KEY to enable the assistant.",
      },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = (body.messages ?? []).filter(
      (message): message is ChatMessage =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0
    );

    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!latestUserMessage) {
      return NextResponse.json(
        { error: "A user message is required." },
        { status: 400 }
      );
    }

    const recentHistory = messages
      .slice(-8)
      .map((message) =>
        `${message.role === "assistant" ? "Assistant" : "Visitor"}: ${
          message.content
        }`
      )
      .join("\n");

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      instructions: katanaAssistantPrompt,
      input: `Recent conversation:\n${recentHistory}\n\nReply to the latest visitor message.`,
      max_output_tokens: 220,
    });

    const message = response.output_text.trim();

    if (!message) {
      throw new Error("The model returned an empty response.");
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat demo error", error);
    return NextResponse.json(
      { error: "The assistant could not respond right now." },
      { status: 500 }
    );
  }
}
