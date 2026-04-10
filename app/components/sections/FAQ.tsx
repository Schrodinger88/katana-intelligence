"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What kind of businesses do you work with?",
        answer: "We work with service-based businesses, agencies, consultants, and SMBs that are spending too much time on admin, struggling with inconsistent leads, or need a better web presence. If you're doing repetitive work that a system could handle, we can help."
    },
    {
        question: "How long does it take to see results?",
        answer: "Most clients see their first automations live within 2 weeks. Lead generation systems typically show measurable results within 30 days. Website projects are delivered in 3-4 weeks."
    },
    {
        question: "Do I need to be technical?",
        answer: "Not at all. Everything is done-for-you. We handle the building, integration, and maintenance. You just tell us what's slowing you down, and we fix it."
    },
    {
        question: "What counts as a \"qualified lead\"?",
        answer: "A real person in your service area who requested a quote, booked a call, or explicitly asked about your services. Bots, spam submissions, duplicates, and out-of-area inquiries don't count. We define this in writing before we start so there's no argument later."
    },
    {
        question: "Do you handle AI SEO and marketing too?",
        answer: "Yes - it's all included. I handle AI SEO (GEO, AEO), semantic content optimization, E-E-A-T signals, and performance marketing (paid ads, landing pages, conversion tracking). Everything is wired into the same system as your AI responder, so every lead source is measurable in one place."
    },
    {
        question: "What tools and platforms do you use?",
        answer: "We use a mix of AI tools, n8n, Make, custom APIs, and platforms like Slack, HubSpot, Gmail, and Calendly - whatever fits your existing stack. We adapt to your tools, not the other way around."
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes. There are no long-term contracts. We work on a month-to-month basis because we believe our results should keep you around, not a contract."
    },
    {
        question: "What happens during the free strategy call?",
        answer: "We'll spend 15 minutes understanding your business, identifying your biggest time drains, and mapping out exactly how automation can help. No sales pitch - just actionable insights you can use whether you hire us or not."
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
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-primary/4 to-transparent" />
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
