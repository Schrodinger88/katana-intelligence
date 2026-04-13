"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How is Katana different from every other AI company?",
        answer: "We're workflow specialists first, AI specialists second. We start by understanding how your teams actually work, then reimagine what's possible with AI - without pushing any single tool or platform. We are tool-agnostic, industry-agnostic, but results-obsessed."
    },
    {
        question: "We've already tried AI and it didn't work. Why would this be different?",
        answer: "Most teams fail because they start with the wrong use cases or stop at the prototype. We focus only on what's worth building and stay through adoption - so it actually ships, gets used, and delivers measurable results."
    },
    {
        question: "How do I know if we're ready for AI?",
        answer: "You're ready if you have clear pain points, repetitive work, or untapped data slowing things down. We'll help you figure out what's worth automating - and what's not. Every engagement starts with clarity, not assumptions."
    },
    {
        question: "We don't have clean data or a big tech team - can we still do this?",
        answer: "Yes. We work with what you have, design around your existing systems, and handle the technical lift. You don't need a data team or a tech stack overhaul to get started."
    },
    {
        question: "How long until we see real results?",
        answer: "You'll typically see a working pilot within weeks, not months. We move fast, test early, and scale only once it's proven. Most clients see their first automations live within 14 days."
    },
    {
        question: "How much internal time will this take?",
        answer: "We know you hired us to get things off your team's plate. We keep your team's involvement focused and efficient - just enough to capture what matters, then we do the rest."
    },
    {
        question: "What happens after you deliver?",
        answer: "We don't hand off and vanish. We train your people, monitor how it's used, and refine until it runs smoothly without us. Adoption is where most AI projects die - we make sure yours doesn't."
    },
    {
        question: "What tools and platforms do you use?",
        answer: "We use a mix of AI tools, n8n, Make, custom APIs, and platforms like Slack, HubSpot, Gmail, and Calendly - whatever fits your existing stack. We adapt to your tools, not the other way around."
    },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="border-b border-white/10"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors pr-8">
                    {faq.question}
                </span>
                <span className="flex-shrink-0 text-foreground/40">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-foreground/60 leading-relaxed pb-6 pr-12">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section id="faq" className="relative overflow-hidden bg-secondary/30 py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12 md:mb-14">
                        <h2 className="mb-5 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                            Questions?
                        </h2>
                        <p className="text-lg text-foreground/60 md:text-xl">
                            Here are the ones we get asked the most.
                        </p>
                    </div>

                    <div>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
