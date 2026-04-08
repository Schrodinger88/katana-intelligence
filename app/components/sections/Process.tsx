"use client";

import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Free 30-min Audit",
        description: "I shadow your week — watching where leads leak, which emails eat your evenings, and what your customers Google before calling you."
    },
    {
        id: "02",
        title: "Custom System Blueprint",
        description: "Within 48 hours you get a written plan: the exact automations, website changes, and SEO/ASO levers I'll build — plus projected lead volume."
    },
    {
        id: "03",
        title: "Build in 14 Days",
        description: "Website, AI responder, lead engine, and tracking all live within two weeks. No retainer billed until your first 10 qualified leads land."
    },
    {
        id: "04",
        title: "Grow on Autopilot",
        description: "Weekly optimization on conversion, SEO rankings, and ad performance. You see every metric in one dashboard — no black-box reporting."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        How it works.
                    </h2>
                    <p className="text-xl text-foreground/60">
                        A simple, proven process to get you from overwhelmed to automated.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-8 left-0 right-0 h-px bg-foreground/10 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-6 pt-12"
                        >
                            <div className="w-4 h-4 rounded-full bg-primary absolute top-6 left-6 md:left-0 md:-translate-y-1/2 md:translate-x-0 hidden md:block ring-4 ring-background" />

                            <span className="text-sm font-bold text-foreground/30 mb-4 block tracking-wider">
                                {step.id}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {step.title}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
