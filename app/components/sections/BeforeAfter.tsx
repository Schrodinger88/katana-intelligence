"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Command,
  MessagesSquare,
  MessageSquare,
  Phone,
  PhoneCall,
  Search,
  TrendingUp,
  X,
} from "lucide-react";
import LiveChatDemo from "../demo/LiveChatDemo";
import LiveVoiceDemo from "../demo/LiveVoiceDemo";

const comparisons = [
  {
    category: "Lead Response",
    icon: PhoneCall,
    detail: "First-touch speed",
    before: {
      text: "Missed calls go to voicemail. Leads wait hours - or never hear back.",
      stat: "~4 hr avg response",
    },
    after: {
      text: "AI answers instantly. Quotes sent in minutes. Follow-ups are automatic.",
      stat: "< 30 sec response",
    },
  },
  {
    category: "Admin Work",
    icon: MessageSquare,
    detail: "Back-office load",
    before: {
      text: "Evenings spent on emails, invoices, and scheduling. Weekends too.",
      stat: "20+ hrs/week wasted",
    },
    after: {
      text: "Automated workflows handle the busywork. You focus on delivery.",
      stat: "2 hrs/week max",
    },
  },
  {
    category: "Online Presence",
    icon: Search,
    detail: "Search visibility",
    before: {
      text: "Outdated website. No SEO. Competitors rank above you on Google.",
      stat: "Page 3+ on Google",
    },
    after: {
      text: "Premium site + AI SEO + local optimization. Customers find you first.",
      stat: "Top 3 results",
    },
  },
  {
    category: "Growth",
    icon: TrendingUp,
    detail: "Pipeline quality",
    before: {
      text: "Word-of-mouth only. Feast-or-famine months. No predictable pipeline.",
      stat: "Inconsistent leads",
    },
    after: {
      text: "Multi-channel lead engine running 24/7. Predictable, compounding growth.",
      stat: "30-50 leads/month",
    },
  },
];

const states = {
  before: {
    label: "Without Katana",
    eyebrow: "Without Katana",
    title: "The business still runs, but it leaks time, leads, and momentum.",
    summary:
      "Manual follow-up, weak search presence, and reactive admin work keep growth inconsistent.",
    tone: "",
    panel: "",
    badge: "border-white/10 bg-white/[0.04] text-foreground/50",
    chip: "border-white/10 bg-white/[0.04] text-foreground/62",
    iconWrap: "bg-white/[0.04] text-foreground/55 ring-1 ring-inset ring-white/10",
    stateWrap: "bg-white/[0.05] text-foreground/45",
    accent: "bg-foreground/55",
    points: ["Slow response windows", "Manual admin burden", "Unreliable lead flow"],
  },
  after: {
    label: "With Katana",
    eyebrow: "With Katana",
    title: "One coordinated system handles response, visibility, and follow-through.",
    summary:
      "The same business becomes faster to contact, easier to find, and more predictable to grow.",
    tone: "",
    panel: "",
    badge: "border-white/10 bg-white/[0.04] text-foreground/50",
    chip: "border-white/10 bg-white/[0.04] text-foreground/62",
    iconWrap: "bg-white/[0.04] text-foreground/55 ring-1 ring-inset ring-white/10",
    stateWrap: "bg-white/[0.05] text-foreground/45",
    accent: "bg-foreground/55",
    points: ["Immediate lead handling", "Automated operations", "Compounding growth engine"],
  },
} as const;

export default function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false);
  const [showStickyChat, setShowStickyChat] = useState(false);
  const activeState = showAfter ? "after" : "before";
  const content = states[activeState];

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute right-[8%] bottom-20 h-80 w-80 rounded-full bg-white/[0.03] blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            See the difference.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/58 md:text-xl">
            What changes when your business runs on Katana.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-4 md:mb-10"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
            {(["before", "after"] as const).map((state) => {
              const selected = activeState === state;
              const isPositive = state === "after";

              return (
                <button
                  key={state}
                  type="button"
                  onClick={() => {
                    const nextShowAfter = state === "after";
                    setShowAfter(nextShowAfter);

                    if (!nextShowAfter) {
                      setShowStickyChat(false);
                    }
                  }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 md:px-6 ${
                    selected
                      ? isPositive
                        ? "bg-white text-black"
                        : "bg-white/[0.08] text-foreground"
                      : "text-foreground/38 hover:text-foreground/65"
                  }`}
                >
                  {states[state].label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeState}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="text-center text-sm text-foreground/45"
            >
              {content.summary}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.025] backdrop-blur-sm transition-colors duration-500"
        >
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="border-b border-white/8 p-6 lg:border-r lg:border-b-0 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeState}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                >
                  <span
                    className={`mb-5 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${content.badge}`}
                  >
                    {content.eyebrow}
                  </span>

                  <h3 className="max-w-xs text-2xl font-semibold leading-tight text-foreground md:text-[2rem]">
                    {content.title}
                  </h3>

                  <div className="mt-8 space-y-3">
                    {content.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 border-b border-white/6 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className={`h-2.5 w-2.5 rounded-full ${content.accent}`} />
                        <span className="text-sm text-foreground/62">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div>
              {comparisons.map((item, index) => {
                const row = item[activeState];

                return (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="grid gap-5 border-b border-white/8 px-6 py-6 last:border-b-0 md:grid-cols-[200px_minmax(0,1fr)_auto] md:items-start md:px-8"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${content.iconWrap}`}
                        >
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                            {item.detail}
                          </p>
                          <h4 className="text-lg font-medium text-foreground">
                            {item.category}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${item.category}-${activeState}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.24 }}
                        className="max-w-2xl"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${content.stateWrap}`}
                          >
                            {activeState === "after" ? (
                              <Check className="h-3.5 w-3.5" />
                            ) : (
                              <X className="h-3.5 w-3.5" />
                            )}
                          </div>
                          <p className="text-base leading-relaxed text-foreground/68 md:text-lg">
                            {row.text}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center md:justify-end">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${row.stat}-${activeState}`}
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.22 }}
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${content.chip}`}
                        >
                          {row.stat}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showAfter ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-12 max-w-5xl md:mt-16"
            >
              <div className="mb-8 text-center md:mb-10">
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Try the operating model live.
                </h3>
                <p className="text-foreground/50">
                  The phone agent stays visible here. The chat assistant appears
                  as a smooth sticky launcher, like documentation support.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6"
                >
                  <div className="mb-5 flex items-center gap-2">
                    <MessagesSquare className="h-4 w-4 text-foreground/40" />
                    <span className="text-sm font-medium text-foreground/60">
                      Sticky AI Chat
                    </span>
                  </div>

                  <h4 className="max-w-sm text-2xl font-semibold tracking-tight text-foreground">
                    Ask a question from anywhere on the page.
                  </h4>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/55">
                    When Katana is active, a clean bottom launcher slides in and
                    opens a support-style chat drawer on demand.
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowStickyChat(true)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-white/[0.07] hover:text-foreground"
                  >
                    Open sticky chat
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-foreground/40" />
                    <span className="text-sm font-medium text-foreground/60">
                      Live Voice Agent
                    </span>
                  </div>
                  <LiveVoiceDemo />
                </motion.div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {showAfter ? (
            <>
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setShowStickyChat(true)}
                className="fixed inset-x-4 bottom-4 z-40 mx-auto flex w-auto max-w-6xl items-center gap-4 rounded-[1.9rem] border border-white/12 bg-[#0b0b0f]/92 px-5 py-4 text-left shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:inset-x-6 md:px-7 md:py-5"
              >
                <div className="min-w-0 flex-1">
                  <span className="block truncate text-[clamp(1.25rem,2vw,2rem)] font-medium tracking-tight text-foreground/72">
                    Ask a question...
                  </span>
                </div>
                <div className="hidden items-center gap-3 text-foreground/28 md:flex">
                  <div className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs">
                    <Command className="h-3.5 w-3.5" />
                    I
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/70">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {showStickyChat ? (
                  <>
                    <motion.button
                      type="button"
                      aria-label="Close sticky chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setShowStickyChat(false)}
                      className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px]"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 28, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 18, scale: 0.99 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-3xl rounded-[2rem] border border-white/12 bg-[#0b0b0f]/96 p-3 shadow-[0_24px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl md:inset-x-6"
                    >
                      <div className="mb-3 flex items-center justify-between px-2 pt-1">
                        <div>
                          <p className="text-sm font-medium text-foreground/72">
                            Katana AI Assistant
                          </p>
                          <p className="text-xs text-foreground/38">
                            Ask about automation, websites, AI SEO, pricing, or
                            implementation.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowStickyChat(false)}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-foreground/55 transition-colors hover:bg-white/[0.05] hover:text-foreground"
                        >
                          Close
                        </button>
                      </div>
                      <LiveChatDemo heightClassName="h-[min(70vh,560px)]" />
                    </motion.div>
                  </>
                ) : null}
              </AnimatePresence>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
