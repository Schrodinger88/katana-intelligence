"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, Rocket, TrendingUp } from "lucide-react";

const steps = [
    {
        id: "01",
        icon: Phone,
        title: "Free 15-min Audit",
        description: "We look at where leads leak, which emails eat your evenings, and what your customers Google before calling you. You walk away with a clear picture - whether you hire us or not.",
        detail: "No sales pitch. Just actionable insights.",
    },
    {
        id: "02",
        icon: FileText,
        title: "Custom System Blueprint",
        description: "Within 48 hours you get a written plan: the exact automations, website changes, and AI SEO levers we'll build - plus projected lead volume and timeline.",
        detail: "You approve every detail before we start.",
    },
    {
        id: "03",
        icon: Rocket,
        title: "Build & Launch in 14 Days",
        description: "Website, AI responder, lead engine, and tracking - all live within two weeks. We build everything for free. No retainer billed until your first 10 qualified leads land.",
        detail: "Zero upfront cost. We eat the risk.",
    },
    {
        id: "04",
        icon: TrendingUp,
        title: "Grow on Autopilot",
        description: "Weekly optimization on conversion, SEO rankings, and ad performance. You see every metric in one dashboard - no black-box reporting, no guesswork.",
        detail: "Your system gets smarter every week.",
    },
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 40%"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                        From overwhelmed to automated.<br />
                        <span className="text-foreground/40">In four steps.</span>
                    </h2>
                    <p className="text-xl text-foreground/60">
                        A simple, proven process. No surprises, no hidden fees.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative">
                    {/* Vertical Progress Line - contained within the step icons area */}
                    <div className="absolute left-[27px] md:left-[31px] top-[28px] md:top-[32px] bottom-[28px] md:bottom-[32px] w-px bg-white/10 overflow-hidden">
                        <motion.div
                            className="w-full bg-primary origin-top"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex gap-6 md:gap-10 group"
                            >
                                {/* Step Indicator */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                                        <step.icon className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors duration-500" />
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 pb-16">
                                    <div className="bg-secondary/40 rounded-[2rem] p-8 md:p-10 border border-white/5 group-hover:bg-secondary/60 group-hover:border-white/10 transition-all duration-500">
                                        <span className="text-xs font-bold text-foreground/20 tracking-widest mb-4 block">
                                            STEP {step.id}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-foreground/60 text-lg leading-relaxed mb-4">
                                            {step.description}
                                        </p>
                                        <p className="text-sm text-primary/80 font-medium">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
