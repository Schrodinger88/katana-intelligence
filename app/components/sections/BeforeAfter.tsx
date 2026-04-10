"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Check, MessageSquare, Phone } from "lucide-react";
import LiveChatDemo from "../demo/LiveChatDemo";
import LiveVoiceDemo from "../demo/LiveVoiceDemo";

const comparisons = [
    {
        category: "Lead Response",
        before: { text: "Missed calls go to voicemail. Leads wait hours - or never hear back.", stat: "~4 hr avg response" },
        after: { text: "AI answers instantly. Quotes sent in minutes. Follow-ups are automatic.", stat: "< 30 sec response" },
    },
    {
        category: "Admin Work",
        before: { text: "Evenings spent on emails, invoices, and scheduling. Weekends too.", stat: "20+ hrs/week wasted" },
        after: { text: "Automated workflows handle the busywork. You focus on delivery.", stat: "2 hrs/week max" },
    },
    {
        category: "Online Presence",
        before: { text: "Outdated website. No SEO. Competitors rank above you on Google.", stat: "Page 3+ on Google" },
        after: { text: "Premium site + AI SEO + local optimization. Customers find you first.", stat: "Top 3 results" },
    },
    {
        category: "Growth",
        before: { text: "Word-of-mouth only. Feast-or-famine months. No predictable pipeline.", stat: "Inconsistent leads" },
        after: { text: "Multi-channel lead engine running 24/7. Predictable, compounding growth.", stat: "30-50 leads/month" },
    },
];

export default function BeforeAfter() {
    const [showAfter, setShowAfter] = useState(false);

    return (
        <section className="relative overflow-hidden bg-secondary/20 py-20 md:py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center md:mb-14"
                >
                    <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        See the difference.
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/60 md:mb-10 md:text-xl">
                        What changes when your business runs on Katana.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center bg-secondary/60 border border-white/10 rounded-full p-1">
                        <button
                            onClick={() => setShowAfter(false)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                !showAfter
                                    ? "bg-red-500/20 text-red-400 shadow-sm"
                                    : "text-foreground/40 hover:text-foreground/60"
                            }`}
                        >
                            Without Katana
                        </button>
                        <button
                            onClick={() => setShowAfter(true)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                showAfter
                                    ? "bg-green-500/20 text-green-400 shadow-sm"
                                    : "text-foreground/40 hover:text-foreground/60"
                            }`}
                        >
                            With Katana
                        </button>
                    </div>
                </motion.div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`rounded-[2rem] border p-6 transition-all duration-500 md:p-8 ${
                                showAfter
                                    ? "bg-green-500/5 border-green-500/10"
                                    : "bg-red-500/5 border-red-500/10"
                            }`}
                        >
                            <span className="text-xs font-bold text-foreground/30 tracking-widest mb-4 block uppercase">
                                {item.category}
                            </span>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={showAfter ? "after" : "before"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start gap-3 mb-4">
                                        {showAfter ? (
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-green-400" />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <X className="w-3.5 h-3.5 text-red-400" />
                                            </div>
                                        )}
                                        <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                                            {showAfter ? item.after.text : item.before.text}
                                        </p>
                                    </div>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                        showAfter
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                    }`}>
                                        {showAfter ? item.after.stat : item.before.stat}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* AI Demo Section */}
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
                                    Try it yourself.
                                </h3>
                                <p className="text-foreground/50">
                                    Chat with our AI or hear how it handles a phone call live.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <MessageSquare className="h-4 w-4 text-foreground/40" />
                                        <span className="text-sm font-medium text-foreground/60">Live AI Chat</span>
                                    </div>
                                    <LiveChatDemo />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.6, delay: 0.05 }}
                                >
                                    <div className="mb-3 flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-foreground/40" />
                                        <span className="text-sm font-medium text-foreground/60">Live Voice Agent</span>
                                    </div>
                                    <LiveVoiceDemo />
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </section>
    );
}
