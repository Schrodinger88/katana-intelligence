"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Check } from "lucide-react";

const comparisons = [
    {
        category: "Lead Response",
        before: { text: "Missed calls go to voicemail. Leads wait hours — or never hear back.", stat: "~4 hr avg response" },
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
        after: { text: "Premium site + SEO + local optimization. Customers find you first.", stat: "Top 3 results" },
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
        <section className="py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        See the difference.
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`rounded-[2rem] p-8 border transition-all duration-500 ${
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
                                        <p className="text-foreground/70 text-lg leading-relaxed">
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
            </div>
        </section>
    );
}
