import { NextResponse } from "next/server";
import OpenAI from "openai";
import { katanaVoicePrompt } from "@/lib/katana-demo";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function POST() {
  if (!openai) {
    return NextResponse.json(
      {
        error:
          "Live voice is not configured yet. Add OPENAI_API_KEY to enable the voice agent.",
      },
      { status: 503 }
    );
  }

  try {
    const session = await openai.realtime.clientSecrets.create({
      expires_after: {
        anchor: "created_at",
        seconds: 600,
      },
      session: {
        type: "realtime",
        model: "gpt-realtime",
        instructions: katanaVoicePrompt,
        output_modalities: ["audio"],
        max_output_tokens: 300,
        audio: {
          input: {
            noise_reduction: { type: "near_field" },
            transcription: {
              model: "gpt-4o-mini-transcribe",
              prompt:
                "The conversation may switch between English and French.",
            },
            turn_detection: {
              type: "server_vad",
              create_response: true,
              interrupt_response: true,
              idle_timeout_ms: 8000,
            },
          },
          output: {
            voice: "marin",
          },
        },
      },
    });

    return NextResponse.json({
      client_secret: {
        value: session.value,
        expires_at: session.expires_at,
      },
      model: "gpt-realtime",
    });
  } catch (error) {
    console.error("Voice demo session error", error);
    return NextResponse.json(
      { error: "The voice agent could not start right now." },
      { status: 500 }
    );
  }
}
