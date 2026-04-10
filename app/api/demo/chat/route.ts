import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { katanaAssistantPrompt } from "@/lib/katana-demo";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const usingOpenRouter = Boolean(process.env.OPENROUTER_API_KEY);

const openai = process.env.OPENROUTER_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": process.env.APP_URL ?? "http://localhost:3000",
        "X-Title": process.env.APP_NAME ?? "Katana Intelligence",
      },
    })
  : process.env.OPENAI_API_KEY
    ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    : null;

const chatModel = process.env.OPENROUTER_MODEL
  ? process.env.OPENROUTER_MODEL
  : usingOpenRouter
    ? "openrouter/free"
    : process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini";

export async function POST(request: NextRequest) {
  if (!openai) {
    return NextResponse.json(
      {
        error:
          "Live chat is not configured yet. Add OPENROUTER_API_KEY or OPENAI_API_KEY to enable the assistant.",
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

    const completion = await openai.chat.completions.create({
      model: chatModel,
      temperature: 0.4,
      max_tokens: 220,
      messages: [
        {
          role: "system",
          content: katanaAssistantPrompt,
        },
        {
          role: "user",
          content: `Recent conversation:\n${recentHistory}\n\nReply to the latest visitor message.`,
        },
      ],
    });

    const message = completion.choices[0]?.message?.content?.trim();

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
