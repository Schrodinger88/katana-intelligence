"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type ChatMessage = {
  id: string;
  from: "user" | "ai";
  text: string;
};

const starterMessage: ChatMessage = {
  id: "welcome",
  from: "ai",
  text: "Hi, I’m the Katana assistant. Ask me about automation, AI SEO, websites, pricing, or growth systems. Je peux aussi répondre en français.",
};

export default function LiveChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isPending]);

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();

    if (!input.trim() || isPending) {
      return;
    }

    const userText = input.trim();
    const nextMessages = [
      ...messages,
      {
        id: `user-${Date.now()}`,
        from: "user" as const,
        text: userText,
      },
    ];

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsPending(true);

    try {
      const response = await fetch("/api/demo/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.map((message) => ({
            role: message.from === "ai" ? "assistant" : "user",
            content: message.text,
          })),
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok || !data.message) {
        throw new Error(data.error ?? "The assistant could not respond.");
      }

      const assistantMessage = data.message;

      setMessages((current) => [
        ...current,
        {
          id: `ai-${Date.now()}`,
          from: "ai",
          text: assistantMessage,
        },
      ]);
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "The assistant could not respond.";

      setError(message);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm font-medium text-foreground/70">
          Katana AI Chat
        </span>
        <span className="ml-auto text-[10px] text-foreground/30">
          Live assistant
        </span>
      </div>

      <div ref={messagesContainerRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex ${
              message.from === "ai" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[86%] rounded-2xl px-4 py-2.5 text-sm ${
                message.from === "ai"
                  ? "rounded-bl-sm bg-white/10 text-foreground/82"
                  : "rounded-br-sm bg-primary text-primary-invert"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}

        {isPending ? (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3">
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.2s]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/40 [animation-delay:-0.1s]" />
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/40" />
            </div>
          </div>
        ) : null}

        {error ? (
          <p className="text-sm text-red-400/90">{error}</p>
        ) : null}
      </div>

      <form onSubmit={sendMessage} className="border-t border-white/8 p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask in English or French"
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-white/20"
          />
          <button
            type="submit"
            disabled={isPending}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4 text-primary" />
          </button>
        </div>
      </form>
    </div>
  );
}
